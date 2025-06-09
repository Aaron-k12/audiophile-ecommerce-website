"use client";
import React from "react";
import { assetIndex } from "../../../public/assets";
import Image from "next/image";
import { Button } from "@mantine/core";
import { useRouter } from "next/navigation";
const ProductCategory2 = () => {
  const router = useRouter();
  return (
    <div className="grid gap-y-6 max-lg:px-6">
      <div className="relative mt-20 bg-[#D87D4A] min-h-[32rem] md:h-[32rem] flex flex-col bg-[url('/assets/home/desktop/pattern-circles.svg')] bg-no-repeat bg-cover">
        {/* <div className="h-full">
                <Image
                  src={assetIndex.home.pattern.circlePattern}
                  width={700}
                  height={100}
                  objectFit="cover"
                  priority
                />
              </div> */}
        <div className="absolute grid w-full max-lg:top-0 max-sm:top-12 lg:grid-cols-2 lg:bottom-0 sm:mx-auto h-fit">
          <div className="mx-auto md:hidden max-md:block">
            <Image
              src={assetIndex.home.mobile.speaker}
              width={100}
              height={100}
              objectFit="scale-down"
              priority
            />
          </div>
          <div className="hidden mx-auto md:block lg:hidden">
            <Image
              src={assetIndex.home.tablet.speaker}
              width={150}
              height={100}
              objectFit="scale-down"
              priority
            />
          </div>
          <div className="hidden mx-auto lg:block">
            <Image
              src={assetIndex.home.desktop.speaker}
              width={350}
              height={400}
              objectFit="scale-down"
              priority
            />
          </div>
          <div className="w-full">
            <div className="flex flex-col w-full place-content-center place-items-center min-h-[303px] max-w-[349px] max-lg:mx-auto mt-auto">
              <div className="flex flex-col w-full px-10 mx-auto text-center gap-y-6 place-items-center max-md:py-14 lg:place-content-start lg:text-left lg:place-items-start">
                <h1 className="text-4xl font-bold text-white uppercase">
                  zx9 <span className="block">speaker</span>
                </h1>
                <p className="text-white opacity-75">
                  Upgrade to premium speakers that are phenomenally built to
                  deliver truly remarkable sound.
                </p>
                <button
                  onClick={() => router.push("/category/speakers/6")}
                  className="mt-7 bg-black text-white text-[0.8rem] uppercase py-2 px-4 font-bold hover:bg-[#979797] transition-colors duration-200 cursor-pointer"
                >
                  SEE PRODUCT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full bg-[url('/assets/home/mobile/image-speaker-zx7.jpg')] bg-no-repeat bg-center min-h-80 bg-cover md:bg-[url('/assets/home/tablet/image-speaker-zx7.jpg')] lg:bg-[url('/assets/home/desktop/image-speaker-zx7.jpg')]">
        <div className="flex flex-col items-start my-auto ml-6 mr-auto w-fit gap-y-8 ">
          <p className="text-3xl uppercase">zx7 speaker</p>
          <Button
            unstyled
            onClick={() => router.push("/category/speakers/5")}
            className="mt-7 border border-black text-black text-[0.8rem] uppercase py-2 px-4 font-bold transition-colors duration-200 hover:bg-black hover:text-white cursor-pointer"
          >
            SEE PRODUCT
          </Button>
        </div>
      </div>
      <div className="grid w-full h-full md:grid-cols-2 gap-x-3 max-sm:gap-y-3">
        {/* MOBILE */}
        <div className="h-full md:hidden">
          <Image
            src={assetIndex.home.mobile.earhponeYX1}
            width={700}
            height={700}
            objectFit="cover"
            priority
          />
        </div>
        {/* TABLET */}
        <div className="hidden h-full md:block lg:hidden">
          <Image
            src={assetIndex.home.tablet.earhponeYX1}
            width={700}
            height={700}
            objectFit="cover"
            priority
          />
        </div>
        {/* DESKTOP */}
        <div className="hidden h-full lg:block">
          <Image
            src={assetIndex.home.desktop.earhponeYX1}
            width={700}
            height={700}
            objectFit="cover"
            priority
          />
        </div>
        <div className="my-auto bg-[#F1F1F1] flex flex-col gap-y-10 place-content-start place-items-start items-start w-full h-full py-10">
          <div className="flex flex-col items-start my-auto ml-6 mr-auto gap-y-8">
            <p className="text-3xl uppercase">yx1 earphones</p>
            <Button
              unstyled
              onClick={() => router.push("/category/earphones")}
              className="mt-7 border border-black text-black text-[0.8rem] uppercase py-2 px-4 font-bold transition-colors duration-200 hover:bg-black hover:text-white cursor-pointer"
            >
              SEE PRODUCT
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory2;
