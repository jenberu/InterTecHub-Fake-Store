

import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import ProductDetails from './pages/productDetail/ProductDetail';
import Header from './components/header/Navbar';
import Footer from './components/footer/Footer';
import SignUp from './pages/signup/SignUp';
import Login from './pages/login/Login';
import CartPage from './pages/cart/Cart';
import CheckoutPage from './pages/checkout/Checkout';
import WishlistPage from './pages/wishlist/WishList';
import { WishlistProvider } from './context/WishlistContext';
import NotFound from './components/notfound/NotFound';
function App() {
  return (
    <Router>
      <WishlistProvider>

          <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
           <Route path="/cart" element={<CartPage />} />
          <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/whishlist" element={<WishlistPage />} />

        <Route path="*" element={<NotFound />} />



      
          </Routes>
        <Footer />
        </WishlistProvider>

    </Router>
);
}

export default App
