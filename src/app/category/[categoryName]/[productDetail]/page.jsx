"use client";
import Header from "@/components/Header";
import React from "react";
import { useRouter } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";
import { useParams } from "next/navigation";
import ProductCategoryMenu from "@/components/ProductCategoryMenu";
import AboutShowCase from "@/components/Home/AboutShowCase";
import Footer from "@/components/Footer";
const ProductDetailPage = () => {
  const params = useParams();
  const router = useRouter();

  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="w-screen ">
       
        <ProductDetail
          categoryName={params.categoryName}
          productId={params.productDetail}
        />
        <div className="mx-auto max-w-[69.38rem] ">
          <ProductCategoryMenu />
        </div>
        <div className="py-28 mx-auto max-w-[69.38rem]">
          <AboutShowCase />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ProductDetailPage;
