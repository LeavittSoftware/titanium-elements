import { debounce } from '../titanium-helpers';

test('Should debounce', done => {
  const mockCallback = jest.fn(x => x);

  const getTheResult = debounce(mockCallback, 3);

  getTheResult();
  getTheResult();
  getTheResult();
  getTheResult();
  getTheResult();

  setTimeout(() => {
    expect(mockCallback.mock.calls.length).toBe(1);
    done();
  }, 5);
});

test('Should stack async calls', done => {
  let finalResult: string;

  const getTheResult = debounce(
    async (result: string, interval: number) =>
      new Promise(resolve => {
        setTimeout(() => {
          finalResult = result;
          resolve();
        }, interval);
      }),
    3
  );

  getTheResult('1', 50);

  setTimeout(() => {
    getTheResult('2', 5);
  }, 5);

  setTimeout(() => {
    expect(finalResult).toBe('2');
    done();
  }, 100);
});

test('Returns results', async done => {
  const callback = async (result: string, interval: number) =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(result);
      }, interval);
    });

  const getTheResult = debounce(callback, 3);

  const result1 = await getTheResult('1', 50);

  const result2 = await getTheResult('2', 5);

  setTimeout(() => {
    expect(result1).toBe('1');
    expect(result2).toBe('2');
    done();
  }, 100);
});
