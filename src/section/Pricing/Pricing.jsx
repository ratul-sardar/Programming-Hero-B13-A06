import PricingCard from "../../components/Cards/PricingCard";

// Card Contents
const card1 = {
  planName: "Starter",
  planDetails: "Perfect for getting started",
  price: "$0",
  features: [
    "Access to 10 free tools",
    "Basic templates",
    "Priority support",
    "Community support",
    "1 project per month",
  ],
  ctaText: "Get Started Free",
  mostPopular: false,
};

const card2 = {
  planName: "Pro",
  planDetails: "Best for professionals",
  price: "$29",
  features: [
    "Access to all premium tools",
    "Unlimited templates",
    "Priority support",
    "Unlimited projects",
    "Cloud sync",
    "Advanced analytics",
  ],
  ctaText: "Start Pro Trial",
  mostPopular: true,
};

const card3 = {
  planName: "Enterprise",
  planDetails: "For teams and businesses",
  price: "$99",
  features: [
    "Everything in Pro",
    "Team collaboration",
    "Custom integrations",
    "Dedicated support",
    "SLA guarantee",
    "Custom branding",
  ],
  ctaText: "Contact Sales",
  mostPopular: false,
};

export default function Pricing() {
  return (
    <>
      <section id="pricing" className="">
        <div className="cssContainer">
          <header className="text-center mb-10">
            <h2 className="mb-4">Simple, Transparent Pricing</h2>
            <p className="">
              Choose the plan that fits your needs. Upgrade or downgrade
              anytime.
            </p>
          </header>

          <div className="flex max-md:flex-col items-center justify-center gap-8">
            <PricingCard cardInfo={card1}></PricingCard>
            <PricingCard cardInfo={card2}></PricingCard>
            <PricingCard cardInfo={card3}></PricingCard>
          </div>
        </div>
      </section>
    </>
  );
}
