import React from "react";
import HeroSection from "@/components/Home/Hero";
import ProductCategory2 from "@/components/Home/ProductMenu";
import ProductCategoryMenu from "@/components/ProductCategoryMenu";
import AboutShowCase from "@/components/Home/AboutShowCase";

const HomeIndex = () => {
  return (
    <>
      <div className="overflow-x-hidden w-full mb-20">
        <div className=" flex flex-col gap-y-28">
          <HeroSection />
          <div className="mx-auto max-w-[69.38rem] px-6">
              <ProductCategoryMenu />
            <div className="flex flex-col gap-y-28 justify-center justify-items-center">
              <ProductCategory2 />
              <AboutShowCase />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeIndex;
