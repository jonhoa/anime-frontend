import { useState } from 'react';
import { ProductsNew } from './ProductsNew';
import { ProductsIndex } from './ProductsIndex';
import axios from 'axios';

export function Content() {
  const [items,setItems] = useState([{
    name: "Something",
    value: "1"
  }]);

  return (
    <div>
      <ProductsNew />
      <ProductsIndex items ={items} />
    </div>
  );
}
