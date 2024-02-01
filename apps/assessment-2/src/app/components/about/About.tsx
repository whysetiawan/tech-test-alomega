"use client";
import { useInView, animated } from "@react-spring/web";
import Features from "./Features";
import Introduction from "./Introduction";

const About = () => {
  const [ref, fadeSpring] = useInView(
    () => {
      return {
        from: {
          opacity: 0,
        },
        to: {
          opacity: 1,
        },
        config: {
          duration: 800,
        },
      };
    },
    {
      amount: "any",
      once: true,
    }
  );

  return (
    <animated.section
      id="about"
      ref={ref}
      style={fadeSpring}
      className="py-12 my-8 mx-12"
    >
      <Introduction />
      <Features />
    </animated.section>
  );
};

export default About;
