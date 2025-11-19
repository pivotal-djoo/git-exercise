import { add } from '../src/server';

describe('Test 3', () => {
  it('adds a positive and a negative number', () => {
    expect(add(10, -3)).toBe(7);
  });
});
