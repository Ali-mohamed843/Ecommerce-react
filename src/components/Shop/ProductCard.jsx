import { Link } from "react-router-dom";
import { getProductImage } from "../../utils/productImages";

export default function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.id}`}>
      <div className="group bg-surface-container-lowest rounded-xl p-1 border border-outline-variant transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-md">
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4">
          <img
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            src={getProductImage(product)}
            alt={product.name}
          />
          {product.badge && (
            <span className="absolute top-2 left-2 bg-secondary text-on-secondary px-2 py-1 text-[10px] font-bold rounded uppercase">
              {product.badge}
            </span>
          )}
          {product.originalPrice && (
            <span className="absolute top-2 right-2 bg-error text-on-error px-2 py-1 text-[10px] font-bold rounded">
              -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </span>
          )}
        </div>
        <div className="px-2 pb-2">
          <p className="text-xs text-on-surface-variant mb-1">
            {product.category}
          </p>
          <h4 className="text-sm font-semibold text-primary mb-1">
            {product.name}
          </h4>
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold text-secondary">
              ${product.price.toFixed(2)}
            </p>
            {product.originalPrice && (
              <p className="text-xs text-on-surface-variant line-through">
                ${product.originalPrice.toFixed(2)}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
