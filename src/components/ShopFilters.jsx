export default function ShopFilters({
  categories,
  selectedCategories,
  onToggleCategory,
  priceRange,
  onPriceChange,
  sortBy,
  onSortChange,
}) {
  return (
    <aside className="w-full md:w-64 shrink-0">
      <div className="sticky top-24 space-y-8">
        <div>
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Category</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center gap-2 cursor-pointer text-sm text-on-surface-variant hover:text-primary transition-colors">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => onToggleCategory(category)}
                  className="accent-secondary rounded border-outline-variant"
                />
                {category}
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Price Range</h3>
          <div className="flex items-center gap-2 text-sm text-on-surface-variant">
            <input
              type="number"
              min="0"
              max="2000"
              value={priceRange[0]}
              onChange={(e) => onPriceChange([Number(e.target.value), priceRange[1]])}
              className="w-20 border border-outline-variant rounded px-2 py-1 focus:outline-none focus:border-primary"
            />
            <span>—</span>
            <input
              type="number"
              min="0"
              max="2000"
              value={priceRange[1]}
              onChange={(e) => onPriceChange([priceRange[0], Number(e.target.value)])}
              className="w-20 border border-outline-variant rounded px-2 py-1 focus:outline-none focus:border-primary"
            />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Sort By</h3>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="w-full border border-outline-variant rounded px-3 py-2 text-sm text-on-surface-variant focus:outline-none focus:border-primary bg-white"
          >
            <option value="default">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name">Name: A-Z</option>
          </select>
        </div>
      </div>
    </aside>
  );
}
