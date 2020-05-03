import React from 'react';
import { render } from '@testing-library/react';
import ProductCard from '../components/product-card';
import generateDemoProducts from '../fixtures/generate-demo-products';
import { TagsInterface } from '../components/tags';

describe('<ProductCard />', () => {
  const [product] = generateDemoProducts(1);
  let tags = { one: true, two: false };

  let wrapper,
    title: HTMLElement,
    description: HTMLElement,
    tagsEl: HTMLElement;

  beforeEach(() => {
    wrapper = render(
      <ProductCard {...product} tags={tags} onToggle={() => {}} />,
    );
    title = wrapper.getByTestId('product-card-title');
    description = wrapper.getByTestId('description');
    tagsEl = wrapper.getByTestId('tags');
  });

  test('should render title', () => {
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(product.name);
  });
  test('should render description', () => {
    expect(description).toBeInTheDocument();
  });
  test('should render tags', () => {
    expect(tagsEl).toBeInTheDocument();
  });
});
