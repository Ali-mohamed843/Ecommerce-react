import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import Footer from "./components/UI/Footer";
import Shop from "./pages/Shop";
import AboutUs from "./pages/AboutUs";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-background text-on-surface min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/products/:id" element={<ProductDetails />} />{" "}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
