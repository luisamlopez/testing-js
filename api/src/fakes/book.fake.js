const { faker } = require('@faker-js/faker');

const generateOneBook = () => ({
  _id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
});

const generateManyBooks = (size) => {
  const limit = size ?? 10;
  const fakeBooks = [];
  for (let i = 0; i < limit; i += 1) {
    fakeBooks.push(generateOneBook());
  }
  return [...fakeBooks];
};

module.exports = { generateOneBook, generateManyBooks };
