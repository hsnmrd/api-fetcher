import Link from "next/link";
import { Container } from "@component/container";

export default function Home() {
  return (
    <Container>
      <Link className={"block"} href={"/products"}>
        <button className={"bg-amber-500 p-2"}>list of products</button>
      </Link>
    </Container>
  );
}
