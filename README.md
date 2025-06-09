# Audiophile Ecommerce Website (Software Development Pathway Assessment)

This is an ecommerce website built with [Next.js](https://nextjs.org), featuring a modern UI, product catalog, shopping cart, and checkout flow. 

## Features

- Product listing and detail pages
- Shopping cart with quantity management
- Checkout process
- Responsive design for mobile, tablet, and desktop
- Modular and reusable React components

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm, yarn, pnpm, or bun

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/audiophile-ecommerce-website.git
cd audiophile-ecommerce-website
npm install
# or
yarn install
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Project Structure

```
audiophile-ecommerce-website/
├── public/
│   └── assets/                # Static images and assets
├── src/
│   ├── app/
│   │   ├── home/              # Home page route
│   │   │   └── page.jsx
│   │   └── ...                # Other routes
│   ├── components/            # Reusable React components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Home/
│   │   │   ├── Hero.jsx
│   │   │   ├── ProductMenu.jsx
│   │   │   └── AboutShowCase.jsx
│   │   └── ProductCategoryMenu.jsx
│   └── ...                    # Other source files
├── .gitignore
├── package.json
├── README.md
└── ...
```


