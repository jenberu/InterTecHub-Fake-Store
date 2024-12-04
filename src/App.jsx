

import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import ProductDetails from './pages/productDetail/ProductDetail';
import Cart from './pages/cart/Cart';
import Header from './components/header/Navbar';

function App() {
  return (
      <Router>
          <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
      
        </Routes>
    </Router>
);
}

export default App
