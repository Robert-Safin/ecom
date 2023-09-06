import Image from "next/image";

const Products = () => {
  return (
    <div className="bg-white w-full">
      <div className="max-w-[1100px] p-4">
        <div className="bg-orange-400 flex flex-col items-center rounded-xl">
          <Image
            src="/main-page/image-speaker-zx9.png"
            alt=""
            width={200}
            height={200}
          />
          <h1>title</h1>
          <p>text</p>
          <button>btn</button>
        </div>

        <div>
          <Image
            src="/main-page/image-speaker-zx7.jpg"
            alt=""
            width={400}
            height={400}
            className=""
          />
          <p className="relative bottom-20">text</p>
          <button className="relative bottom-20">btn</button>
        </div>
        <div className="flex">
          <Image
            src="/main-page/image-earphones-yx1.jpg"
            alt=""
            width={200}
            height={200}
          />
          <div className="flex flex-col w-48 h-48 bg-gray-400">
        <h1>title</h1>
        <button>btn</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
