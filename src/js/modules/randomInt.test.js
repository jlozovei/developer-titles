import randomInt from './randomInt';

describe('randomInt', () => {
  it('Should generate a random integer', () => {
    const min = 0;
    const max = 10;
    const random = randomInt(min, max, false);

    expect(random).toBeGreaterThan(min);
    expect(random).toBeLessThanOrEqual(max);
  });
});
