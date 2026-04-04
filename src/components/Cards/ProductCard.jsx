import { Check } from "lucide-react";
import { useState } from "react";

export default function Product({ product, addProduct }) {
  let [inCart, setInCart] = useState(false);

  // Set card status to added cart
  function setToCart() {
    setInCart(true);
  }

  // Remove card's "added to cart" status from added cart
  function removeFromCart() {
    setInCart(false);
  }

  // Destructuring the props
  let {
    id = 8,
    name = "Invoice & Billing Manager",
    description = "Create invoices, track payments, and manage client billing efficiently.",
    price = 10,
    period = "monthly",
    tag = "best seller",
    tagType = "best-seller",
    features = [
      "Custom invoices",
      "Payment tracking",
      "Recurring billing",
      "Client management",
    ],
    icon = "credit-card",
  } = product;

  return (
    <>
      <div className="relative w-full rounded-3xl p-6 bg-white shadow-lg">
        {/* Tag badge */}
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${tagType === "best-seller" ? "bg-[#fef3c6] text-[#bb4d00] " : tagType === "popular" ? "bg-[#e1e7ff] text-purple " : tagType === "new" ? "bg-green-200 text-green-600" : ""} `}
          >
            {tag}
          </span>
        </div>

        {/* Icon */}
        <div className="w-15 h-15 rounded-full border border-gray/20 flex items-center justify-center mb-5">
          <img src={icon} alt="card icon" className="w-8 h-8" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 pr-16">{name}</h3>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed mb-5">
          {description}
        </p>

        {/* Price */}
        <div className="flex items-baseline gap-1 mb-5">
          <span className="text-4xl font-extrabold text-gray-900">
            ${price}
          </span>
          <span className="text-sm text-gray-500">/{period}</span>
        </div>

        {/* Features */}
        <ul className="flex flex-col gap-2.5 mb-7">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2.5 text-sm text-gray-700"
            >
              <span className="text-green-500">
                <Check size={20} />
              </span>
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          className={`w-full py-3.5 rounded-full ${inCart ? "bg-green-500" : "bg-main-linear"}  text-white text-[1rem] font-bold  transition-all duration-200 cursor-pointer`}
          onClick={() => {
            addProduct(product);
            setToCart();
          }}
        >
          {inCart ? "Added To Cart" : "Buy Now"}
        </button>
      </div>
    </>
  );
}
