import Image from "next/image";

const Products = () => {
  return (
    <div className="bg-white w-full">
      <div className="max-w-[1100px] mx-auto p-4 space-y-4">
        <div className="bg-orange-400 flex flex-col items-center rounded-xl px-4 py-16 relative lg:flex-row lg:justify-between overflow-hidden shadow-xl">
          <Image
            src="/main-page/image-speaker-zx9.png"
            alt=""
            width={1000}
            height={1000}
            className="object-cover w-[170px] h-[206px] md:w-[200px] md:h-[242px] lg:w-[410px] lg:h-[490px] lg:-mb-20 lg:ml-20"
          />
          <div className="flex flex-col items-center lg:items-start lg:mr-10">
            <h1 className="text-white text-3xl md:text-4xl mt-8">ZX9 </h1>
            <h1 className="text-white text-3xl md:text-4xl mb-8">SPEAKER</h1>
            <p className="text-gray-500 text-center font-extralight w-[300px] md:w-[390px] lg:text-left lg:w-[300px]">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <button className="bg-black hover:bg-gray-700 py-3 px-8 text-white text-sm rounded-sm mt-16">
              SEE PRODUCT
            </button>
          </div>
        </div>

        <div className="relative">
          <Image
            src="/main-page/image-speaker-zx7.jpg"
            alt=""
            width={2000}
            height={2000}
            className="object-cover w-full  h-[340px] rounded-xl sm:hidden"
          />
          <Image
            src="/main-page/image-speaker-zx7md.jpg"
            alt=""
            width={2000}
            height={2000}
            className="object-cover w-full  h-[340px]  rounded-xl hidden sm:block lg:hidden"
          />
          <Image
            src="/main-page/image-speaker-zx7lg.jpeg"
            alt=""
            width={2000}
            height={2000}
            className="object-cover w-full  h-[340px]  rounded-xl hidden lg:block"
          />
          <div className="absolute z-10 bottom-28 space-y-10 ml-10">
            <h1 className="text-black text-3xl md:text-4xl mt-8">
              ZX9 SPEAKER{" "}
            </h1>
            <button className="py-3 px-8 text-black text-sm border border-black hover:bg-black hover:text-white">
              SEE PRODUCT
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Image
            src="/main-page/image-earphones-yx1.jpg"
            alt=""
            width={1000}
            height={1000}
            className="object-cover w-full h-[209px] sm:h-[331px] rounded-xl"
          />
          <div className="flex flex-col w-full h-[209px] sm:h-[331px] bg-gray-200 rounded-xl justify-around">
            <div className="flex flex-col px-4 space-y-8 ml-10">
              <h1 className="text-black text-3xl md:text-4xl">YX1 EARPHONES</h1>
              <button className="py-3 px-8 text-black text-sm border border-black w-fit hover:bg-black hover:text-white">
                SEE PRODUCT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
