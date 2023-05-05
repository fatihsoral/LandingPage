import Image from "next/image";
import React from "react";

const WhatdoingSection = () => {
  return (
    <div className="mt-14 md:mt-44 text-center mx-5 lg:mx-0">
      <h2 className="font-semibold text-2xl md:text-4xl pb-2 md:pb-6">What it he doing?</h2>
      <p className="text-sm md:text-lg text-secondary max-w-3xl mx-auto">
        Khaos is a tool that helps you track user behavior and identify issues
        with your web and mobile apps, so your engineering, product, and
        marketing teams can take action.
      </p>
      <Image
        className="hidden md:block mx-auto pt-24"
        src={"whatdoing-sema.svg"}
        alt=""
        width={1028}
        height={388}
      ></Image>
      <Image
        className="block md:hidden mx-auto pt-10"
        src={"mobile-sema.svg"}
        alt=""
        width={335}
        height={367}
      ></Image>
    </div>
  );
};

export default WhatdoingSection;
