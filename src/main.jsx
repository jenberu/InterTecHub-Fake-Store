


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CartProvider } from './context/CartContext'
import { UserProvider } from './context/UserContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
    <CartProvider>
      <App />

    </CartProvider>
    </UserProvider>
    
  </StrictMode>,
)
