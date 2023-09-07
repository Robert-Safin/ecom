import { Product } from "@/redis/resdis";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {
  products: Product[];
}

const YouMayAlsoLike: FC<Props> = async (props) => {
  return (
    <>
      <h1 className="text-2xl tracking-wider mb-4 mt-36 text-center">
        YOU MAY ALSO LIKE
      </h1>
      <div className="flex flex-col md:flex-row md:justify-between">
        {props.products.map((product, i) => (
          <div key={i} className="mb-16">
            <div className="bg-[rgb(241,241,241)] shadow-inner border max-w-[400px] mx-auto rounded-md">
              <Image
                src={product.mainPhoto}
                alt=""
                width={150}
                height={150}
                className="mx-auto rounded-md md:w-56 md:h-56"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl tracking-wider text-center my-4 ">
                {product.name}
              </h1>
              <Link
                className="w-fit mx-auto cursor-pointer bg-orange-400 hover:bg-orange-300 py-3 px-8 text-white text-sm rounded-sm"
                href={product.link}
              >
                SEE PRODUCT
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default YouMayAlsoLike;
