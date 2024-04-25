import { Container } from "@component/container";
import { apiProduct } from "@/api/products";
import React, { Suspense } from "react";
import { ProductsList } from "@/feature/products/products-list";
import { FetchProvider } from "@module/api-handler/provider";

export default async function ProductsPage() {
  const data = await apiProduct.getAll().fetcher();

  const hydrateData = [{ key: data?.key, response: data?.response }];

  return (
    <FetchProvider hydrateData={hydrateData}>
      <Container>
        <Suspense fallback={<p>Loading...</p>}>
          <ProductsList products={data?.response} />
        </Suspense>
      </Container>
    </FetchProvider>
  );
}
