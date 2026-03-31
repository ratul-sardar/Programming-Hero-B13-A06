import Navbar from "./components/Navbar/Navbar";
import Hero from "./section/Hero/Hero";
import SocialProof from "./section/SocialProof/SocialProof";
import HowToStart from "./section/HowToStart/HowToStart";

function App() {
  return (
    <>
      <header className="border-b border-gray shadow-xm">
        <Navbar></Navbar>
      </header>
      <main className="">
        <Hero></Hero>
        <SocialProof></SocialProof>
        <HowToStart></HowToStart>
      </main>
      <footer className=""></footer>
    </>
  );
}

export default App;
