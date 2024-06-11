import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import kid_banner from "./assets/banner_kids.png";
import men_banner from "./assets/banner_mens.png";
import women_banner from "./assets/banner_women.png";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Product from './pages/Product';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
        <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
        <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/" element={<Shop />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
    </>
  );
}

export default App;
