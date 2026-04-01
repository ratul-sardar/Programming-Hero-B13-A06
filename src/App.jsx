import Navbar from "./components/Navbar/Navbar";
import Hero from "./section/Hero/Hero";
import SocialProof from "./section/SocialProof/SocialProof";
import HowToStart from "./section/HowToStart/HowToStart";
import Cta from "./section/Cta/Cta";
import Footer from "./components/Footer/Footer";
import Pricing from "./section/Pricing/Pricing";
import Products from "./section/Products/Products";
import { use, useState } from "react";

// Fetch Products
const productUrl = "/product.json";
async function getProduct(url) {
  const res = await fetch(url);
  const data = res.json();

  return data;
}
// Calling Api
const productPromise = getProduct(productUrl);

// Main component
export default function App() {
  // Getting the products
  const productData = use(productPromise);

  // Cart Data
  let [cart, setCart] = useState([]);

  function addProduct(product) {
    if (!cart.find((item) => item.id === product.id))
      setCart([...cart, product]);
  }

  return (
    <>
      <header className="bg-white/72 backdrop-blur-sm border-b border-gray shadow-xm sticky top-0 z-99">
        <Navbar cart={cart}></Navbar>
      </header>
      <main className="">
        <Hero></Hero>
        <SocialProof></SocialProof>
        <Products
          productData={productData}
          cart={cart}
          addProduct={addProduct}
        ></Products>
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
