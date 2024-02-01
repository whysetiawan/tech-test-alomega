"use client";

import BottomWave from "../../../assets/icons/bottom-wave.svg";
import Image from "next/image";
import { animated, useChain, useSpring, useSpringRef } from "@react-spring/web";
import { ILLUSTRATION_PATH } from "../../../shared/constants/ILLUSTRATION_PATH";

const AnimatedImage = animated(Image);

const Hero = () => {
  const fadeImgRef = useSpringRef();
  const fadeImg = useSpring({
    ref: fadeImgRef,
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: {
      duration: 400,
    },
  });
  const fadeTextRef = useSpringRef();
  const fadeText = useSpring({
    ref: fadeTextRef,
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: {
      duration: 400,
    },
  });

  useChain([fadeTextRef, fadeImgRef]);

  return (
    <section
      id="hero"
      className="relative flex flex-col w-full justify-between px-8 py-16 md:py-28 md:px-12 md:flex-row"
    >
      <AnimatedImage
        style={fadeImg}
        src={ILLUSTRATION_PATH.erp}
        alt="ERP"
        className="mt-24"
      />
      <animated.div style={fadeText} className="max-w-2xl justify-center">
        <h1 className="text-center text-4xl mt-4 font-bold leading-tight text-gray-900 md:mt-0 md:text-6xl md:leading-tight md:text-right">
          Transform Your Business with Us
        </h1>
        <p className="mt-5 text-center text-gray-800 md:text-lg md:text-right">
          Streamline operations, enhance productivity, and make data-driven
          decisions with our powerful ERP application.
        </p>
      </animated.div>
      <BottomWave className="hidden md:block absolute bottom-0 right-0 -z-10" />
    </section>
  );
};

export default Hero;
