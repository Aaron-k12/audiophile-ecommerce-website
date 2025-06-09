import { assetIndex } from "../../../public/assets";
import Image from "next/image";
const AboutShowCase = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-y-10 mx-auto lg:gap-x-32 max-lg:px-6">
      <div className="relative w-full md:hidden">
        {/* MOBILE */}
        <Image
          src={assetIndex.home.mobile.bestGear}
          width={400}
          height={300}
          objectFit="cover"
          alt="image of a man with a headset"
        />
      </div>
      {/* TABLET */}
      <div className="hidden md:block lg:hidden">
        <Image
          src={assetIndex.home.tablet.bestGear}
          width={900}
          height={300}
          objectFit="cover"
          alt="image of a man with a headset"
        />
      </div>
      {/* DESKTOP */}
      <div className="hidden lg:block lg:order-2">
        <Image
          src={assetIndex.home.desktop.bestGear}
          width={900}
          height={300}
          objectFit="cover"
          alt="image of a man with a headset"
        />
      </div>
      <div className="flex flex-col min-w-[20.4rem] lg:order-1 h-full ">
        <div className="lg:my-auto">
          <div className="mx-auto text-center ">
            <p className="text-3xl font-bold uppercase">
              Bringing you the
              <span className="">
                {" "}
                <span className="text-[#D87D4A]">best</span> audio gear
              </span>
            </p>
          </div>
          <p className="opacity-50 text-[0.93rem] text-center">
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

export default AboutShowCase;
