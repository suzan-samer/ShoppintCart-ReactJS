import React from 'react';
import AvailbleProducts from './AvailbleProducts';
import ProductDetails from './ProductDetails';

const Product = () => {
  return (
    <React.Fragment>
      <ProductDetails />
      <AvailbleProducts />
    </React.Fragment>
  );
}

export default Product;
