"use client";
import React from "react";
import { Button } from "@mantine/core";
import { useRouter } from "next/navigation";

export const ButtonComponent = ({ backgroundColor, text, ...props }) => {
  // <Button
  //   styles={{
  //     root: {
  //       marginTop: "1.75rem",
  //       opacity: "100%",
  //       color: "white",
  //       fontStyle: "bold",
  //     },
  //   }}
  //   {...props}
  // >
  //   {text}
  // </Button>
  return (
     <Button
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
