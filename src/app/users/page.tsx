"use client";
import Link from "next/link";
import { Container } from "@component/container";
import { ProductItem } from "@component/product-item";
import { apiProduct } from "@/api/products";
import { useFetch } from "@/module/api-handler/hooks/fetcher";

export default function Home() {

  const { data, loading } = useFetch(apiProduct.getProduct("1"));

  return (
    <Container>
      <Link className={"block"} href={"/"}>
        <button className={"bg-amber-500 p-2"}>
          prev page
        </button>
      </Link>
      <ProductItem data={data} loading={loading} />
    </Container>
  );
}
