import { Button } from "@mantine/core";
import React from "react";
import { assetIndex } from "../../../public/assets";
import Image from "next/image";
import HeroSection from "@/components/Home/Hero";
import ProductCategory2 from "@/components/Home/ProductMenu";
import ProductCategoryMenu from "@/components/ProductCategoryMenu";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutShowCase from "@/components/Home/AboutShowCase";

const HomeIndex = () => {
  return (
    <div className="overflow-x-hidden w-full">
      <Header />
      <div className=" flex flex-col gap-y-28">
        <HeroSection />
        <div className=" mx-auto max-w-[69.38rem]">
          <div className="">
            <ProductCategoryMenu />
          </div>
          <div className="flex flex-col gap-y-28">
            <ProductCategory2 />
            <AboutShowCase />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HomeIndex;
