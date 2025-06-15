import Home from "./pages/Home"
import { Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Nav"
import "./styles/global.css"
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<h1>About</h1>} />
      <Route path="/contact" element={<h1>Contact</h1>} />
      <Route path="/cart" element={<h1>Cart</h1>} />
      <Route path="/checkout" element={<h1>Checkout</h1>} />
      <Route path="/additional-services" element={<h1>Checkout</h1>} />
      <Route path="/request-product" element={<h1>Checkout</h1>} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
