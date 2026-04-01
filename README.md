🛍️ Digital Tools Buying Website

A modern and responsive digital tools marketplace built with React. This project allows users to browse digital products, add them to a cart, and manage purchases with a smooth and interactive UI experience.

📌 Project Overview

This is a fully responsive eCommerce-style web application where users can explore various digital tools, view product details, and manage a shopping cart. The project follows a structured UI based on Figma design and includes dynamic state management for cart operations.

🚀 Live Links
🔗 GitHub Repository: https://github.com/ratul-sardar/Programming-Hero-B13-A06
🌐 Live Site: https://digital-tools-project-b13.netlify.app/
⚙️ Technologies Used
React.js
Tailwind CSS
DaisyUI
JavaScript (ES6+)
React-Toastify
JSON (for product data)
✨ Key Features
🛒 1. Dynamic Cart System
Add products to cart instantly
Remove individual items from cart
Cart count updates in navbar in real-time
"Proceed to Checkout" clears the cart completely
🔄 2. Product & Cart Toggle System
Toggle between Products and Cart views
Default view shows all products
Cart initially displays an empty message
🔔 3. Toast Notifications
Integrated React-Toastify for:
Add to cart alerts
Remove product alerts
Checkout confirmation
🧩 Core Functionalities
📦 Display products in a 3-column responsive layout
🃏 Product cards include:
Name, Description, Price, Period
Tag (Popular, New, Best Seller)
Features list
Icon
Buy Now button
🛒 Cart section includes:
Product Name, Icon, Price
Remove button
Checkout button
📊 Stats, Pricing, Steps, Banner & Footer sections designed based on Figma
📱 Fully responsive for mobile, tablet, and desktop
📁 JSON Data Structure

Each product includes:

{
    "id": 1,
    "name": "AI Resume Builder Pro",
    "description": "Create professional, ATS-friendly resumes using AI-powered suggestions and modern templates.",
    "price": 19,
    "period": "one-time",
    "tag": "best seller",
    "tagType": "best-seller",
    "features": [
      "100+ templates",
      "ATS optimization",
      "Export to PDF",
      "AI content suggestions"
    ],
    "icon": "https://i.ibb.co.com/JW7KYXbW/writing-2327400-1.png"
  }
🎯 Optional Enhancements Implemented
✅ Cart count increases when clicking "Buy Now"
✅ Cart resets after checkout
✅ Button feedback: “Added to cart”
🧭 UI Sections Included
Navbar (with cart count)
Banner Section
Stats Section
Products Section
Cart Section
Steps Section
Pricing Section
Footer
📱 Responsive Design
Mobile-first approach
Optimized for all screen sizes
Clean and consistent layout across devices
📌 Project Rules Followed
✔️ No lorem ipsum used (all meaningful content)
✔️ Minimum 8 meaningful Git commits
✔️ Clean UI (no distracting color combinations)
✔️ Fully functional cart system
✔️ Proper component structure
🧪 Installation & Setup
# Clone the repository
git clone https://github.com/ratul-sardar/Programming-Hero-B13-A06.git

# Navigate to project folder
cd your-repo-name

# Install dependencies
bun install

# Start development server
bun run dev
🙌 Final Notes

This project demonstrates core React concepts including component-based architecture, state management, conditional rendering, and third-party package integration.
