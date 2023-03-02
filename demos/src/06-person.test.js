/* eslint-disable no-undef */
const Person = require('./06-person');

describe('Test for person', () => {
  // para no crear una instancia a cada rato
  let person;
  beforeEach(() => {
    person = new Person('Luisa', 45, 1.7);
  });

  test('Should return down', () => {
    person.weight = 45;
    const imc = person.calcIMC();
    expect(imc).toBe('down');
  });

  test('Should return normal', () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
