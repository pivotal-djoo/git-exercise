import { add } from '../src/server';

describe('Test 6', () => {
  it('adds decimal numbers', () => {
    expect(add(1.5, 2.25)).toBe(3.75);
  });

  it('adds numbers resulting in zero', () => {
    expect(add(5, -5)).toBe(0);
  });
});
