# ECommerce Store 

**Short description:** A small e-commerce demo built with React, **@tanstack/react-query** for server state and **@reduxjs/toolkit** for local cart state. Clean separation of concerns and modern tooling make it easy to extend and deploy.

---

## Highlights 

- **Best highlight — Clear separation of server vs local UI state** 
  - Server data (products) is fetched and cached by `React Query` (`src/functions/queryfn.js`).
  - UI/cart state is handled by `Redux Toolkit` (`src/functions/CartSlice.js`), keeping it synchronous and serializable.
  - This reduces boilerplate and improves performance vs storing everything in component state or a single global store.

## How this differs from typical React practice 

- Typical tutorials often place fetch logic directly in components or store all data in one global store. This project:
  - Encapsulates network logic into small functions (`fetchProducts`, `fetchProductById`, `postproduct`).
  - Uses React Query for retries, caching, and background updates rather than manual fetch + custom caching.
  - Uses RTK slices for predictable local state management instead of hand-rolled reducers and action types.

## Quick start 

1. Install: `npm install`
2. Dev server: `npm start`
3. Build: `npm run build`

---
