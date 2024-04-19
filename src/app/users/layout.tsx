import { apiProduct } from "@/api/products";

export default async function RootLayout({
   children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const data = await apiProduct.getProduct("1").fetcher()
  console.log("data", data);
  // todo: use this data and pass it to client side

  return (
    <>
      {children}
    </>
  );
}
