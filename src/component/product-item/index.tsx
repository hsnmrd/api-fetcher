"use client"

import { ProductModel } from "@api/products/type/product-model";
import Link from "next/link";

interface ProductItemProps {
  product: ProductModel | undefined;
}

export const ProductItem = (props: ProductItemProps) => {
  return (
    <Link href={`/products/${props.product?.id}`}>
      <h2 className={"text-3xl font-bold"}>
        {props.product?.title}
      </h2>
      <p>
        {props.product?.description}
      </p>
    </Link>
  );
};