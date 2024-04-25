import { Container } from "@component/container";
import { apiProduct } from "@/api/products";
import React, { Suspense } from "react";
import { ProductItem } from "@component/product-item";

interface ProductPageParamsProps {
  params: { productId: string | undefined };
}

export default async function ProductPage(props: ProductPageParamsProps) {
  const productId = props.params.productId;
  const product = await apiProduct.getById(productId).fetcher();

  return (
    <Container>
      <Suspense fallback={<p>Loading...</p>}>
        <ProductItem product={product?.response} />
      </Suspense>
    </Container>
  );
}
