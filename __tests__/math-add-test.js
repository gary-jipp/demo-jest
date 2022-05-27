const add = require('../math-add');

it('returns true if true', () => {
  expect(true).toBeTruthy();
});

it('returns 7 for add(3,4)', () => {
  const result = add(3, 4);
  expect(result).toEqual(7);
});
