

import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import ProductDetails from './pages/productDetail/ProductDetail';
import Header from './components/header/Navbar';
import Footer from './components/footer/Footer';
import SignUp from './pages/signup/SignUp';
import Login from './pages/login/Login';
import CartPage from './pages/cart/Cart';
function App() {
  return (
      <Router>
          <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
           <Route path="/cart" element={<CartPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />


      
          </Routes>
          <Footer />
    </Router>
);
}

export default App
