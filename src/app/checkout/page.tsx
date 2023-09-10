import Form from "@/components/Summary/Form";
import Summary from "@/components/Summary/Summary";
import { kv } from "@vercel/kv";

const CheckoutPage = async () => {
  const getCartId = async (cartId: number) => {
    "use server";

    const cart = await kv.hgetall(`cart:${cartId}`);

    return cart;
  };
  return (
    <div className=" w-full flex flex-col lg:flex-row lg:justify-center max-w-[1100px] mx-auto">
      <Form />
      <Summary getCartId={getCartId} />
    </div>
  );
};

export default CheckoutPage;
