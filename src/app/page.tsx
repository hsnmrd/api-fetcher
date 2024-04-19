"use client";
import { useFetch } from "@/module/api-handler/hooks/fetcher";
import Link from "next/link";
import { Container } from "@component/container";
import { ProductItem } from "@component/product-item";
import { apiProduct } from "@/api/products";


export default function Home() {

  const { data, loading, refetch } = useFetch(apiProduct.getProduct("1"))

  return (
    <Container>
      <Link className={"block"} href={"/users"}>
        <button className={"bg-amber-500 p-2"}>
          next page
        </button>
      </Link>
      <button className={"bg-blue-600 p-2 w-fit"} onClick={refetch}>
        refetch
      </button>
      <ProductItem data={data} loading={loading}/>
    </Container>
  );
}
