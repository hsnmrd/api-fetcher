import { ProductModel } from "@api/products/type/product-model";

interface ProductItemProps {
  data: ProductModel | undefined;
}

export const ProductItem = (props: ProductItemProps) => {
  return (
    <>
      <h3 className={"whitespace-pre-wrap"}>
        {JSON.stringify(props.data, null, 4)}
      </h3>
    </>
  );
};