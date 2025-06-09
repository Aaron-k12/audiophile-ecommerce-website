"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@mantine/core";
import axios from "axios";
import Image from "next/image";
import { navItems } from "@/constants/Nav";
import useGetItemCategory from "@/customHooks/useGetItemCategory";
import Link from "next/link";
import { CustomButton } from "./Button";

const ProductCategoryList = ({ categoryName }) => {
  const data = useGetItemCategory({ categoryName });

  return Array.isArray(data) && data ? (
    data.map((item, id) => (
      <div
        className={
          "mt-20 lg:flex gap-y-[7.5rem] max-lg:px-6 " +
          (id % 2 === 1 ? "flex-row-reverse" : "")
        }
      >
        {/* MOBILE */}
        <div className="relative w-full max-md:block md:hidden rounded-[8px]">
          <Image
            src={item.categoryImage.mobile.replace(/^\.\//, "/")}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
            alt={`image of ${categoryName}`}
          />
        </div>
        {/* TABLET */}
        <div className="hidden relative w-full md:block lg:hidden rounded-[8px]">
          <Image
            src={item.categoryImage.tablet.replace(/^\.\//, "/")}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
            alt={`image of ${categoryName}`}
          />
        </div>
        {/* DESKTOP */}
        <div className="hidden relative w-full lg:block rounded-[8px]">
          <Image
            src={item.categoryImage.desktop.replace(/^\.\//, "/")}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
            alt={`image of ${categoryName}`}
          />
        </div>
        <div className="flex flex-col items-center pt-10 m-auto text-center px-10  lg:gap-y-6 w-full lg:items-start lg:text-left">
          <div className="max-w-[23.68rem] flex flex-col items-center">
            <div className="tracking-[0.63rem] opacity-50 text-[0.8rem] text-[#D87D4A]">
              NEW PRODUCT
            </div>
            <div>
              <h1 className="mt-4 mb-6 text-4xl font-bold uppercase">
                {item.name}
              </h1>
            </div>
            <div>
              <p className="text-[0.94rem] opacity-75 ">{item.description}</p>
            </div>
            <Link href={`/category/${item.category}/${item.id}`} className="px-2 py-4">
              <CustomButton text="see product" />
            </Link>
          </div>
        </div>
      </div>
    ))
  ) : (
    <p>No data available</p>
  );
};

export default ProductCategoryList;
