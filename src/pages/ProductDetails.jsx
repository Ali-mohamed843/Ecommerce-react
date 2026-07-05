import { useParams } from "react-router-dom";
import { getProductById } from "../services/product-services";

export default function ProductDetailsMain() {
  const { id } = useParams();

  const product = getProductById(id);

  return (
    <main className="bg-white pt-8 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <nav
          className="flex text-sm text-gray-500 mb-8"
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center space-x-2">
            <li>
              <a href="#" className="hover:text-gray-800 transition-colors">
                Home
              </a>
            </li>
            <li>/</li>
            <li>
              <a href="#" className="hover:text-gray-800 transition-colors">
                {product.category}
              </a>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-medium">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
          <div className="flex flex-row gap-4">
            <div className="flex flex-col gap-3 w-16 sm:w-20 flex-shrink-0">
              {product.images.map((image, index) => (
                <button
                  key={image}
                  className={`relative aspect-[3/4] rounded-md overflow-hidden border-2 bg-gray-100 transition-all ${index === 0 ? "border-gray-900" : "border-transparent hover:border-gray-300"}`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail of ${image}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 relative bg-[#f8f9fa] rounded-lg overflow-hidden aspect-[3/4] flex items-center justify-center">
              <button
                className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors text-gray-700 z-10"
                aria-label="Add to wishlist"
              >
                {/* Heart Icon (Inline SVG) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
              <img
                src={product.images[0]}
                alt="Merino Wool Overcoat"
                className="w-5/6 h-5/6 object-contain mix-blend-multiply"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div>
              <span className="inline-block text-[10px] md:text-xs font-bold tracking-widest text-[#0f5e3f] uppercase mb-2">
                {product.badge}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
            </div>
            <div className="flex items-center gap-1 mb-4">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={
                      index < Math.round(product.rating) ? "" : "opacity-20"
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </span>
                ))}
              </div>
              <span className="text-sm font-medium text-gray-900 ml-1">
                {product.rating}
              </span>
              <span className="text-sm text-gray-500 ml-1">
                ({product.reviewCount} Reviews)
              </span>
            </div>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-3xl font-bold text-gray-900">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-gray-400 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
              {product.description}
            </p>

            <hr className="border-gray-200 mb-6" />

            {/* Color Selection */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-semibold text-gray-900">
                  Color:{" "}
                  <span className="font-normal text-gray-600">Onyx Black</span>
                </span>
              </div>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className="w-8 h-8 rounded-full border-2 ring-2 ring-offset-1 transition-all"
                    style={{
                      backgroundColor: color.hex,
                      borderColor: color.hex,
                      "--tw-ring-color": color.hex,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-semibold text-gray-900">
                  Size
                </span>
                <a
                  href="#"
                  className="text-xs text-gray-500 underline hover:text-gray-900 transition-colors"
                >
                  Size Guide
                </a>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`py-2.5 text-sm font-medium rounded border transition-all ${
                      size === "M"
                        ? "border-gray-900 text-gray-900 bg-gray-50"
                        : "border-gray-200 text-gray-600 hover:border-gray-400 hover:text-gray-900"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Controls */}
            <div className="flex gap-3 mb-8">
              <div className="flex items-center border border-gray-200 rounded-md bg-white">
                {/* Minus Icon (Inline SVG) */}
                <button className="px-3 py-2.5 text-gray-500 hover:text-gray-900 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
                <input
                  type="text"
                  defaultValue="1"
                  className="w-12 text-center text-sm font-medium border-x border-gray-200 py-2.5 focus:outline-none"
                />
                {/* Plus Icon (Inline SVG) */}
                <button className="px-3 py-2.5 text-gray-500 hover:text-gray-900 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
              </div>
              <button className="flex-1 flex justify-center items-center gap-2 bg-[#0f5e3f] hover:bg-[#0a4a30] text-white py-3 rounded-md font-medium transition-colors duration-200">
                {/* Shopping Bag Icon (Inline SVG) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                Add to Cart
              </button>
            </div>

            {/* Shipping Info */}
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-start gap-3">
                {/* Truck Icon (Inline SVG) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 text-gray-500"
                >
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
                <span>Free express shipping on orders over $250</span>
              </div>
              <div className="flex items-start gap-3">
                {/* Package Icon (Inline SVG) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 text-gray-500"
                >
                  <path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.78 0l-8-4a2 2 0 0 1-1.11-1.79V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"></path>
                  <polyline points="2.32 6.68 12 11.54 21.68 6.68"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="11.54"></line>
                </svg>
                <span>30-day hassle-free return policy</span>
              </div>
              <div className="flex items-start gap-3">
                {/* ShieldCheck Icon (Inline SVG) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 text-gray-500"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <polyline points="9 12 11 14 15 10"></polyline>
                </svg>
                <span>2-year limited manufacturer warranty</span>
              </div>
            </div>
          </div>
        </div>

        {/* Material & Care Accordion */}
        <div className="border-t border-b border-gray-200 py-6 mb-16">
          <button className="w-full flex justify-between items-center text-left">
            <span className="text-lg font-semibold text-gray-900">
              Material & Care
            </span>
            {/* ChevronDown Icon (Inline SVG) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-500"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>

        {/* Complete the Look Section */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Complete the Look
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Curated essentials that pair perfectly with this piece.
              </p>
            </div>
            <a
              href="#"
              className="text-sm font-semibold flex items-center gap-1 hover:text-[#0f5e3f] transition-colors"
            >
              View All
              {/* ArrowRight Icon (Inline SVG) */}
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
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Product Card 1 */}
            <div className="group">
              <div className="bg-[#efefef] rounded-lg overflow-hidden aspect-[4/5] mb-4 relative">
                <img
                  src="https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=600"
                  alt="Trousers"
                  className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-medium text-gray-900">
                Slim-Fit Wool Trousers
              </h3>
              <p className="text-sm text-gray-600 mt-1">$185.00</p>
            </div>

            {/* Product Card 2 */}
            <div className="group">
              <div className="bg-[#efefef] rounded-lg overflow-hidden aspect-[4/5] mb-4 relative">
                <img
                  src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=600"
                  alt="Oxford Shirt"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-medium text-gray-900">
                Essential Oxford Shirt
              </h3>
              <p className="text-sm text-gray-600 mt-1">$120.00</p>
            </div>

            {/* Product Card 3 */}
            <div className="group">
              <div className="bg-[#efefef] rounded-lg overflow-hidden aspect-[4/5] mb-4 relative">
                <img
                  src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=600"
                  alt="Chelsea Boots"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-medium text-gray-900">
                Italian Leather Chelsea Boots
              </h3>
              <p className="text-sm text-gray-600 mt-1">$345.00</p>
            </div>

            {/* Product Card 4 */}
            <div className="group">
              <div className="bg-[#efefef] rounded-lg overflow-hidden aspect-[4/5] mb-4 relative">
                <img
                  src="https://images.unsplash.com/photo-1596745759921-0ac5c10f8ae0?auto=format&fit=crop&q=80&w=600"
                  alt="Cashmere Scarf"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-medium text-gray-900">
                Ribbed Cashmere Scarf
              </h3>
              <p className="text-sm text-gray-600 mt-1">$185.00</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
