import { Button } from "@mantine/core";
import React from "react";
import { assetIndex } from "../../../public/assets";
import Image from "next/image";
import ButtonComponent, { CustomButton } from "../Button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="max-w-screen bg-[#191919]">
      <div className="mx-auto max-w-[69.38rem] flex flex-col items-center justify-center w-full overflow-x-hidden relative  pt-[30rem]">
        {/* <div className="relative w-full bg-[#191919] pt-[30rem]"> */}
        {/* MOBILE */}
        <div className="hidden max-md:block">
          <Image
            src={assetIndex.background.mobile.imageHeader}
            fill
            objectFit="fill"
            priority
          />
        </div>

        {/* TABLET */}
        <div className="hidden md:block">
          <Image
            src={assetIndex.background.tablet.imageHeader}
            fill
            objectFit="fill"
            priority
          />
        </div>

        {/* DESKTOP */}
        <div className="hidden border-8 border-white lg:block">
          <Image
            src={assetIndex.background.desktop.imageHeader}
            fill
            objectFit="fill"
            priority
          />
        </div>
        <div className="absolute z-10 flex flex-col items-center pt-10 m-auto text-center px-10 top-[6.75em] lg:gap-y-6 w-full lg:items-start lg:text-left">
          <div className="max-w-[23.68rem] flex flex-col">
            <div className="tracking-[0.63rem] text-white opacity-50 text-[0.8rem]">
              NEW PRODUCT
            </div>
            <div>
              <h1 className="mt-4 mb-6 text-4xl font-bold text-white uppercase">
                XX99 Mark II <span className="block">HeadphoneS</span>
              </h1>
            </div>
            <div>
              <p className="text-white text-[0.94rem] opacity-75 ">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
            </div>
            <Link href="/category/headphones/4" className="lg:mr-auto max-lg:mx-auto mt-7">
              {/* <Button
                styles={{
                  root: {
                    marginTop: "1.75rem",
                    opacity: "100%",
                    color: "white",
                    fontFamily: "Manrope, sans-serif",
                    fontStyle: "bold",
                    fontSize: "0.8rem",
                    paddingTop: "0.5rem",
                    paddingBottom: "0.5rem",
                    boxSizing: "border-box",
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                    textTransform: "uppercase",
                  },
                }}
              >
                See Product
              </Button> */}
              <CustomButton text="see product" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
