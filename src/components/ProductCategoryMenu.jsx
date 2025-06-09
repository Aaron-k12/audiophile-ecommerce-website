"use client";
import React from "react";
import Image from "next/image";
import { assetIndex } from "../../public/assets";
import Link from "next/link";
import { navItems } from "@/constants/Nav";

const ProductCategoryMenu = () => {
  return (

    <div className="grid md:grid-cols-3 gap-x-2.5 max-lg:px-6">
      {navItems.map(({ name, href, image, alt, id }) => (
        <div className="h-[13.56rem]  gap-y-6 relative w-full" key={id}>
          <div className="z-10 flex flex-col mb-24 place-content-center">
            <Image src={image} fill objectFit="scale-down" alt={alt} />
            <div className="flex flex-col gap-y-[1.1rem] items-center z-10  top-40 absolute mt-8 pb-5 w-full">
              {" "}
              <h2 className="text-sm font-bold uppercase">{name}</h2>
              <Link
                href={href}
                className="flex opacity-50 gap-x-3.5 items-center uppercase hover:text-[#D87D4A]"
              >
                SHOP{" "}
                <span>
                  <Image
                    src={assetIndex.arrowRight.arrowIcon}
                    width={10}
                    height={10}
                    priority
                  />
                </span>
              </Link>
            </div>
          </div>
          <div className="bg-[#F1F1F1] w-full h-[165px] rounded-lg "></div>
        </div>
      ))}
    </div>
  );
}

export default ProductCategoryMenu