"use client";
import { CustomButton, SecondaryNavButton } from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AboutShowCase from "@/components/Home/AboutShowCase";
import ProductCategoryList from "@/components/ProductCategoryList";
import ProductCategoryMenu from "@/components/ProductCategoryMenu";
import { useParams } from "next/navigation";
const CategoryPage = () => {
  const params = useParams();
  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className=" border-4 bg-[#191919] flex py-8 ">
        <p className="uppercase mx-auto text-white items-center font-bold text-2xl">
          {params.categoryName}
        </p>
      </div>
      <div className=" gap-y-28 ">
        <div className="flex flex-col mx-auto max-w-[69.38rem] ">
          <div className="">
            <ProductCategoryList categoryName={params.categoryName ?? ""} />
          </div>
          <div>
            <ProductCategoryMenu />
          </div>
          <div className="py-28">
            <AboutShowCase />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default CategoryPage;
