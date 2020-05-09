import React from 'react';
import Products from './components/products';
import faker from 'faker';
import generateDemoProducts from './fixtures/generate-demo-products';

const numItems = faker.random.number({ min: 5, max: 10 });

function App() {
  return (
    <main className="App container mx-auto px-4 max-w-screen-lg" role="main">
      <Products products={generateDemoProducts(numItems)} />
    </main>
  );
}

export default App;
