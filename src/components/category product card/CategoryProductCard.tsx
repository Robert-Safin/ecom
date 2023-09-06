import { Product } from "@/redis/resdis";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {
  product: Product;
  index: number;
}

const CategoryProductCard: FC<Props> = async (props) => {
  return (
    <div className={`flex flex-col ${props.index % 2 === 0 ? 'lg:flex-row': 'lg:flex-row-reverse'}`}>
      <div className="bg-[rgb(241,241,241)] rounded-md mx-4 lg:w-1/2 shadow-inner border">
        <Image
          src={props.product.mainPhoto}
          alt={props.product.name}
          width={1000}
          height={1000}
          className="w-[350px] h-[350px] mx-auto rounded-md lg:h-[500px] lg:w-[500px]"
        />
      </div>
      <div className="flex flex-col items-center space-y-4 mt-4 lg:w-1/2 lg:justify-center lg:space-y-8 lg:mt-0">
        {props.product.isNew && (
          <h1 className="text-orange-400 tracking-[12px] font-extralight text-center">
            NEW PRODUCT
          </h1>
        )}
        <h2 className="text-black text-3xl tracking-[1px] max-w-[200px] text-center">
          {props.product.name}
        </h2>
        <p className="text-gray-400 text-center px-8">
          {props.product.description}
        </p>
        <Link
          href={`/${props.product.category}/${props.product.link}`}
          className="cursor-pointer bg-orange-400 hover:bg-orange-300 py-3 px-8 text-white text-sm rounded-sm"
        >
          SEE PRODUCT
        </Link>
      </div>
    </div>
  );
};

export default CategoryProductCard;
