import { Button, Card } from "@repo/ui";
import { MagicWand, BoundingBox, Package } from "@phosphor-icons/react";

const features = [
  {
    icon: <MagicWand className="h-10 w-10 text-blue-500" weight="duotone" />,
    title: "Analyze",
    description:
      "Explore your sales performance using our interactive charts. Simplify business analysis with clear and visually engaging graphics.",
  },
  {
    icon: <BoundingBox className="h-10 w-10 text-blue-500" weight="duotone" />,
    title: "24/7 Support",
    description:
      "Our support team is ready to assist you around the clock, ensuring the smooth operation of your business without interruptions.",
  },
  {
    icon: <Package className="h-10 w-10 text-blue-500" weight="duotone" />,
    title: "Swift AI Predictions",
    description:
      "Gain quick and accurate insights into your financial future with the assistance of AI. Swift and precise predictions.",
  },
];

const Features = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 mt-8">
      {features.map((feature) => {
        return (
          <Card key={feature.title}>
            <div className="rounded-3xl bg-blue-50 p-4">{feature.icon}</div>
            <h3 className="mt-7 text-center text-2xl font-semibold text-gray-900">
              {feature.title}
            </h3>
            <p className="mt-6 text-center text-slate-800">
              {feature.description}
            </p>
            <Button.Primary className="mt-6">Learn More</Button.Primary>
          </Card>
        );
      })}
    </div>
  );
};

export default Features;
