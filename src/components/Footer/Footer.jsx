// Navigation Links

const product = [
  { name: "Features", link: "#" },
  { name: "Pricing", link: "#" },
  { name: "Templates", link: "#" },
  { name: "Integrations", link: "#" },
];

const company = [
  { name: "About", link: "#" },
  { name: "Blog", link: "#" },
  { name: "Careers", link: "#" },
  { name: "Press", link: "#" },
];

const resources = [
  { name: "Documentation", link: "#" },
  { name: "Help Center", link: "#" },
  { name: "Community", link: "#" },
  { name: "Contact", link: "#" },
];

const legal = [
  { name: "Privacy Policy", link: "#" },
  { name: "Terms of Service", link: "#" },
  { name: "Cookies", link: "#" },
];

// Social Media Links

// Main component

export default function Footer() {
  return (
    <div className="cssContainer pb-0 text-white">
      {/* Top section */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
        {/* Brand */}
        <div className="lg:w-72 shrink-0">
          <span className="text-3xl font-extrabold  tracking-tight">
            DigiTools
          </span>
          <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        {/* Nav columns */}
        <div className="flex flex-1 flex-wrap gap-10 lg:justify-end">
          {/* Product */}
          <div className="flex flex-col gap-3 min-w-30 ">
            <span className="text-sm font-semibold text-white mb-1">
              Product
            </span>
            {product.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="text-sm text-white/60 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3 min-w-30">
            <span className="text-sm font-semibold text-white mb-1">
              Company
            </span>
            {company.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="text-sm text-white/60 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-3 min-w-35">
            <span className="text-sm font-semibold text-white mb-1">
              Resources
            </span>
            {resources.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="text-sm text-white/60 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4 min-w-30">
            <span className="text-sm font-semibold text-base-content mb-1">
              Social Links
            </span>
            <div className="flex gap-3">
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-base-content flex items-center justify-center text-base-300 hover:opacity-80 transition-opacity duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-base-content flex items-center justify-center text-base-300 hover:opacity-80 transition-opacity duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="#"
                aria-label="X"
                className="w-10 h-10 rounded-full bg-base-content flex items-center justify-center text-base-300 hover:opacity-80 transition-opacity duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col py-10 sm:flex-row justify-between items-center gap-4">
        <span className="text-sm text-white/50">
          © 2026 Digitools. All rights reserved.
        </span>
        <div className="flex gap-6">
          {legal.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-sm text-white/50 hover:text-white transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
