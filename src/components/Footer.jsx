"use client";
import { assetIndex } from "../../public/assets";
import { navItems } from "@/constants/Nav";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="bg-[#101010]">
      <div className="flex flex-col w-full mx-auto max-w-[69.38rem]">
        {/* MOBILE */}
        <div className=" grid grid-cols-1 h-full  mx-auto items-center justify-items-center md:justify-items-left md:items-left pb-9 md:grid-cols-2 gap-y-12">
          <div className="w-[101px] h-1 z-10 bg-[#D87D4A]  md:justify-self-start" />
          <Link
            href="/home"
            className="relative tracking-widest font-manrope md:row-start-2 md:row-end-3 md:col-start-1 md:col-end-2 md:items-left md:justify-self-start"
          >
            <Image
              src={assetIndex.logo.audiophileLogo}
              objectFit="fill"
              width={143}
              height={20}
            />
          </Link>
          <div className="flex flex-col gap-4 max-md:items-center md:flex-row md:row-start-3 md:row-end-4 md:col-start-1 md:col-end-2 md:items-left lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3 lg:justify-self-end">
            {navItems.map(({ name, href, id }) => (
              <Link
                key={id}
                href={href}
                className="text-white uppercase transition hover:text-[#D87D4A]"
              >
                {name}
              </Link>
            ))}
          </div>
          <div className="w-full text-center text-white opacity-50 max-lg::row-start-4 max-lg::row-end-5 md-col-start-1 md-col-end-3 md:text-left md:col-span-2 lg:col-span-1 lg:col-end-2 ">
            <p className="p-0 m-0">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
          </div>
          <div className="text-white opacity-50 md:col-start-1 md:col-end-2 md:row-start-5 md:row-end-6 md:text-left md:justify-self-start">
            <p>Copyright 2021. All Rights Reserved</p>
          </div>
          {/* SOCIALS */}
          <div className="flex gap-x-9 md:row-start-5 md:row-end-6 md:justify-self-end lg:row-start-3 lg:row-end-4 lg:col-start-2 lg:col-end-3">
            <div className="relative hover:bg-[#D87D4A] cursor-pointer">
              <Image
                src={assetIndex.socials.facebook}
                width={20}
                height={20}
                alt="socials icon"
              />
            </div>
            <div className="relative hover:bg-[#D87D4A] cursor-pointer">
              <Image
                src={assetIndex.socials.instagram}
                width={20}
                height={20}
                alt="socials icon"
              />
            </div>
            <div className="relative hover:bg-[#D87D4A] cursor-pointer">
              <Image
                src={assetIndex.socials.twitter}
                width={20}
                height={20}
                alt="socials icon"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
