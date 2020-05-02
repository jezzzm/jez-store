import React from 'react';
import { render } from '@testing-library/react';
import ProductCard from '../components/product-card';
import generateDemoProducts from '../fixtures/generate-demo-products';

describe('<ProductCard />', () => {
  const [product] = generateDemoProducts(1);
  let wrapper,
    card: HTMLElement,
    title: HTMLElement,
    sentences: HTMLElement,
    tags: HTMLElement;

  beforeEach(() => {
    wrapper = render(<ProductCard {...product} />);
    title = wrapper.getByTestId('product-card-title');
    sentences = wrapper.getByTestId('sentences');
    tags = wrapper.getByTestId('tags');
  });

  test('should render title', () => {
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(product.name);
  });
  test('should render sentences', () => {
    expect(sentences).toBeInTheDocument();
  });
  test('should render tags', () => {
    expect(tags).toBeInTheDocument();
  });
});
