import Navbar from "./components/Navbar/Navbar";
import Hero from "./section/Hero/Hero";

function App() {
  return (
    <>
      <header className="border-b border-gray shadow-xm">
        <Navbar></Navbar>
      </header>
      <main className="cssContainer">
        <Hero></Hero>
      </main>
      <footer className=""></footer>
    </>
  );
}

export default App;
