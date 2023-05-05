import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="bg-white lg:bg-background py-8 px-6 md:px-14 flex justify-between sticky top-0 z-30 w-full items-center">
      <div>
        <Image src={"black-logo.svg"} alt={""} width={120} height={30}></Image>
      </div>

      <div
        className={isNavOpen ? "hidden" : "block"}
        aria-hidden="true"
        onClick={() => setIsNavOpen((prev) => !prev)}
      >
        <GiHamburgerMenu className="md:hidden" size={24} />
      </div>

      <div
        className={
          isNavOpen
            ? "w-full absolute top-16 left-0 min-w-full flex flex-col md:hidden bg-white shadow-2xl"
            : "hidden"
        }
        aria-hidden="true"
        onClick={() => setIsNavOpen((prev) => !prev)}
      >
        <div className="absolute -top-8 right-6">
          <RxCross2 size={29} />
        </div>
        <div>
          <ul className="font-medium text-black py-16 text-[22px] text-center px-5">
            <Link
              href={"#"}
              className="font-medium group transition duration-300 inline-block pb-8"
            >
              Documentation
              <span className="block max-w-0 group-hover:max-w-full transition-all rounded-full duration-500 h-0.5 bg-primary"></span>
            </Link>
            <button className="py-3 px-6 border rounded-full border-black font-medium hover:bg-primary hover:text-white hover:border-primary block w-full mb-5 transition-all">
              Login
            </button>
            <button className="py-3 px-6 rounded-full bg-primary text-white font-medium hover:bg-white hover:text-black border border-primary hover:border-black block w-full transition-all">
              Sign Up
            </button>
          </ul>
        </div>
      </div>

      <div className="space-x-8 group-only hidden md:block">
        <Link
          href={"#"}
          className="font-medium group transition duration-300 inline-block"
        >
          Documentation
          <span className="block max-w-0 group-hover:max-w-full transition-all rounded-full duration-500 h-0.5 bg-primary"></span>
        </Link>
        <button className="py-3 px-6 border rounded-full border-black font-medium hover:bg-primary hover:text-white hover:border-primary">
          Login
        </button>
        <button className="py-3 px-6 rounded-full bg-primary text-white font-medium hover:bg-white hover:text-black border border-primary hover:border-black">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
