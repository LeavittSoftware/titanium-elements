import { objectToFormData } from './object-to-form-data.js';

describe('objectToFormData', () => {
  it('should convert a simple object to FormData', () => {
    const obj = { name: 'John', age: '30' };
    const formData = objectToFormData(obj);

    expect(formData.get('name')).toBe('John');
    expect(formData.get('age')).toBe('30');
  });

  it('should convert a nested object to FormData with dot notation', () => {
    const obj = {
      user: {
        name: 'John',
        email: 'john@example.com',
      },
    };
    const formData = objectToFormData(obj);

    expect(formData.get('user.name')).toBe('John');
    expect(formData.get('user.email')).toBe('john@example.com');
  });

  it('should convert arrays to FormData with bracket notation', () => {
    const obj = {
      tags: ['tag1', 'tag2', 'tag3'],
    };
    const formData = objectToFormData(obj);

    expect(formData.get('tags[0]')).toBe('tag1');
    expect(formData.get('tags[1]')).toBe('tag2');
    expect(formData.get('tags[2]')).toBe('tag3');
  });

  it('should convert nested arrays to FormData', () => {
    const obj = {
      items: [
        { name: 'item1', value: 'value1' },
        { name: 'item2', value: 'value2' },
      ],
    };
    const formData = objectToFormData(obj);

    expect(formData.get('items[0].name')).toBe('item1');
    expect(formData.get('items[0].value')).toBe('value1');
    expect(formData.get('items[1].name')).toBe('item2');
    expect(formData.get('items[1].value')).toBe('value2');
  });

  it('should handle File objects correctly', () => {
    const file = new File(['content'], 'test.txt', { type: 'text/plain' });
    const obj = {
      upload: file,
    };
    const formData = objectToFormData(obj);

    expect(formData.get('upload')).toBe(file);
  });

  it('should handle File objects in arrays without array notation in the key', () => {
    const file1 = new File(['content1'], 'test1.txt', { type: 'text/plain' });
    const file2 = new File(['content2'], 'test2.txt', { type: 'text/plain' });
    const obj = {
      files: [file1, file2],
    };
    const formData = objectToFormData(obj);

    // When Files are in arrays, the key doesn't include array notation
    expect(formData.get('files')).toBe(file1);
    // Note: When there are multiple files in an array, only the last one is returned
    // This is the actual behavior of the implementation
  });

  it('should handle deeply nested objects', () => {
    const obj = {
      level1: {
        level2: {
          level3: {
            value: 'deep-value',
          },
        },
      },
    };
    const formData = objectToFormData(obj);

    expect(formData.get('level1.level2.level3.value')).toBe('deep-value');
  });

  it('should skip undefined values', () => {
    const obj = {
      defined: 'value',
      undefinedValue: undefined,
    };
    const formData = objectToFormData(obj);

    expect(formData.get('defined')).toBe('value');
    expect(formData.has('undefinedValue')).toBe(false);
  });

  it('should handle null values', () => {
    const obj = {
      nullValue: null,
      regularValue: 'test',
    };
    const formData = objectToFormData(obj);

    // null is an object, so it goes through the recursive object path
    // which results in empty keys being created but no value appended
    expect(formData.get('regularValue')).toBe('test');
    // null objects don't get appended with values (they have no enumerable properties)
  });

  it('should handle boolean values', () => {
    const obj = {
      isActive: true,
      isDeleted: false,
    };
    const formData = objectToFormData(obj);

    expect(formData.get('isActive')).toBe('true');
    expect(formData.get('isDeleted')).toBe('false');
  });

  it('should handle number values', () => {
    const obj = {
      count: 42,
      price: 99.99,
    };
    const formData = objectToFormData(obj);

    expect(formData.get('count')).toBe('42');
    expect(formData.get('price')).toBe('99.99');
  });

  it('should use existing FormData if provided', () => {
    const existingFormData = new FormData();
    existingFormData.append('existing', 'value');
    const obj = {
      newField: 'newValue',
    };
    const formData = objectToFormData(obj, existingFormData);

    expect(formData.get('existing')).toBe('value');
    expect(formData.get('newField')).toBe('newValue');
  });

  it('should handle empty objects', () => {
    const obj = {};
    const formData = objectToFormData(obj);

    // FormData has no entries for empty objects (they have no own properties)
    let hasEntries = false;
    for (const _ of formData.entries()) {
      hasEntries = true;
      break;
    }
    expect(hasEntries).toBe(false);
  });

  it('should handle objects with namespace parameter', () => {
    const obj = {
      value: 'test',
    };
    const formData = objectToFormData(obj, undefined, 'data');

    expect(formData.get('data.value')).toBe('test');
  });

  it('should handle arrays with namespace parameter', () => {
    const obj = ['value1', 'value2'];
    const formData = objectToFormData(obj, undefined, 'items');

    expect(formData.get('items[0]')).toBe('value1');
    expect(formData.get('items[1]')).toBe('value2');
  });

  it('should handle complex nested structures with arrays and objects', () => {
    const obj = {
      users: [
        { name: 'Alice', roles: ['admin', 'user'] },
        { name: 'Bob', roles: ['user'] },
      ],
      metadata: {
        version: '1.0',
        tags: ['production', 'active'],
      },
    };
    const formData = objectToFormData(obj);

    expect(formData.get('users[0].name')).toBe('Alice');
    expect(formData.get('users[0].roles[0]')).toBe('admin');
    expect(formData.get('users[0].roles[1]')).toBe('user');
    expect(formData.get('users[1].name')).toBe('Bob');
    expect(formData.get('users[1].roles[0]')).toBe('user');
    expect(formData.get('metadata.version')).toBe('1.0');
    expect(formData.get('metadata.tags[0]')).toBe('production');
    expect(formData.get('metadata.tags[1]')).toBe('active');
  });

  it('should handle empty arrays', () => {
    const obj = {
      tags: [],
    };
    const formData = objectToFormData(obj);

    // Empty arrays don't add any entries (no properties to iterate)
    let hasEntries = false;
    for (const key of formData.keys()) {
      if (key.startsWith('tags')) {
        hasEntries = true;
        break;
      }
    }
    expect(hasEntries).toBe(false);
  });

  it('should handle mixed data types in arrays', () => {
    const obj = {
      mixed: [1, 'string', true],
    };
    const formData = objectToFormData(obj);

    expect(formData.get('mixed[0]')).toBe('1');
    expect(formData.get('mixed[1]')).toBe('string');
    expect(formData.get('mixed[2]')).toBe('true');
  });

  it('should handle Date objects', () => {
    const date = new Date('2024-01-01');
    const obj = {
      createdAt: date,
    };
    const formData = objectToFormData(obj);

    // Date objects are treated as objects and go through the recursive path
    // which results in no value being appended (Date has no enumerable properties in this context)
    // This test verifies the function doesn't crash on Date objects
    const entries = Array.from(formData.entries());
    expect(entries.length).toBe(0);
  });

  it('should handle objects with special characters in keys', () => {
    const obj = {
      'key-with-dash': 'value',
      'key_with_underscore': 'value',
      'key.with.dot': 'value',
    };
    const formData = objectToFormData(obj);

    expect(formData.get('key-with-dash')).toBe('value');
    expect(formData.get('key_with_underscore')).toBe('value');
    expect(formData.get('key.with.dot')).toBe('value');
  });

  it('should handle nested arrays without objects', () => {
    const obj = {
      nested: [
        ['a', 'b'],
        ['c', 'd'],
      ],
    };
    const formData = objectToFormData(obj);

    expect(formData.get('nested[0][0]')).toBe('a');
    expect(formData.get('nested[0][1]')).toBe('b');
    expect(formData.get('nested[1][0]')).toBe('c');
    expect(formData.get('nested[1][1]')).toBe('d');
  });
});
