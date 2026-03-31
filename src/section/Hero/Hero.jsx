import Button from "../../components/Button/Button";
import { CiPlay1 } from "react-icons/ci";
import banner from "../../assets/banner.png";

const WatchDemoButtonLink = "#";
const ExploreProductsButtonLink = "#";

export default function Hero() {
  return (
    <>
      <section id="HeroSection" className="">
        <div className="cssContainer grid items-center grid-cols-12 gap-8 lg:gap-15">
          {/* Content Panel*/}
          <div className="col-span-12 md:col-span-7">
            {/* Content*/}
            <div className="space-y-4">
              {/* Animated Badge*/}
              <div className="rounded-full px-4 py-2 flex items-center gap-2 bg-purple/10 w-fit">
                {/* Ping animation*/}
                <span className="relative flex size-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple opacity-75"></span>
                  <span className="relative inline-flex size-3 rounded-full bg-purple"></span>
                </span>

                <p className="text-transparent bg-clip-text bg-main-linear">
                  New: AI-Powered Tools Available
                </p>
              </div>

              {/* Heading*/}
              <h1 className="">Supercharge Your Digital Workflow</h1>

              {/* Body Text*/}
              <p className="">
                Access premium AI tools, design assets, templates, and
                productivity software—all in one place. Start creating faster
                today. Explore Products
              </p>
            </div>

            {/* Cta*/}
            <div className="flex flex-col md:flex-row gap-4 mt-8 ">
              <Button
                bg={true}
                linear={true}
                ctaLink={ExploreProductsButtonLink}
              >
                Explore Products
              </Button>
              <Button ctaLink={WatchDemoButtonLink}>
                <CiPlay1 />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Image Panel*/}
          <div className="col-span-12 md:col-span-5">
            <img src={banner} alt="Banner Image" className="w-full h-auto" />
          </div>
        </div>
      </section>
    </>
  );
}
