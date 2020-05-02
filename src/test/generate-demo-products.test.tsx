import generateDemoProducts from '../fixtures/generate-demo-products';

describe('demo products generator', () => {
  it('should work for one item', () => {
    const one = generateDemoProducts(1);
    expect(one).toHaveLength(1);
    expect(one[0]).toHaveProperty('name');
    expect(one[0]).toHaveProperty('sentences');
    expect(one[0]).toHaveProperty('tags');
  });

  it('should work for many items', () => {
    const five = generateDemoProducts(5);
    expect(five).toHaveLength(5);
    expect(five[0]).toHaveProperty('name');
    expect(five[0]).toHaveProperty('sentences');
    expect(five[0]).toHaveProperty('tags');
  });
});
