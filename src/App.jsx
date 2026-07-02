import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoriesGrid from "./components/CategoriesGrid";
import TrendingProducts from "./components/TrendingProducts";
import PromotionalBanner from "./components/PromotionalBanner";
import TrustFeatures from "./components/TrustFeatures";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-background text-on-surface min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <CategoriesGrid />
        <TrendingProducts />
        <PromotionalBanner />
        <TrustFeatures />
      </main>
      <Footer />
    </div>
  );
}

export default App;
