import faker from 'faker';
import { Product } from '../utils/types';

const generateDemoProducts = (numItems = 5): Product[] => {
  let data = [];
  for (let i = 0; i < numItems; i++) {
    const numTags = faker.random.number({ min: 2, max: 6 });
    const numSentences = faker.random.number({ min: 2, max: 4 });
    data.push({
      name: faker.commerce.productName(),
      description: faker.lorem.paragraph(numSentences),
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
