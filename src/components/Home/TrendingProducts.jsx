import data from "../../../products.json";
import { getProductImage } from "../../utils/productImages";

export default function TrendingProducts() {
  const products = data.products.filter((p) => p.section === "trendingNow");

  return (
    <section className="bg-surface-container-low py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-semibold text-primary">Trending Now</h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-2 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-surface-container-lowest rounded-xl p-1 border border-outline-variant transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={getProductImage(product)}
                  alt={product.name}
                />
                {product.badge ? (
                  <span className="absolute top-2 left-2 bg-secondary text-on-secondary px-2 py-1 text-[10px] font-bold rounded uppercase">
                    {product.badge}
                  </span>
                ) : (
                  <span className="absolute top-2 right-2 bg-surface-container-lowest text-primary p-1 rounded-full shadow-md hover:text-secondary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">favorite</span>
                  </span>
                )}
              </div>
              <div className="px-2 pb-2">
                <p className="text-xs text-on-surface-variant mb-1">{product.category}</p>
                <h4 className="text-sm font-semibold text-primary mb-1">{product.name}</h4>
                <p className="text-2xl font-semibold text-secondary">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
