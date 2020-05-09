import React, { useState } from 'react';
import Products from './components/products';
import SearchContext from './context/search-context';
import { Product } from './utils/types';

function App({ products }: { products: Product[] }) {
  const searchHook = useState('');
  return (
    <SearchContext.Provider value={searchHook}>
      <main className="App container mx-auto px-4 max-w-screen-lg" role="main">
        <Products products={products} />
      </main>
    </SearchContext.Provider>
  );
}

export default App;
