import { useState } from "react";
import ProductCard from "../../components/Cards/ProductCard";

export default function Products({ productData, cart, addProduct }) {
  let [Tab, setTab] = useState("product");

  function handleTab(tab) {
    setTab(tab);
  }

  return (
    <>
      <section id="pricing" className="">
        <div className="cssContainer">
          <header className="text-center mb-10 space-y-4">
            <h2 className="">Premium Digital Tools</h2>
            <p className="max-w-135 mx-auto">
              Choose from our curated collection of premium digital products
              designed to boost your productivity and creativity.
            </p>

            {/* Tab switching buttons*/}
            <div className="w-fit mx-auto rounded-full border border-base-300 shadow-xm shadow-base-300/20 p-1 flex">
              <button
                className={`btn rounded-full ${Tab === "product" ? "bg-main-linear text-white" : "btn-outline border-none hover:bg-transparent"}  `}
                onClick={() => handleTab("product")}
              >
                Products
              </button>
              <button
                className={`btn rounded-full ${Tab === "product" ? "btn-outline border-none hover:bg-transparent" : "bg-main-linear text-white"}  `}
                onClick={() => handleTab("tab")}
              >
                Cart ({cart.length})
              </button>
            </div>
          </header>

          {/* Cards*/}
          {Tab === "product"
            ? ProductList(productData, addProduct)
            : ProductCart()}
        </div>
      </section>
    </>
  );
}

// Product List
function ProductList(productData, addProduct) {
  return (
    <div className="grid md:grid-col-2 lg:grid-cols-3 items-center justify-center gap-8">
      {productData.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addProduct={addProduct}
        ></ProductCard>
      ))}
    </div>
  );
}

// Product Cart
function ProductCart() {
  return (
    <>
      <h1>hi</h1>
    </>
  );
}
