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

const EnterprisePricing = () => {
  return (
    <Card className="flex flex-col mt-8 py-8 px-8 md:flex-row md:px-8 items-stretch">
      <div className="flex flex-col w-full md:w-[48%] md:mr-8 justify-between">
        <h3 className="text-3xl font-bold text-gray-900">Enterprise</h3>
        <div className="w-full my-4 border-b border-slate-200 pb-4 justify-center">
          <span className="text-lg font-medium text-gray-500">
            a comprehensive solution designed for large-scale organizations
          </span>
        </div>
        <ul className="gap-4">
          <li className="flex gap-x-4 items-center">
            <Check className="h-4 w-4 text-blue-700" weight="bold" />
            All of Business Features
          </li>
          <li className="flex gap-x-4 items-center">
            <Check className="h-4 w-4 text-blue-700" weight="bold" />
            <span className="font-semibold">AI Earnings Prediction</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center w-full md:w-[48%] md:pl-8">
        <Button.Secondary className="mt-6">Contact Us</Button.Secondary>
      </div>
    </Card>
  );
};

export default EnterprisePricing;
