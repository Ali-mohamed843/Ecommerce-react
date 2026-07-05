import HomeHero from "../components/Home/HomeHero";
import CategoriesGrid from "../components/Home/CategoriesGrid";
import PromotionalBanner from "../components/Home/PromotionalBanner";
import TrendingProducts from "../components/Home/TrendingProducts";
import TrustFeatures from "../components/Home/TrustFeatures";

export default function Home() {
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
