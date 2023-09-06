import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-primary -z-10 pb-4">
      <div
        className="max-w-[1110px] mx-auto h-[600px]
    flex flex-col items-center justify-center
    lg:flex-row lg:justify-between lg:h-[700px] -z-10"
      >
        <div className="hidden lg:block ml-4 mt-48 z-10">
          <h1 className="text-gray-400  tracking-[10px]">NEW PRODUCT</h1>
          <p className="text-white mt-6 md:text-6xl">XX99 MARK II</p>
          <p className="text-white  mb-6 md:text-6xl">HEADPHONES</p>
          <p className="text-gray-400  font-extralight  mb-6 w-[380px]">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="bg-orange-400 py-3 px-8 text-white text-sm rounded-sm">
            {" "}
            SEE PRODUCT
          </button>
        </div>

        <Image
          src="/image-hero.jpg"
          width={1920}
          height={1080}
          alt="Picture of the author"
          className="object-cover w-[500px] h-[500px] md:w-[595px] md:h-[595px] lg:mx-auto z-10"
        />

        <div className="absolute flex flex-col justify-center items-center lg:hidden z-10">
          <h1 className="text-gray-400  tracking-[10px]">NEW PRODUCT</h1>
          <p className="text-white text-4xl mt-4 md:mt-8 md:text-6xl">
            XX99 MARK II
          </p>
          <p className="text-white text-4xl mb-4 md:mb-8 md:text-6xl">
            HEADPHONES
          </p>
          <p className="text-gray-400 w-[300px] text-center font-extralight mb-4 md:mb-8 md:w-[400px]">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="bg-orange-400 py-3 px-8 text-white text-sm rounded-sm">
            {" "}
            SEE PRODUCT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
