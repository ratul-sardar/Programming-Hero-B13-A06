import HowToStartCard from "../../components/Cards/HowToStartCard";

export default function HowToStart() {
  return (
    <section id="HowToStart" className=" bg-background-white">
      <div className="cssContainer">
        {/* Heading*/}
        <div className="text-center mb-10 ">
          <h2 className="mb-4">Get Started in 3 Steps</h2>
          <p className="">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Card*/}
        <div className="grid gap-6 md:gap-7.5 grid-cols-1 md:grid-cols-3">
          <HowToStartCard></HowToStartCard>
          <HowToStartCard></HowToStartCard>
          <HowToStartCard></HowToStartCard>
        </div>
      </div>
    </section>
  );
}
