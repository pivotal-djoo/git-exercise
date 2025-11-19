import { add } from '../src/server';

describe('Test 4', () => {
  it('adds zero to a number', () => {
    expect(add(0, 8)).toBe(8);
  });
});
