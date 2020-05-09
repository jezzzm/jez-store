import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import App from './App';
import './styles/main.css';
import generateDemoProducts from './fixtures/generate-demo-products';

const numItems = faker.random.number({ min: 5, max: 10 });

ReactDOM.render(
  <React.StrictMode>
    <App products={generateDemoProducts(numItems)} />
  </React.StrictMode>,
  document.getElementById('root'),
);
