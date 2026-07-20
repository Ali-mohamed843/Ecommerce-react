import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import data from "../../products.json";
import ShopFilters from "../components/Shop/ShopFilters";
import ProductGrid from "../components/Shop/ProductGrid";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Deals() {
  useDocumentTitle("LuxeRetail | Deals");

  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [sortBy, setSortBy] = useState("default");

  const dealProducts = useMemo(() => {
    return data.products.filter((p) => p.originalPrice != null);
  }, []);

  const allCategories = [...new Set(dealProducts.map((p) => p.category))];

  const filteredProducts = useMemo(() => {
    let result = dealProducts;
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1],
    );
    if (sortBy === "price-asc") result.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc")
      result.sort((a, b) => b.price - a.price);
    else if (sortBy === "name") result.sort((a, b) => a.name.localeCompare(b.name));
    else if (sortBy === "discount")
      result.sort(
        (a, b) =>
          (b.originalPrice - b.price) / b.originalPrice -
          (a.originalPrice - a.price) / a.originalPrice,
      );
    return result;
  }, [dealProducts, selectedCategories, priceRange, sortBy]);

  function toggleCategory(category) {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-primary mb-2">Deals</h1>
        <p className="text-on-surface-variant">
          {dealProducts.length} products on sale — save on premium essentials.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <ShopFilters
          categories={allCategories}
          selectedCategories={selectedCategories}
          onToggleCategory={toggleCategory}
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />
        <ProductGrid
          products={filteredProducts}
          onProductClick={(id) => navigate(`/products/${id}`)}
        />
      </div>
    </div>
  );
}
