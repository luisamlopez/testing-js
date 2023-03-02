/* eslint-disable object-curly-newline */
/* eslint-disable no-undef */
const { sum, multiply, divide, sub } = require('./02-math');

test('adds 1 + 2 should be 3', () => {
  const response = sum(1, 2);
  expect(response).toBe(3);
});

test('multiply 2 x 2 should be 4', () => {
  const response = multiply(2, 2);
  expect(response).toBe(4);
});

test('divide 4 / 2 should be 2', () => {
  const response = divide(4, 2);
  expect(response).toBe(2);

  const response2 = divide(8, 2);
  expect(response2).toBe(4);

  const response3 = divide(8, 0);
  expect(response3).toBe(Infinity); // Puedo hacer un if primero y devolver null
});

test('subtract 1 - 2 should be -1', () => {
  const response = sub(1, 2);
  expect(response).toBe(-1);
});
