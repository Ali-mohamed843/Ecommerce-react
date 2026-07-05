import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoriesGrid from "./components/CategoriesGrid";
import TrendingProducts from "./components/TrendingProducts";
import PromotionalBanner from "./components/PromotionalBanner";
import TrustFeatures from "./components/TrustFeatures";
import Footer from "./components/Footer";
import Shop from "./pages/shop";

function Home() {
  return (
    <main>
      <Hero />
      <CategoriesGrid />
      <TrendingProducts />
      <PromotionalBanner />
      <TrustFeatures />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="bg-background text-on-surface min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
