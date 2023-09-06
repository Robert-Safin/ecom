import { kv } from "@vercel/kv";

export interface Product {
  category: "headphones" | "speakers" | "earphones";
  isNew: boolean;
  name: string;
  description: string;
  mainPhoto: string;
  link: string;
  price: number;
  features1: string;
  features2: string;
  inTheBox: {
    quantity: number;
    item: string;
  }[];
  secondaryPhotoLarge: string;
  secondaryPhotoSmall1: string;
  secondaryPhotoSmall2: string;
}

const XX99MK2: Product = {
  category: "headphones",
  isNew: true,
  name: "XX99 Mark II Headphones",
  description:
    "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
  mainPhoto:
    "https://res.cloudinary.com/dxgkclowd/image/upload/v1694010870/ecommerce/image-xx99-mark-two_gl7wwe.jpg",
  link: "XX99MK2",
  price: 2999,
  features1:
    "Featuring a genuine leather head strap and premium ear cups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you`ll never miss a beat.",
  features2:
    "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
  inTheBox: [
    {
      quantity: 1,
      item: "Headphone Unit",
    },
    {
      quantity: 2,
      item: "Replacement Earcups",
    },
    {
      quantity: 1,
      item: "User Manual",
    },
    {
      quantity: 1,
      item: "3.5mm 5m Audio Cable",
    },
    {
      quantity: 1,
      item: "Travel Bag",
    },
  ],
  secondaryPhotoLarge:
    "https://res.cloudinary.com/dxgkclowd/image/upload/v1694011710/ecommerce/image-gallery-3_undfzf.jpg",
  secondaryPhotoSmall1:
    "https://res.cloudinary.com/dxgkclowd/image/upload/v1694011710/ecommerce/image-gallery-1_ehvwmm.jpg",
  secondaryPhotoSmall2:
    "https://res.cloudinary.com/dxgkclowd/image/upload/v1694011710/ecommerce/image-gallery-2_ot5k8b.jpg",
};

const XXMK1: Product = {
  category: "headphones",
  isNew: false,
  name: "XX99 Mark I Headphones",
  description:
    "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
  mainPhoto:
    "https://res.cloudinary.com/dxgkclowd/image/upload/v1694010870/ecommerce/image-xx99-mark-one_gxjswp.jpg",
  link: "XX99MK1",
  price: 1750,
  features1:
    "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.",
  features2:
    "From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector.",
  inTheBox: [
    {
      quantity: 1,
      item: "Headphone Unit",
    },
    {
      quantity: 2,
      item: "Replacement Earcups",
    },
    {
      quantity: 1,
      item: "User Manual",
    },
    {
      quantity: 1,
      item: "3.5mm 5m Audio Cable",
    },
    {
      quantity: 1,
      item: "Travel Bag",
    },
  ],
  secondaryPhotoLarge:
    "https://res.cloudinary.com/dxgkclowd/image/upload/v1694011958/ecommerce/image-gallery-3-1_zcmrj2.jpg",
  secondaryPhotoSmall1:
    "https://res.cloudinary.com/dxgkclowd/image/upload/v1694011957/ecommerce/image-gallery-1-1_ezejc8.jpg",
  secondaryPhotoSmall2:
    "https://res.cloudinary.com/dxgkclowd/image/upload/v1694011957/ecommerce/image-gallery-2-1_pwpbx4.jpg",
};

const XX59: Product = {
  category: "headphones",
  isNew: false,
  name: "XX59 Headphones",
  description:
    "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
  price: 899,
  link: "XX59",
  mainPhoto:
    "https://res.cloudinary.com/dxgkclowd/image/upload/v1694010870/ecommerce/image-xx59_f6xaml.jpg",
  features1:
    "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.",
  features2:
    "More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
  inTheBox: [
    {
      quantity: 1,
      item: "Headphone Unit",
    },
    {
      quantity: 2,
      item: "Replacement Earcups",
    },
    {
      quantity: 1,
      item: "User Manual",
    },
    {
      quantity: 1,
      item: "3.5mm 5m Audio Cable",
    },
    {
      quantity: 1,
      item: "Travel Bag",
    },
  ],
  secondaryPhotoLarge:
    "https://res.cloudinary.com/dxgkclowd/image/upload/v1694012154/ecommerce/image-gallery-3-2_waijh7.jpg",
  secondaryPhotoSmall1:
    "https://res.cloudinary.com/dxgkclowd/image/upload/v1694012154/ecommerce/image-gallery-1-2_km2cnw.jpg",
  secondaryPhotoSmall2:
    "https://res.cloudinary.com/dxgkclowd/image/upload/v1694012154/ecommerce/image-gallery-2-2_yvzzlz.jpg",
};

