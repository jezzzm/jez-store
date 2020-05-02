import faker from 'faker';

const generateDemoProducts = (numItems = 5) => {
  let data = [];
  for (let i = 0; i < numItems; i++) {
    const numTags = faker.random.number({ min: 2, max: 6 });
    data.push({
      name: faker.commerce.productName(),
      sentences: faker.lorem.sentences().split('. '),
      tags: [...Array(numTags)].map(() =>
        faker.commerce.productAdjective().toLowerCase(),
      ),
      id: faker.random.number(10000),
      image: faker.image.avatar(),
      price: faker.finance.amount(5, 999),
    });
  }
  return data;
};
export default generateDemoProducts;