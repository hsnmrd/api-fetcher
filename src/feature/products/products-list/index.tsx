"use client";

import React from "react";
import { ProductModel } from "@api/products/type/product-model";
import { ProductItem } from "@component/product-item";

interface ProductsListProps {
  products: Array<ProductModel> | undefined;
}

export const ProductsList = (props: ProductsListProps) => {
  const { products } = props;
  return (
    <>
      {React.Children.toArray(products?.map(product => (
        <ProductItem product={product} />
      )))}
    </>
  );
};