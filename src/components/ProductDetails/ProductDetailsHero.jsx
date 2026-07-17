import { useParams } from "react-router-dom";
import { useState } from "react";
import { getProductById } from "../../services/product-services";
import ProductImagesGrid from "./ProductImagesGrid";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

export default function ProductDetailsHero() {
  const { id } = useParams();
  const product = getProductById(id);

  const dispatch = useDispatch();

  // the productDetails used to save the user selections and render the UI and later send the backend API request to store the order in the DB
  const [productDetails, setProductDetails] = useState({
    selectedColor: product.colors[0],
    selectedSize: product.sizes[0],
    selectedQunatity: 1,
  });

  // Early return to prevent crashing if product doesn't exist
  if (!product) {
    return (
      <div className="container mx-auto py-20 text-center">
        Product not found.
      </div>
    );
  }

  // handling the color selection and storing it in productDetails
  function handleColorSelection(color) {
    setProductDetails((prev) => ({ ...prev, selectedColor: color }));
  }

  // handling the size selection and storing it in productDetails
  function handleSizeSelection(size) {
    setProductDetails((prev) => ({ ...prev, selectedSize: size }));
  }

  // handling the quantity selection and storing it in productDetails
  const handleQuantityChange = (value, action) => {
    let newQuantity;

    if (action === "change") {
      newQuantity = productDetails.selectedQunatity + value;
    } else {
      newQuantity = Number(value);
    }

    newQuantity = Math.max(1, Math.min(10, newQuantity));

    setProductDetails((prev) => ({
      ...prev,
      selectedQunatity: newQuantity,
    }));
  };

  function addProductToCartHandler() {
    dispatch(
      cartActions.addItem({
        product: product,
        quantity: productDetails.selectedQunatity,
        selectedColor: productDetails.selectedColor,
        selectedSize: productDetails.selectedSize,
      }),
    );
  }

  return (
    <>
      {/* Main Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
        <ProductImagesGrid images={product.images} />
        {/* Right Column: Details */}
        <div className="flex flex-col">
          {/* Badge & Title */}
          <div>
            <span className="inline-block text-[10px] md:text-xs font-bold tracking-widest text-[#0f5e3f] uppercase mb-2">
              {product.badge}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {product.name}
            </h1>
          </div>

          {/* Product Rate */}
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

          {/* Product Price */}
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
          {product.colors && product.colors[0] && (
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-semibold text-gray-900">
                  Color:{" "}
                  <span className="font-normal text-gray-600">
                    {productDetails.selectedColor?.name || "Select"}
                  </span>
                </span>
              </div>
              <div className="flex gap-3">
                {product.colors?.map((color) => {
                  const border =
                    productDetails.selectedColor?.hex === color.hex
                      ? color.hex
                      : "";
                  return (
                    <button
                      key={color.name}
                      className={`w-8 h-8 rounded-full ${border ? "border-2 ring-2 ring-offset-1" : ""} transition-all`}
                      style={{
                        backgroundColor: color.hex,
                        borderColor: border,
                        "--tw-ring-color": border,
                      }}
                      onClick={() => {
                        handleColorSelection(color);
                      }}
                    />
                  );
                })}
              </div>
            </div>
          )}

          {/* Size Selection */}
          {product.sizes && product.sizes[0] && (
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
                {product.sizes.map((size) => {
                  const isSelected = productDetails.selectedSize === size;

                  return (
                    <button
                      key={size}
                      className={`py-2.5 text-sm font-medium rounded border transition-all ${
                        isSelected
                          ? "border-gray-900 text-gray-900 bg-gray-50"
                          : "border-gray-200 text-gray-600 hover:border-gray-400 hover:text-gray-900"
                      }`}
                      onClick={() => {
                        handleSizeSelection(size);
                      }}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Add to Cart Controls */}
          <div className="flex gap-3 mb-8">
            <div className="flex items-center border border-gray-200 rounded-md bg-white">
              {/* Minus Icon (Inline SVG) */}
              <button
                className="px-3 py-2.5 text-gray-500 hover:text-gray-900 transition-colors"
                onClick={() => {
                  handleQuantityChange(-1, "change");
                }}
              >
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
                type="number"
                min={1}
                max={10} // TODO : later add the available quantity
                value={productDetails.selectedQunatity}
                onChange={(e) => {
                  handleQuantityChange(e.target.value, "set");
                }}
                className="w-12 text-center text-sm font-medium border-x border-gray-200 py-2.5 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              {/* Plus Icon (Inline SVG) */}
              <button
                className="px-3 py-2.5 text-gray-500 hover:text-gray-900 transition-colors"
                onClick={() => {
                  handleQuantityChange(1, "change");
                }}
              >
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
            <button
              className="flex-1 flex justify-center items-center gap-2 bg-[#0f5e3f] hover:bg-[#0a4a30] text-white py-3 rounded-md font-medium transition-colors duration-200 cursor-pointer"
              onClick={addProductToCartHandler}
            >
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
    </>
  );
}
