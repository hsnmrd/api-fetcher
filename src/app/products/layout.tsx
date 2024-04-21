import { apiProduct } from "@/api/products";

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>

export default async function ProductsLayout(props: RootLayoutProps) {

  const { children } = props;

  return (
    <>
      {children}
    </>
  );
}
