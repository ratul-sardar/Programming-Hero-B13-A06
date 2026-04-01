import { Check } from "lucide-react";
import Button from "../Button/Button";

export default function PricingCard({ cardInfo }) {
  // Card Details
  const { planName, planDetails, price, features, ctaText, mostPopular } =
    cardInfo;

  return (
    <>
      <div
        className={`relative ${mostPopular ? "bg-main-linear" : "bg-base-300/25 border border-base-300 shadow-xs"} w-full rounded-3xl p-6 pt-8`}
      >
        {/* Most Popular badge */}
        {mostPopular && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="px-4 py-1.5 bg-[#fef3c6] rounded-full text-xs font-semibold text-[#bb4d00] whitespace-nowrap">
              Most Popular
            </span>
          </div>
        )}

        {/* Card Heading */}
        <div className="mt-2 mb-1">
          <h3 className={`text-2xl ${mostPopular && "text-white"} font-bold `}>
            {planName}
          </h3>
          <p className={`text-sm ${mostPopular && "text-white/70"} mt-0.5`}>
            {planDetails}
          </p>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-1 mt-5 mb-6">
          <span
            className={`text-5xl font-extrabold ${mostPopular && "text-white"}`}
          >
            {price}
          </span>
          <span className={`text-base ${mostPopular && "text-white/80"} `}>
            /Month
          </span>
        </div>

        {/* Features */}
        <ul className="flex flex-col gap-3 mb-8">
          {features.map((feature) => (
            <li
              key={feature}
              className={`flex items-center gap-3 text-sm ${mostPopular && "text-white"}`}
            >
              <span className="">
                <Check size={20} />
              </span>
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        {mostPopular ? (
          <Button bg={true} linear={false} fullw={true} ctaLink="#">
            {ctaText}
          </Button>
        ) : (
          <Button bg={true} linear={true} fullw={true} ctaLink="#">
            {ctaText}
          </Button>
        )}
      </div>
    </>
  );
}
