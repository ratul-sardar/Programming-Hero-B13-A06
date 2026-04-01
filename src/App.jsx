import Navbar from "./components/Navbar/Navbar";
import Hero from "./section/Hero/Hero";
import SocialProof from "./section/SocialProof/SocialProof";
import HowToStart from "./section/HowToStart/HowToStart";
import Cta from "./section/Cta/Cta";
import Footer from "./components/Footer/Footer";
import Pricing from "./section/Pricing/Pricing";

function App() {
  return (
    <>
      <header className="bg-white/72 backdrop-blur-sm border-b border-gray shadow-xm sticky top-0 z-99">
        <Navbar></Navbar>
      </header>
      <main className="">
        <Hero></Hero>
        <SocialProof></SocialProof>
        <HowToStart></HowToStart>
        <Pricing></Pricing>
        <Cta></Cta>
      </main>
      <footer className="bg-text-black text-white w-full">
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
