"use client";
import React from "react";
import { Button } from "@mantine/core";
import { useRouter } from "next/navigation";

export const ButtonComponent = ({ backgroundColor, text, ...props }) => {
  return (
    <Button
      styles={{
        root: {
          marginTop: "1.75rem",
          opacity: "100%",
          color: "white",
          fontStyle: "bold",
        },
      }}
      {...props}
    >
      {text}
    </Button>
  );
};

export const CustomButton = ({ text, ...props }) => {
  return (
    <button
      className="bg-[#D87D4A] text-white  text-xl py-2 px-4  hover:bg-[#FBAF85]  cursor-pointer w-full"
      {...props}
    >
      {text.toUpperCase()}
    </button>
  );
};

export const SecondaryNavButton = () => {
  const router = useRouter();
  return (
    <button
      className="hover:text-[#D87D4A] cursor-pointer font-manrope"
      onClick={() => router.back()}
    >
      Go Back
    </button>
  );
};
