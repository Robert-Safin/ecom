import CategoryProductCard from "@/components/category product card/CategoryProductCard";
import { Product } from "@/redis/resdis";
import { kv } from "@vercel/kv";
import { FC } from "react";

interface Props {
  params: {
    category: string;
  };
}

const CategoryPage: FC<Props> = async (props) => {
  let dataKey: string;
  if (props.params.category === "headphones") {
    dataKey = "X";
  } else if (props.params.category === "speakers") {
    dataKey = "Z";
  } else if (props.params.category === "earphones") {
    dataKey = "Y";
  }

  const getProducts = async () => {
    try {
      const keys = await kv.hkeys("products");
      const validProductKeys = keys.filter((key) => key.startsWith(dataKey));

      const productsPromises = validProductKeys.map((key) =>
        kv.hget("products", key)
      );
      const products = await Promise.all(productsPromises) as Product[];
      const productsSorted = products.sort((a,b)=> a.isNew ? -1 : 1)

      return productsSorted;
    } catch (error) {
      console.log(error);
    }
  };

  const products = await getProducts();

  return (
   <div className="w-full bg-white">
      <h1 className="bg-primary text-white text-3xl uppercase font-semibold tracking-[1px] text-center py-8 sm:text-4xl sm:py-20">{props.params.category}</h1>
    <div className="max-w-[1100px] mx-auto">
      <div className="space-y-8 my-8 lg:space-y-24">

        {products?.map((product,i)=>
        <CategoryProductCard key={i} product={product} index={i}/>
        )}
      </div>
    </div>

   </div>
  );
};

export default CategoryPage;
