import { add } from '../src/server';

describe('Test 5', () => {
  it('adds large numbers', () => {
    expect(add(1000000, 2000000)).toBe(3000000);
  });
});
