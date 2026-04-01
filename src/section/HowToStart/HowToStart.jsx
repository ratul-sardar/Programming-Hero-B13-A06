import HowToStartCard from "../../components/Cards/HowToStartCard";

// Card Images
import card1 from "../../assets/user.png";
import card2 from "../../assets/package.png";
import card3 from "../../assets/rocket.png";

// Card contents
const cardContents = [
  {
    cardDescription:
      "Sign up for free in seconds. No credit card required to get started.",
    cardTitle: "Create Account",
    cardImage: card1,
  },
  {
    cardDescription:
      "Browse our catalog and select the tools that fit your needs.",
    cardTitle: "Choose Products",
    cardImage: card2,
  },
  {
    cardDescription:
      "Download and start using your premium  tools immediately.",
    cardTitle: "Start Creating",
    cardImage: card3,
  },
];

export default function HowToStart() {
  return (
    <section id="HowToStart" className=" bg-background-white">
      <div className="cssContainer">
        {/* Heading*/}
        <div className="text-center mb-10">
          <h2 className="mb-4">Get Started in 3 Steps</h2>
          <p className="">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Card*/}
        <div className="grid gap-6 md:gap-7.5 grid-cols-1 md:grid-cols-3">
          {cardContents.map((card, index) => (
            <HowToStartCard
              key={index}
              cardDescription={card.cardDescription}
              cardTitle={card.cardTitle}
              cardImage={card.cardImage}
              cardNumber={index + 1}
            ></HowToStartCard>
          ))}
        </div>
      </div>
    </section>
  );
}
