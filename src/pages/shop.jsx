import { useState, useMemo } from "react";
import data from "../../products.json";
import ShopFilters from "../components/Shop/ShopFilters";
import ProductGrid from "../components/Shop/ProductGrid";

export default function Shop() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [sortBy, setSortBy] = useState("default");

  const allCategories = [...new Set(data.products.map((p) => p.category))];

  const filteredProducts = useMemo(() => {
    let result = data.products;

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    if (sortBy === "price-asc") result.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc") result.sort((a, b) => b.price - a.price);
    else if (sortBy === "name") result.sort((a, b) => a.name.localeCompare(b.name));

    return result;
  }, [selectedCategories, priceRange, sortBy]);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-semibold text-primary mb-8">Shop All</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <ShopFilters
          categories={allCategories}
          selectedCategories={selectedCategories}
          onToggleCategory={toggleCategory}
          priceRange={priceRange}
          onPriceChange={setPriceRange}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}
