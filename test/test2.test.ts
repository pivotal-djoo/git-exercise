import { add } from '../src/server';

describe('Test 2', () => {
  it('adds negative numbers', () => {
    expect(add(-4, -6)).toBe(-10);
  });
});
