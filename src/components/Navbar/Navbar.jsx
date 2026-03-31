import brandImage from "../../assets/Brand/DigiTools.png";
import Button from "../Button/Button";

const NavLinks = [
  { name: "Products", url: "#" },
  { name: "Features", url: "#" },
  { name: "Pricing", url: "#" },
  { name: "Testimonials", url: "#" },
  { name: "FAQ", url: "#" },
];

export default function Navbar() {
  return (
    <nav className="cssContainer py-4">
      <div className="navbar p-0">
        <div className="navbar-start">
          {/* Mobile Nav*/}
          <div className="dropdown">
            {/* Hamburger Button*/}
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden p-0 pr-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>

            {/* Mobile Links*/}
            <ul
              tabIndex="-1"
              className="space-y-4 dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {NavLinks.map((link, index) => {
                return (
                  <li key={index}>
                    <a
                      href={link.url}
                      className="font-semibold text-left text-text-black hover:text-purple"
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Nav Logo*/}
          <div className="navbar-start">
            <img src={brandImage} alt="Brand Logo" className="w-45 h-auto" />
          </div>
        </div>

        {/* Desktop Navbar*/}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-8 px-1">
            {NavLinks.map((link, index) => {
              return (
                <li key={index}>
                  <a
                    href={link.url}
                    className="font-semibold text-left text-text-black hover:text-purple"
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Navbar Cta*/}
        <div className="navbar-end">
          <a className="btn">Button</a>
          <Button bg={true} linear={true}>
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}
