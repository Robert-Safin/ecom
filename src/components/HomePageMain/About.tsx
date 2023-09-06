import Image from "next/image";

const About = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1100px] mx-auto px-4 flex flex-col lg:flex-row-reverse my-28">
        <Image
          src="/main-page/image-best-gear.jpg"
          alt=""
          width={1000}
          height={1000}
          className="w-full h-auto object-cover rounded-md lg:w-1/2"
        />
        <div className="h-auto mx-auto">
          <h1 className="text-black text-3xl text-bold tracking-widest text-center my-8 max-w-[760px] md:text-4xl mx-auto lg:text-left mr-8">
            BRINGING YOU THE
            <span className="text-orange-400"> BEST </span>
            AUDIO GEAR
          </h1>
          <p className="text-gray-400 text-center max-w-[720px] mx-auto lg:text-left mr-8">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
