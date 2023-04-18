/** @format */

import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

export default function Products() {
  const [product, setProduct] = useState([{}]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  });

  return (
    <div className="text-center text-[25px] my-5 ">

      <div className="d-flex flex-wrap">
        {product.map((p, index) => (
          <ProductCard
            product={p}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
