import Image from "next/image";
import React from "react";

import { TbArrowUpRight } from "react-icons/tb";

const Hero = () => {
  return (
    <div className="lg:bg-background mx-5 md:mx-0 md:px-14 lg:pt-6 xl:pt-20 h-screen grid grid-cols-3 lg:grid-cols-6 xl:grid-cols-12 gap-20">
      <div className="col-span-3 lg:col-span-3 xl:col-span-7">
        <h1 className="font-semibold max-w-lg lg:max-w-xl 2xl:max-w-none text-title-5 ">
          Automate bug submitting with{" "}
          <span className="text-primary">simple as shaking</span> your phone
        </h1>
        <p className="text-lg text-secondary pt-3 md:pt-6 max-w-[528px] 2xl:max-w-3xl text-paraph-1">
          Lorem ipsum dolor sit amet consectetur urna ridiculus et ut et arcu
          in. Diam volutpat amet
        </p>
        <div className="flex space-x-7 pt-10">
          <button className="py-3 px-6 rounded-full bg-primary text-white font-medium hover:bg-white hover:text-black border border-primary flex items-center group transition-all">
            Get Started
            <span className="pl-1">
              {" "}
              <TbArrowUpRight
                className="group-hover:text-primary"
                size={24}
              />{" "}
            </span>
          </button>
          <button className="text-lg hover:underline">Try Free</button>
        </div>
        <Image
          className="block lg:hidden xl:col-span-5 mx-auto lg:w-full pt-8"
          src={"hero-img.svg"}
          alt={""}
          width={500}
          height={500}
        ></Image>
        <p className="pt-20 text-sm text-secondary">
          Trusted by great companies
        </p>
        <div className="flex space-x-2 md:space-x-10 pt-4">
          <Image src={"moov-logo.svg"} alt={""} width={120} height={42}></Image>
          <Image
            src={"ikinciyeni_logo_2xl.svg"}
            alt={""}
            width={200}
            height={42}
          ></Image>
        </div>
      </div>

      <Image
        className="hidden lg:block col-span-3 lg:col-span-3 xl:col-span-5 mx-auto lg:w-full "
        src={"hero-img.svg"}
        alt={""}
        width={500}
        height={500}
      ></Image>
    </div>
  );
};

export default Hero;
