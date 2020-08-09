import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import productsState from './recoil/products-state';
import Products from './components/products';
import generateDemoProducts from './fixtures/generate-demo-products';

function App() {
  const setProducts = useSetRecoilState(productsState);

  useEffect(() => {
    setProducts(generateDemoProducts(10));
  }, []);

  return (
    <main className="App container mx-auto px-4 max-w-screen-lg" role="main">
      <Products />
    </main>
  );
}

export default App;
