import { nothing } from 'lit';

export function join(values, joiner) {
  return values.map((v, i) => [v, i < values.length - 1 ? joiner : nothing]);
}