const ZX9: Product = {
  category: "speakers",
  isNew: true,
  name: "ZX9 Speaker",
  description:
    "Upgrade your sound system with the all new ZX9 active speaker. It`s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
  price: 4500,
  link: "ZX9",
  mainPhoto:
    "https://res.cloudinary.com/dxgkclowd/image/upload/v1694010871/ecommerce/image-zx9_nsgxzq.jpg",
  features1:
    "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).",
  features2:
    "Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
  inTheBox: [
    {
      quantity: 1,
      item: "Speaker Unit",
    },
    {
      quantity: 2,
      item: "Speaker Cloth Panel",
    },
    {
      quantity: 1,
      item: "User Manual",
    },
    {
      quantity: 1,
      item: "3.5mm 7.5m Audio Cable",
    },
    {
      quantity: 1,
      item: "7.5m Optical Cable",
    },
  ],
  secondaryPhotoLarge:
    "https://res.cloudinary.com/dxgkclowd/image/upload/v1694012362/ecommerce/image-gallery-3-3_nefcx1.jpg",
  secondaryPhotoSmall1:
    "https://res.cloudinary.com/dxgkclowd/image/upload/v1694012362/ecommerce/image-gallery-1-3_mmhdcf.jpg",
  secondaryPhotoSmall2:
    "https://res.cloudinary.com/dxgkclowd/image/upload/v1694012363/ecommerce/image-gallery-2-3_p5m8ta.jpg",
};

const ZX7: Product = {
  category: "speakers",
  name: "ZX7 Speaker",
  isNew: false,
  description:
    "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
  price: 3500,
  link: "ZX7",
  mainPhoto:
    "https://res.cloudinary.com/dxgkclowd/image/upload/v1694010871/ecommerce/image-zx7_oncatv.jpg",
  features1:
    "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.",
  features2:
    "The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
  inTheBox: [
    {
      quantity: 1,
      item: "Speaker Unit",
    },
    {
      quantity: 2,
      item: "Speaker Cloth Panel",
    },
    {
      quantity: 1,
      item: "User Manual",
    },
    {
      quantity: 1,
      item: "3.5mm 7.5m Audio Cable",
    },
    {
      quantity: 1,
      item: "7.5m Optical Cable",
    },
  ],
  secondaryPhotoLarge:
    "https://res.cloudinary.com/dxgkclowd/image/upload/v1694012541/ecommerce/image-gallery-3-4_hl2r7y.jpg",
  secondaryPhotoSmall1:
    "https://res.cloudinary.com/dxgkclowd/image/upload/v1694012540/ecommerce/image-gallery-1-4_u32upa.jpg",
  secondaryPhotoSmall2:
    "https://res.cloudinary.com/dxgkclowd/image/upload/v1694012541/ecommerce/image-gallery-2-4_nktlxg.jpg",
};

const YX1: Product = {
  category: "earphones",
  name: "YX1 Wireless Earphones",
  isNew: true,
  description:
    "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
  price: 599,
  link: "YX1",
  mainPhoto:
    "https://res.cloudinary.com/dxgkclowd/image/upload/v1694010870/ecommerce/image-yx1-earphones_nccc38.jpg",
  features1: "",
  features2: "",
  inTheBox: [],
  secondaryPhotoLarge: "",
  secondaryPhotoSmall1: "",
  secondaryPhotoSmall2: "",
};

export const populateRedis = async () => {

  await kv.hset('products', { XX99MK2: JSON.stringify(XX99MK2) });
  await kv.hset('products', { XXMK1: JSON.stringify(XXMK1) });
  await kv.hset('products', { XX59: JSON.stringify(XX59) });
  await kv.hset('products', { ZX9: JSON.stringify(ZX9) });
  await kv.hset('products', { ZX7: JSON.stringify(ZX7) });
  await kv.hset('products', { YX1: JSON.stringify(YX1) });


};
