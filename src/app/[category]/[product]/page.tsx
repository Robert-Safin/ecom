import AddItems from "@/components/AddItems/AddItems";
import YouMayAlsoLike from "@/components/YouMayAlsoLike/YouMayAlsoLike";
import { Product } from "@/redis/resdis";
import { kv } from "@vercel/kv";
import Image from "next/image";
import { FC } from "react";

interface Props {
  params: {
    category: string;
    product: string;
  };
}

const ProductPage: FC<Props> = async (props) => {
  const product = (await kv.hget("products", props.params.product)) as Product;

  const getSuggestedProducts = async () => {
    const productKeys = await kv.hkeys("products");
    const filteredProductKeys = productKeys.filter(
      (key) => key !== props.params.product
    );

    const productsPromises = filteredProductKeys.map((key) =>
      kv.hget("products", key)
    );
    const products = (await Promise.all(productsPromises)) as Product[];

    const suggestedProducts = products.splice(0, 3);

    return suggestedProducts;
  };

  const getQuantity = async (quantity: number, product:Product, cartId:number) => {
    "use server";
    console.log(quantity, product.name, cartId);

  };

  return (
    <div className="w-full bg-white">
      <div className="max-w-[1100px] mx-auto p-4">
        <div className="flex flex-col md:flex-row md:items-center">
          <Image
            src={product.mainPhoto}
            alt={product.name}
            width={1000}
            height={1000}
            className="md:w-1/2 md:h-auto object-cover rounded-md"
          />
          <div className="flex flex-col space-y-4 my-4 md:w-1/2 md:h-full md:ml-16">
            {product.isNew && (
              <h1 className="text-orange-400 tracking-[12px] font-extralight ">
                NEW PRODUCT
              </h1>
            )}

            <h1 className="text-black text-3xl tracking-[1px] ">
              {product.name}
            </h1>
            <p className="text-gray-400 ">{product.description}</p>
            <p className=" text-xl">$ {product.price}</p>

            <AddItems getQuantity={getQuantity} product={product}/>
          </div>
        </div>

        <div className="flex flex-col md:flex-row my-8 md:my-28">
          <div className="md:w-2/3">
            <h1 className="text-2xl tracking-wider mt-8 mb-4">FEATURES</h1>
            <p className="text-gray-400 ">{product.features1}</p>
            <br />
            <p className="text-gray-400 ">{product.features2}</p>
          </div>

          <div className="md:ml-16">
            <h1 className="text-2xl tracking-wider mb-4 mt-16 md:mt-8">
              IN THE BOX
            </h1>
            <div className="mb-16">
              {product.inTheBox.map((item, i) => (
                <div className="flex my-2" key={i}>
                  <p className="text-orange-400 mr-4">{item.quantity}x</p>
                  <p className="text-gray-400 font-extralight">{item.item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Image
          src={product.secondaryPhotoSmall1}
          alt=""
          width={1000}
          height={1000}
          className="rounded-md my-4 w-full md:hidden"
        />
        <Image
          src={product.secondaryPhotoSmall2}
          alt=""
          width={1000}
          height={1000}
          className="rounded-md my-4 w-full md:hidden"
        />

        <Image
          src={product.secondaryPhotoLarge}
          alt=""
          width={1000}
          height={1000}
          className="rounded-md my-4 w-full md:hidden"
        />

        <div className="hidden md:flex my-16">
          <div className="space-y-4 mr-4">
            <Image
              src={product.secondaryPhotoSmall1}
              alt=""
              width={1000}
              height={1000}
              className="rounded-md w-full h-1/2"
            />
            <Image
              src={product.secondaryPhotoSmall2}
              alt=""
              width={1000}
              height={1000}
              className="rounded-md w-full h-1/2"
            />
          </div>
          <div>
            <Image
              src={product.secondaryPhotoLarge}
              alt=""
              width={1000}
              height={1000}
              className="rounded-md w-full h-[calc(100%+14px)]"
            />
          </div>
        </div>

        <YouMayAlsoLike products={await getSuggestedProducts()} />
      </div>
    </div>
  );
};

export default ProductPage;
