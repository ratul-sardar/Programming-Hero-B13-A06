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
            : ProductCart(cart)}
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
function ProductCart(cart) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm p-6">
        {/* Header */}
        <h2 className="text-xl font-bold text-gray-900 mb-5">Your Cart</h2>

        {/* Items */}
        <div className="flex flex-col gap-3">
          {cart.length === 0 ? (
            <p className="text-sm text-gray-400 text-center py-8">
              Your cart is empty.
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-gray-50 rounded-2xl px-4 py-4"
              >
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                  {item.icon}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500">${item.price}</p>
                </div>

                {/* Remove */}
                <button className="text-sm font-medium text-pink-500 hover:text-pink-600 transition-colors duration-150 cursor-pointer shrink-0">
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {/* Total */}
        <div className="flex items-center justify-between mt-6 mb-4 px-1">
          <span className="text-sm text-gray-500">Total:</span>
          <span className="text-2xl font-extrabold text-gray-900">$90</span>
        </div>

        {/* CTA */}
        <button
          className="w-full py-4 rounded-2xl text-white font-semibold text-sm tracking-wide active:scale-[0.99] transition-all duration-200 cursor-pointer"
          style={{
            background: "linear-gradient(90deg, #6d28d9 0%, #9333ea 100%)",
          }}
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
}
