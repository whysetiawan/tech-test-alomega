import { Check } from "@phosphor-icons/react";
import { Button, Card } from "@repo/ui";

const BASIC_FEATURES = [
  "Recording incoming goods",
  "Recording outgoing goods",
  "Recording profit results",
];

const BUSINESS_FEATURES = [
  ...BASIC_FEATURES,
  "Analyzing sales results",
  "24/7 Support",
];

const PricingList = () => {
  return (
    <Card className="flex flex-col  mt-8 divide-y-2 py-0 px-8 md:flex-row md:divide-y-0 md:divide-x-2 md:px-8 items-stretch">
      <div className="flex flex-col my-8 w-full md:mt-8 md:w-[48%] md:mr-8 justify-between">
        <div>
          <h3 className="text-3xl font-bold text-gray-900 tracking-wide">
            Basic
          </h3>
          <div className="w-full my-4 border-b border-slate-200 pb-4 justify-center">
            <span className="text-2xl font-semibold text-gray-900">
              $50{" "}
              <span className="text-lg font-medium text-gray-500">/ month</span>
            </span>
          </div>
          <ul className="gap-4">
            {BASIC_FEATURES.map((feature) => {
              return (
                <li key={feature} className="flex gap-x-4 items-center">
                  <Check className="h-4 w-4 text-blue-700" weight="bold" />
                  {feature}
                </li>
              );
            })}
          </ul>
        </div>
        <Button.Primary className="mt-6 rounded-md">Subscribe</Button.Primary>
      </div>
      <div className="flex flex-col justify-between w-full mb-8 md:w-[48%] md:my-8 md:pl-8">
        <div>
          <h3 className="text-3xl mt-4 font-bold text-gray-900 tracking-wide md:mt-0 ">
            Bussiness
          </h3>
          <div className="w-full my-4 border-b border-slate-200 pb-4 justify-center">
            <span className="text-2xl font-semibold text-gray-900">
              $75{" "}
              <span className="text-lg font-medium text-gray-500">/ month</span>
            </span>
          </div>

          <ul className="gap-4">
            {BUSINESS_FEATURES.map((feature) => {
              return (
                <li key={feature} className="flex gap-x-4 items-center">
                  <Check className="h-4 w-4 text-blue-700" weight="bold" />
                  {feature}
                </li>
              );
            })}
          </ul>
        </div>
        <Button.Primary className="mt-6 rounded-md">
          Subscribe Now
        </Button.Primary>
      </div>
    </Card>
  );
};

export default PricingList;
