import Image from "next/image";
import React, { useRef } from "react";
import {
  motion,
  MotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
  Variants,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BsCheckCircle } from "react-icons/bs";
import DashedCircles from "./DashedCircles";

const cardVariants: Variants = {
  offscreen: {
    translateY: "150%",
  },
  onscreen: {
    translateY: 0,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

function useParallax(
  value: MotionValue<number>,
  outStart: number,
  outEnd: number
) {
  return useTransform(value, [0, 1], [outStart, outEnd]);
}

const ScrollSection = () => {
  const servicesRef = React.useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const { scrollYProgress } = useScroll({
    target: servicesRef,
    offset: ["-256px", "end start"],
  });
  const parallax = useParallax(scrollYProgress, 0, 100);

  const { scrollYProgress: scrollBottom } = useScroll({
    target: servicesRef,
    offset: ["start center", "end center"],
  });
  const height = useTransform(scrollBottom, [0, 1], ["0%", "100%"]);

  return (
    <div className="mt-8 md:mt-52 mx-5 lg:mx-0 relative" ref={servicesRef}>
      <div className="hidden lg:block absolute h-full w-[1px] bg-[#E8E8E8] left-1/2 -translate-x-full top-0"></div>
      <motion.div
        className="hidden lg:block absolute w-[1px] bg-primary left-1/2 -translate-x-full top-0"
        style={{
          height,
        }}
      ></motion.div>
      <div className="lg:grid lg:grid-cols-12 lg:gap-y-48 gap-y-3 items-center flex flex-col-reverse mb-44">
        <div className="col-span-12 lg:col-span-6 mx-auto relative">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={cardVariants}
            style={{ y: parallax }}
            viewport={{ once: true, amount: 0.8 }}
            className="absolute right-0 md:-right-10 top-0 transform rotate-12"
          >
            <div className="text-white bg-[#FF5050] inline-block rounded-full border-[3px] border-[#FEA4A4] font-medium py-2 px-3 text-sm">
              <div className="flex items-center space-x-2">
                <BsCheckCircle size={22} />
                <p>Bug Found</p>
              </div>
            </div>
          </motion.div>
          <Image
            src={"scroll-first-img.svg"}
            alt={""}
            width={400}
            height={400}
          ></Image>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={cardVariants}
            style={{ y: parallax }}
            viewport={{ once: true, amount: 0.8 }}
            className="absolute top-44 -left-10"
          >
            <Image src={"test-img.svg"} alt={""} width={69} height={88}></Image>
          </motion.div>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <div className="flex flex-col justify-center items-center">
            <div className="hidden lg:block absolute  left-1/2 -ml-8 w-16 h-16 bg-white">
              <span className="w-12 h-12 flex justify-center items-center border-2 text-primary border-primary font-semibold rounded-full bg-white mx-auto mt-2">
                1
              </span>
            </div>
            <p className="lg:hidden py-2 px-4 border rounded-lg inline-block text-primary border-primary text-xl font-bold">
              1
            </p>
            <h3 className="text-secondary text-xl md:text-3xl max-w-xs md:max-w-md font-semibold pt-3 md:pt-0">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
            <p className="text-secondary text-sm md:text-lg max-w-md pt-2 md:pt-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 lg:gap-y-48 gap-y-12 mx-auto items-center mb-44">
        <div className="col-span-12 lg:col-span-6 mx-auto">
          <div className="flex justify-center items-center">
            <div>
              <p className="lg:hidden py-2 px-4 border rounded-lg inline-block text-primary border-primary text-xl font-bold">
                2
              </p>
              <h3 className="text-secondary text-xl md:text-3xl max-w-xs md:max-w-sm font-semibold pt-3 md:pt-0">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
              <p className="text-secondary text-sm md:text-lg max-w-md pt-2 md:pt-6">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum.
              </p>
            </div>
            <div className="hidden lg:block absolute  left-1/2 -ml-8 w-16 h-16 bg-white">
              <span className="w-12 h-12 flex justify-center items-center border-2 text-primary border-primary font-semibold rounded-full bg-white mx-auto mt-2">
                2
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 mx-auto relative">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={cardVariants}
            style={{ y: parallax }}
            viewport={{ once: true, amount: 0.8 }}
            className="absolute -left-10 top-0 transform -rotate-12"
          >
            <div className="text-white bg-[#FF5050] inline-block rounded-full border-[3px] border-[#FEA4A4] font-medium py-2 px-3 text-sm">
              <div className="flex items-center space-x-2">
                <BsCheckCircle size={22} />
                <p>detailed reports</p>
              </div>
            </div>
          </motion.div>
          <Image
            src={"scroll-second-img.svg"}
            alt={""}
            width={400}
            height={400}
          ></Image>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={cardVariants}
            style={{ y: parallax }}
            viewport={{ once: true, amount: 0.8 }}
            className="absolute -bottom-10 right-32"
          >
            <Image
              src={"secondimg-svg.svg"}
              alt={""}
              width={69}
              height={88}
            ></Image>
          </motion.div>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-12 lg:gap-y-48 gap-y-12 mx-auto items-center flex flex-col-reverse mb-44">
        <div className="col-span-12 lg:col-span-6 mx-auto relative">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={cardVariants}
            style={{ y: parallax }}
            viewport={{ once: true, amount: 0.8 }}
            className="absolute right-0 -top-4 transform rotate-12"
          >
            <div className="text-white bg-[#FF5050] inline-block rounded-full border-[3px] border-[#FEA4A4] font-medium py-2 px-3 text-sm">
              <div className="flex items-center space-x-2">
                <BsCheckCircle size={22} />
                <p>Crashes Caught</p>
              </div>
            </div>
          </motion.div>
          <Image
            src={"scroll-third-img.svg"}
            alt={""}
            width={400}
            height={400}
          ></Image>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={cardVariants}
            style={{ y: parallax }}
            viewport={{ once: true, amount: 0.8 }}
            className="absolute bottom-0 left-0"
          >
            <Image
              src={"third-img.svg"}
              alt={""}
              width={69}
              height={88}
            ></Image>
          </motion.div>
        </div>
        <div className="col-span-12 lg:col-span-6 mx-auto">
          <div className="flex justify-center items-center">
            <div className="hidden lg:block absolute  left-1/2 -ml-8 w-16 h-16 bg-white">
              <span className="w-12 h-12 flex justify-center items-center border-2 text-primary border-primary font-semibold rounded-full bg-white mx-auto mt-2">
                3
              </span>
            </div>
            <div>
              <p className="lg:hidden py-2 px-4 border rounded-lg inline-block text-primary border-primary text-xl font-bold">
                3
              </p>
              <h3 className="text-secondary text-xl md:text-3xl max-w-xs md:max-w-sm font-semibold pt-3 md:pt-0">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
              <p className="text-secondary text-sm md:text-lg max-w-md pt-2 md:pt-6">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 lg:gap-y-48 gap-y-12 mx-auto items-center">
        <div className="col-span-12 lg:col-span-6 mx-auto">
          <div className="flex justify-center items-center">
            <div>
              <p className="lg:hidden py-2 px-4 border rounded-lg inline-block text-primary border-primary text-xl font-bold">
                4
              </p>
              <h3 className="text-secondary text-xl md:text-3xl max-w-xs md:max-w-sm font-semibold pt-3 md:pt-0">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
              <p className="text-secondary text-sm md:text-lg max-w-md pt-2 md:pt-6">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum.
              </p>
            </div>
            <div className="hidden lg:block absolute  left-1/2 -ml-8 w-16 h-16 bg-white">
              <span className="w-12 h-12 flex justify-center items-center border-2 text-primary border-primary font-semibold rounded-full bg-white mx-auto mt-2">
                4
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 mx-auto">
          <DashedCircles />
        </div>
      </div>
    </div>
  );
};

export default ScrollSection;
