import Image from "next/image";
import React from "react";
import { ImAndroid } from "react-icons/im";
import { TbWorld } from "react-icons/tb";
import { ImAppleinc } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-background">
      <div className="grid grid-cols-6 md:grid-cols-12 py-10 md:py-20 border-b mx-5 md:mx-16 gap-5 md:gap-10">
        <div className="col-span-6 lg:col-span-4 xl:col-span-4">
          <Image
            src={"black-logo.svg"}
            alt={""}
            width={120}
            height={30}
          ></Image>
          <p className="text-secondary pt-4 max-w-sm">
            Khaos tracks user behavior and identifies app issues for your teams
            to take action.
          </p>
          <div className="flex items-center space-x-2 md:space-x-7 pt-14">
            <button className="py-3 px-6 rounded-full bg-black text-white font-medium hover:bg-white hover:text-black border border-black hover:border-black flex-shrink-0 transition-all">
              Send E-mail
            </button>
            <Link href={"#"} className="text-sm text-secondary hover:underline">info@khaosapp.com</Link>
          </div>
        </div>
        <div className="lg:col-span-2 xl:col-span-2 2xl:hidden">
        </div>
        <div className="col-span-6 lg:col-span-2 xl:col-span-2 font-medium">
          <h3 className="pb-6">RESOURCES</h3>
          <Link href={"#"} className="text-secondary hover:underline">Documentation</Link>
        </div>
        <div className="col-span-3 lg:col-span-2 xl:col-span-2 pt-12 md:pt-0">
          <h3 className="font-medium">Platforms</h3>
          <div className="pt-6 text-secondary">
            <Link  href={"#"} className="flex items-center hover:underline">
              <span className="mr-3">
                <ImAppleinc />
              </span>{" "}
              Ios
            </Link>
            <Link href={"#"} className="flex items-center hover:underline">
              <span className="mr-3">
                <ImAndroid />
              </span>{" "}
              Android
            </Link>
            <Link href={"#"} className="flex items-center hover:underline">
              <span className="mr-3">
                <TbWorld />
              </span>{" "}
              Web
            </Link>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-2 xl:col-span-2 pt-12 md:pt-0">
          <h3 className="font-medium">Social Media</h3>
          <div className="pt-6 text-secondary">
            <Link href={"#"} className="flex items-center hover:underline">
              <span className="mr-3">
                <BsLinkedin />
              </span>{" "}
              Linkedin
            </Link>
            <Link href={"#"} className="flex items-center hover:underline">
              <span className="mr-3">
                <AiOutlineTwitter />
              </span>{" "}
              Twitter
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-16 flex flex-col md:flex-row text-center justify-evenly text-secondary py-8 md:py-5 space-y-5 md:space-y-0">
        <div className="flex-1 md:flex">
          <p>@2023 Khaos, All Rigts Reserved</p>
        </div>
        <div className="flex space-x-8 flex-1 justify-center md:justify-normal">
          <Link className="underline" href={"#"}>privacy policy</Link>
          <Link className="underline" href={"#"}>Terms of service</Link>
        </div>
        <div>
          <p>
            made by <span className="font-semibold">Nextlua</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
