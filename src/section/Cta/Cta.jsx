import Button from "../../components/Button/Button";

const cta1Link = "#";
const cta2Link = "#";

export default function Cta() {
  return (
    <section id="Cta" className="bg-main-linear">
      <div className="cssContainer space-y-10">
        <header>
          <div className="text-center space-y-4">
            <h3 className="text-white">Ready to Transform Your Workflow?</h3>
            <p className="text-white font-normal max-w-155 mx-auto ">
              Join thousands of professionals who are already using Digitools to
              work smarter. Start your free trial today.
            </p>
          </div>
        </header>

        <div className="cta space-y-4">
          <div className="flex gap-4 justify-center">
            <Button bg={true} linear={false} ctaLink={cta1Link}>
              Explore Products
            </Button>
            <Button
              bg={false}
              linear={false}
              borderWhite={true}
              ctaLink={cta2Link}
            >
              View Pricing
            </Button>
          </div>

          <p className="text-white text-center">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
