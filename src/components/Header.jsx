"use client";

import { useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavMenu from "./NavMenu";
import Image from "next/image";
import NavMenuList from "./NavMenuList";
import { assetIndex } from "../../public/assets";
import { Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import {  CustomButton } from "./Button";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function Header() {
  const [opened, { open, close }] = useDisclosure(false);
  const router = useRouter()

  const pathname = usePathname();
  const { cart, updateQuantity, removeFromCart, clearCart } =
    useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);  

  return (
    <div className="max-w-screen relative">
      {/* MODAL SECTION */}
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        right={true}
        top={true}
        size="sm"
        classNames={{
          body: "p-6",
          width: "max-w-screen",
          content:
            "md:fixed md:top-[10rem] max-lg:right-[2rem] lg:right-120 md:h-full md:w-[400px] md:rounded-none",
          inner: "md:items-end",
        }}
      >
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold tracking-widest">
              CART ({cart.length})
            </h2>
            <button
              onClick={clearCart}
              className="text-sm underline text-gray-500 hover:text-black"
            >
              Remove all
            </button>
          </div>

          {/* Items */}
          <div className="space-y-5 flex flex-col">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      $ {item.price.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="flex items-center bg-gray-100 px-3 py-1 space-x-3">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="text-gray-400 text-lg font-medium hover:text-[#FBAF85] cursor-pointer"
                  >
                    −
                  </button>
                  <span className="text-black font-medium">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="text-gray-400 text-lg font-medium hover:text-[#FBAF85] cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500 tracking-wider">TOTAL</p>
            <p className="text-xl font-bold">$ {total.toLocaleString()}</p>
          </div>

          <div className="w-full">
            <CustomButton
              text="CHECKOUT"
              onClick={() => {
                cart.length > 0 ? router.push("/checkout") : "";
              }}
            />
          </div>
        </div>
      </Modal>

      {/* HEADER */}
      <header className="bg-[#191919]">
        <div className=" flex flex-col  md:px-10 mx-auto max-w-[69.38rem]">
          {/* MOBILE */}
          <div className="relative flex text-white justify-between md:gap-x-[69px] my-8 max-md:px-6">
            <div className="lg:hidden">
              <NavMenu />
            </div>
            <Link
              href="/home"
              className="relative tracking-widest font-manrope"
            >
              <Image
                src={assetIndex.logo.audiophileLogo}
                objectFit="fill"
                width={143}
                height={20}
              />
            </Link>
            <div className=" max-lg:hidden">
              <NavMenuList />
            </div>
            <Button
              onClick={open}
              variant="subtle"
              styles={{
                root: {
                  backgroundColor: "none",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#FBAF85",
                  },
                },
              }}
            >
              <Image
                src="/assets/shared/desktop/icon-cart.svg"
                width={20}
                height={20}
              />
            </Button>
          </div>
          <div className="w-full border-b border-[#979797] opacity-20" />
        </div>
      </header>
    </div>
  );
}
