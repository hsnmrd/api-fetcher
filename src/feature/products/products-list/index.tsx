"use client";

import React from "react";
import { ProductModel } from "@api/products/type/product-model";
import { ProductItem } from "@component/product-item";
import { apiProduct } from "@api/products";
import { useFetch } from "@module/api-handler/hooks/fetcher";

interface ProductsListProps {
  products: Array<ProductModel> | undefined;
}

export const ProductsList = (props: ProductsListProps) => {
  const { products } = props;

  const data = useFetch(apiProduct.getAll());

  return (
    <>
      {React.Children.toArray(
        products?.map((product) => <ProductItem product={product} />),
      )}
    </>
  );
};
