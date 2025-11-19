import { add } from '../src/server';

describe('Test 6', () => {
  it('adds decimal numbers', () => {
    expect(add(1.5, 2.25)).toBe(3.75);
  });
});
