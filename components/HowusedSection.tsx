import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ImAppleinc } from "react-icons/im";
import { FiArrowRight } from "react-icons/fi";
import { ImAndroid } from "react-icons/im";
import { TbWorld } from "react-icons/tb";

const HowusedSection = () => {
  return (
    <div className="my-12 md:my-48 mx-5 md:mx-5">
      <div className="text-center">
        <h2 className="font-semibold text-2xl md:text-4xl pb-6">How is it used?</h2>
        <p className="text-sm md:text-lg text-secondary max-w-xl mx-auto">
          Content here, content here, making it look like readable English. Many
          desktop publishing packages and web page.
        </p>
      </div>
      <div className="grid grid-cols-12 bg-background rounded-3xl md:mt-20 mt-8 border">
        <div className="col-span-12 lg:col-span-4 p-12 border-b md:border-b-none lg:border-r hover:text-white hover:bg-gray-800 hover:rounded-t-3xl lg:hover:rounded-r-none lg:hover:rounded-l-3xl transition-all">
          <Link href={""}>
            <ImAppleinc size={45} />
            <p className="pt-8 pb-4 font-semibold text-2xl">IOS</p>
            <p className="text-sm max-w-xs pb-16">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <div className="flex items-center font-medium">
              <p className="hover:underline">Integrate SDK</p>{" "}
              <span className=" ml-2">
                <FiArrowRight />
              </span>
            </div>
          </Link>
        </div>
        <div className="col-span-12 lg:col-span-4 p-12 md:border-b-0 border-b lg:border-r hover:text-white hover:bg-gray-800 transition-all">
          <Link href={""}>
            <ImAndroid size={45} />
            <p className="pt-8 pb-4 font-semibold text-2xl">Android</p>
            <p className="text-sm max-w-xs pb-16">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <div className="flex items-center hover:underline">
              <p className="hover:underline">Integrate SDK</p>{" "}
              <span className=" ml-2">
                <FiArrowRight />
              </span>
            </div>
          </Link>
        </div>
        <div className="col-span-12 lg:col-span-4 p-12 hover:text-white hover:bg-gray-800 hover:rounded-b-3xl md:hover:rounded-b-none lg:hover:rounded-r-3xl transition-all">
          <Link href={""}>
            <TbWorld size={50} />
            <p className="pt-8 pb-4 font-semibold text-2xl">Web</p>
            <p className="text-sm max-w-xs pb-16">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <div className="flex items-center hover:underline">
              <p className="hover:underline">Integrate SDK</p>{" "}
              <span className=" ml-2">
                <FiArrowRight />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowusedSection;
