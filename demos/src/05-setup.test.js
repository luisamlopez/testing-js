/* eslint-disable no-undef */
describe('Set', () => {
  beforeAll(() => {
    console.log('beforeAll');
    // up bd e.g
    // corre dependiendo de donde se ponga, el describe, el scope
    // corre antes de todas las pruebas
  });

  afterAll(() => {
    console.log('afterAll');
    // up bd e.g
    // corre antes de todas las pruebas
  });

  beforeEach(() => {
    console.log('beforeEach');
    // up bd e.g
    // antes de cada una
  });

  afterEach(() => {
    console.log('afterEach');
    // up bd e.g
    // antes de cada una
  });

  test('case 1', () => {
    expect(1 + 1).toBe(2);
    console.log('case 1')
  });
  test('case 2', () => {
    expect(1 + 2).toBe(3);
    console.log('case 2')
  });
  describe('other group', () => {
    test('case 3', () => {
      expect(1 + 3).toBe(4);
      console.log('case 3')
    });
    test('case 4', () => {
      expect(1 + 4).toBe(5);
      console.log('case 4')
    });
  });
});

// describe permite hacer varias pruebas y grupos de pruebas en una sola función por así decirlo
