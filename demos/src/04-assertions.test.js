/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
// matchers

test('test obj', () => {
  const data = { name: 'Luisa' };
  data.lastName = 'López';
  expect(data).toEqual({ name: 'Luisa', lastName: 'López' });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined;
});

test('booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('string', () => {
  expect('Luisa').toMatch('Luisa');
});

test('list / arrays', () => {
  const numbers = [1, 2, 3, 4];

  expect(numbers).toContain(3);
});
