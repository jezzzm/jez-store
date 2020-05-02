import React from 'react';
import Products from './components/products';
import faker from 'faker';
import generateDemoProducts from './fixtures/generate-demo-products';

const numItems = faker.random.number({ min: 5, max: 10 });

function App() {
  return (
    <div className="App container mx-auto px-4" data-testid="App">
      <Products products={generateDemoProducts(numItems)} />
    </div>
  );
}

export default App;
