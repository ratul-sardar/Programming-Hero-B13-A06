import Navbar from "./components/Navbar/Navbar";
import Hero from "./section/Hero/Hero";
import SocialProof from "./section/SocialProof/SocialProof";

function App() {
  return (
    <>
      <header className="border-b border-gray shadow-xm">
        <Navbar></Navbar>
      </header>
      <main className="">
        <Hero></Hero>
        <SocialProof></SocialProof>
      </main>
      <footer className=""></footer>
    </>
  );
}

export default App;
