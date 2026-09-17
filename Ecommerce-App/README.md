# Marketplace — React E-Commerce App

Simple e-commerce site built with React + Tailwind (via CDN, no build config needed for styling).
State management uses **only `useState` and `useEffect`** — no other hooks, no router library.
Page switching (Home / Products / Product Details / Cart / Contact) is done with plain `useState`
in `App.jsx`.

## Structure

```
src/
  main.jsx              entry point
  App.jsx                holds all shared state, fetches products, switches pages
  components/
    Navbar.jsx
    Footer.jsx
    ProductCard.jsx
    Stars.jsx
    CardSkeleton.jsx
  pages/
    Home.jsx              landing page
    Products.jsx           full catalog with search/filter/sort
    ProductDetails.jsx     single product page
    Cart.jsx                cart page
    Contact.jsx             contact form
```

## Run it

```bash
npm install
npm run dev
```

Then open the localhost URL Vite prints (usually http://localhost:5173).

Data comes live from https://fakestoreapi.com/products — no API key needed.
