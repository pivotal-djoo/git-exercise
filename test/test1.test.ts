import { add } from '../src/server';

describe('Test 1', () => {
  it('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
});
