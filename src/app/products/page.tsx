import Link from "next/link";
import { Container } from "@component/container";
import { apiProduct } from "@/api/products";
import React, { Suspense } from "react";
import { ProductsList } from "@/feature/products/products-list";

export default async function ProductsPage() {

  const data = await apiProduct.getAll().fetcher();

  return (
    <Container>
      <Link className={"block"} href={"/"}>
        <button className={"bg-amber-500 p-2"}>
          prev page
        </button>
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <ProductsList products={data?.response} />
      </Suspense>
    </Container>
  );
}
