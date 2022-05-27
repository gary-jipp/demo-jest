const sum = require ('../math-sum');
const add  = require ('../math-add');

// Need to mock add() since it uses a non-existent function
jest.mock("../math-add"); // Mock

it('returns 5 for sum(2,3)', () => {
  // console.log(add);
  add.mockReturnValue(5);   // Mock

  const result = sum(2, 3);
  expect(result).toEqual(5);

  expect(add).toBeCalledTimes(1);
  expect(add).toBeCalledWith(2,3);
});
