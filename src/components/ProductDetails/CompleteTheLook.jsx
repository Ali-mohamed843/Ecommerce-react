import ProductCard2 from "../UI/ProductCard2";
import { getProductImage } from "../../utils/productImages";

export default function CompleteTheLook({
  products = [],
  title = "Complete the Look",
  subtitle = "Curated essentials that pair perfectly with this piece.",
  viewAllHref = "#",
  onViewAllClick,
  onProductClick,
}) {
  return (
    <section>
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
        </div>

        {/* View All Link */}
        <a
          href={viewAllHref}
          onClick={onViewAllClick}
          className="text-sm font-semibold flex items-center gap-1 hover:text-[#0f5e3f] transition-colors"
        >
          View All
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard2
            key={product.id}
            image={getProductImage(product)}
            name={product.name}
            price={product.price}
            alt={product.name}
            onClick={() => onProductClick && onProductClick(product.id)}
          />
        ))}
      </div>
    </section>
  );
}
