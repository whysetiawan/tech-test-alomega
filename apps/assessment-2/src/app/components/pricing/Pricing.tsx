"use client";
import { useInView, animated } from "@react-spring/web";
import EnterprisePricing from "./EnterprisePricing";
import Introduction from "./Introduction";
import PricingList from "./PricingList";

const Pricing = () => {
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
      id="pricing"
      ref={ref}
      style={fadeSpring}
      className="py-12 mx-12"
    >
      <Introduction />
      <PricingList />
      <EnterprisePricing />
    </animated.section>
  );
};

export default Pricing;
