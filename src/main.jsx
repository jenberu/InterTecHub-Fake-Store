


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CartProvider } from './context/CartContext'
import { WishlistProvider } from './context/WishlistContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <WishlistProvider>
      <App />

      </WishlistProvider>
    </CartProvider>
  </StrictMode>,
)
