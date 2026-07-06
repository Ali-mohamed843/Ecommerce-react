import HomeHero from "../components/Home/HomeHero";
import CategoriesGrid from "../components/Home/CategoriesGrid";
import PromotionalBanner from "../components/Home/PromotionalBanner";
import TrendingProducts from "../components/Home/TrendingProducts";
import TrustFeatures from "../components/Home/TrustFeatures";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Home() {
  useDocumentTitle("LuxeRetail | Home");

  return (
    <main>
      <HomeHero />
      <CategoriesGrid />
      <TrendingProducts />
      <PromotionalBanner />
      <TrustFeatures />
    </main>
  );
}
