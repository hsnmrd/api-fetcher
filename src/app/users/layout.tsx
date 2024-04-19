import { apiProduct } from "@/api/products";

export default async function RootLayout({
   children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const data = await apiProduct.getProduct("1").fetcher()
  // todo: use this data and pass it to client side

  return (
    <>
      {children}
    </>
  );
}
