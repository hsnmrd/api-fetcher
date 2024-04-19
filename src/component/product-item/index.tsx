import { useFetch } from "@/module/api-handler/hooks/fetcher";
import { ProductModel } from "@/api/products";

interface ProductItemProps {
  loading: boolean;
  data: ProductModel | undefined;
}

export const ProductItem = (props: ProductItemProps) => {
  return (
    <>
      {props.loading &&
        <>loading...</>
      }
      {!props.loading &&
        <h3 className={"whitespace-pre-wrap"}>
          {JSON.stringify(props.data, null, 4)}
        </h3>
      }
    </>
  );
};