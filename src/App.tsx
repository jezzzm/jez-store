import React from 'react';
import Products from './components/products';
import { RecoilRoot } from 'recoil';
import { Product } from './utils/types';

function App({ products }: { products: Product[] }) {
  return (
    <RecoilRoot>
      <main className="App container mx-auto px-4 max-w-screen-lg" role="main">
        <Products products={products} />
      </main>
    </RecoilRoot>
  );
}

export default App;
