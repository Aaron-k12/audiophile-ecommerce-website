"use client";
import { useState } from "react";

import Image from "next/image";
import ProductCategoryMenu from "./ProductCategoryMenu";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";

const NavMenu = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        centered
        top={true}
        size="xl"
        classNames={{
          width: "max-w-screen",
          content: "max-w-none top-[2rem] overflow-y-hidden",
          inner: "flex justify-center ",
        }}
      >
        <div className="border-">
          <ProductCategoryMenu />
        </div>
      </Modal>
      <div>
        <button className="transition hover:text-orange-500" onClick={open}>
          <Image
            src="/assets/MenuIcon.svg"
            width={20}
            height={20}
            alt="image of menu icon"
          />
        </button>
      </div>
    </>
  );
};

export default NavMenu;
// pt-[3.25rem]
