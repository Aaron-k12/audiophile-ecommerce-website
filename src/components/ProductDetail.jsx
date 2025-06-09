"use client";
import useGetItemCategory from "@/customHooks/useGetItemCategory";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { Button, Text } from "@mantine/core";
import { ButtonComponent, CustomButton, SecondaryNavButton } from "./Button";
import ProductCategoryMenu from "./ProductCategoryMenu";
import AboutShowCase from "./Home/AboutShowCase";
import Footer from "./Footer";
import { useCart } from "@/context/CartContext";
import useGetAllProducts from "@/customHooks/useGetAllProducts";
import { useRouter } from "next/navigation";

const ProductDetail = ({ productId, categoryName }) => {
  const [detail, setDetail] = useState(null);
  const router = useRouter();
  const products = useGetItemCategory({ categoryName });
  const allProducts = useGetAllProducts();

  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const result = products.find((item) => item.id === Number(productId));
    if (result) setDetail(result);
  }, [products, detail]);

  const findItem = (name) => {
    const newProduct = allProducts.find(
      (item) => item.slug.toLowerCase() === name.toLowerCase()
    );

    return newProduct
      ? router.push(`/category/${newProduct.category}/${newProduct.id}`)
      : null;
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = (product) => {
    const cartItem = {
      id: product.id,
      name: product.name,
      image: product.image.mobile.replace(/^\.\//, "/"),
      quantity,
      price: product.price,
    };
    addToCart(cartItem);
    setQuantity(1);
  };

  return detail ? (
    <div className="mt-20 m-auto flex flex-col gap-y-[5.5rem] mx-auto max-w-[69.38rem] max-lg:px-6">
      <div>
        <SecondaryNavButton />

        <div className="grid md:grid-cols-2 md:gap-x-28">
          {/* MOBILE */}
          <div className="relative w-full max-md:block md:hidden rounded-[8px]">
            <Image
              src={detail?.categoryImage?.mobile.replace(/^\.\//, "/")}
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
              src={detail?.categoryImage?.mobile.replace(/^\.\//, "/")}
              width={0}
              height={500}
              sizes="100vw"
              className="w-full h-auto"
              alt={`image of ${categoryName}`}
            />
          </div>
          {/* DESKTOP */}
          <div className="hidden relative w-full lg:block rounded-[8px]">
            <Image
              src={detail?.categoryImage?.desktop.replace(/^\.\//, "/")}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
              alt={`image of ${categoryName}`}
            />
          </div>
          <div className="flex flex-col items-center  text-left  lg:gap-y-6 w-full lg:items-start lg:text-left  ">
            <div className="max-w-[23.68rem]">
              <div className="tracking-[0.63rem] opacity-50 text-[0.8rem] text-[#D87D4A]">
                NEW PRODUCT
              </div>
              <div>
                <h1 className="mt-4 mb-6 text-4xl font-bold uppercase">
                  {detail?.name}
                </h1>
              </div>
              <div>
                <p className="text-[0.94rem] opacity-75 ">
                  {detail?.description}
                </p>
              </div>
              <Text fw={700}>$ {detail?.price?.toLocaleString()}</Text>
              <div className="flex items-center gap-4">
                <div className="flex items-center bg-gray-100 px-4 py-2 space-x-6">
                  <button
                    onClick={handleDecrease}
                    className="text-gray-400 text-xl font-medium hover:text-[#FBAF85] cursor-pointer transition"
                  >
                    −
                  </button>
                  <span className="text-black font-medium">{quantity}</span>
                  <button
                    onClick={handleIncrease}
                    className="text-gray-400 text-xl font-medium  transition hover:text-[#FBAF85] cursor-pointer"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(detail)}
                  className="bg-[#D87D4A] text-white uppercase px-6 py-3 font-medium tracking-widest hover:bg-[#FBAF85] font-manrope cursor-pointer"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div className="grid gap-y-[5.5rem] lg:grid-cols-2">
        <div>
          <p className="font-bold text-2xl">FEATURES</p>
          <p className="opacity-50">
            {detail.features.split("\n").map((line, id) => (
              <span key={id} className="mb-2">
                {line}
              </span>
            ))}
          </p>
        </div>

        {/* IN THE BOX */}
        <div className="grid md:grid-cols-2 lg:justify-items-center lg:justify-self-start lg:align-middle lg:gap-y-32 w-full lg:mx-auto">
          <div>
            <p className="font-bold p-0 m-0 text-2xl">IN THE BOX</p>
            <ul className="opacity-50 ">
              {detail?.includes.map(({ item, quantity }, id) => (
                <li key={id} className="flex gap-x-5">
                  <span className="text-[#D87D4A] font-bold mr-2">
                    {quantity}x
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div className="grid gap-y-5 md:grid-flow-row md:grid-cols-2 md:auto-rows-auto">
        {/* MOBILE */}
        {Object.values(detail.gallery).map((img, id) => (
          <div
            key={`mobile-${id}`}
            className="block md:hidden rounded-[8px] grow"
          >
            <Image
              src={img.mobile.replace(/^\.\//, "/")}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
              alt="gallery image"
            />
          </div>
        ))}
        {/* TABLET */}
        {Object.values(detail.gallery).map((img, id) => (
          <div
            key={`tablet-${id}`}
            className="hidden md:block lg:hidden rounded-[8px]"
          >
            <Image
              src={img.tablet.replace(/^\.\//, "/")}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
              alt="gallery image"
            />
          </div>
        ))}
        {/* DESKTOP */}
        {Object.values(detail.gallery).map((img, id) => (
          <div key={`desktop-${id}`} className="hidden lg:block rounded-[8px]">
            <Image
              src={img.desktop.replace(/^\.\//, "/")}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
              alt="gallery image"
            />
          </div>
        ))}
      </div>
      {/* YOU MAY ALSO LIKE */}
      <div className="flex flex-col">
        <Text fw={700}>YOU MAY ALSO LIKE</Text>
        <div className="grid gap-6 md:grid-cols-3">
          {detail?.others.map((item, idx) => (
            <div key={item.slug} className="flex flex-col items-center">
              {/* MOBILE IMAGE */}
              <div className="block md:hidden w-full rounded-[8px]">
                <Image
                  src={item.image.mobile.replace(/^\.\//, "/")}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto"
                  alt={item.name}
                />
              </div>
              {/* TABLET IMAGE */}
              <div className="hidden md:block lg:hidden w-full rounded-[8px]">
                <Image
                  src={item.image.tablet.replace(/^\.\//, "/")}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto"
                  alt={item.name}
                />
              </div>
              {/* DESKTOP IMAGE */}
              <div className="hidden lg:block w-full rounded-[8px]">
                <Image
                  src={item.image.desktop.replace(/^\.\//, "/")}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto"
                  alt={item.name}
                />
              </div>
              <div className="flex flex-col gap-y-8">
                <p className="mt-4 font-bold uppercase tracking-widest text-2xl">
                  {item.name}
                </p>
                <CustomButton
                  text="see product"
                  onClick={() => findItem(item.slug)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div>
        <ProductCategoryMenu />
      </div>
      <AboutShowCase />
      <Footer /> */}
    </div>
  ) : (
    <p>No data available</p>
  );
};

export default ProductDetail;
