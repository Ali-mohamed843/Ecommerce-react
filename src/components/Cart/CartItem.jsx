import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { getProductImage } from "../../utils/productImages";

export default function CartItem({ item }) {
  const product = item.product;
  const dispatch = useDispatch();

  const handleQuantityChange = (newQuantity) => {
    dispatch(
      cartActions.editQuantity({ product: product, quantity: newQuantity }),
    );
  };

  const handleRemoveItem = (id) => {
    dispatch(cartActions.removeItem({ id }));
  };

  return (
    <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-lg border border-gray-200 shadow-sm">
      {/* Item Image */}
      <div className="w-full sm:w-28 h-28 shrink-0 bg-gray-100 rounded-md overflow-hidden">
        <img
          src={getProductImage(product)}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Item Details & Actions */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
          <div>
            <h3 className="text-lg font-medium text-gray-900">
              {product.name}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              {item.selectedColor.name}
            </p>
          </div>
          <p className="text-lg font-semibold text-gray-900">
            ${product.price.toFixed(2)}
          </p>
        </div>

        <div className="flex items-center justify-between mt-4 sm:mt-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-gray-100">
          {/* Quantity Selector */}
          <div className="flex items-center border border-gray-300 rounded-md bg-white">
            <button
              className="px-3 py-1.5 text-gray-500 hover:text-gray-900 transition-colors"
              onClick={() => handleQuantityChange(-1)}
            >
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
              </svg>
            </button>
            <span className="w-10 text-center text-sm font-medium text-gray-900">
              {item.quantity}
            </span>
            <button
              className="px-3 py-1.5 text-gray-500 hover:text-gray-900 transition-colors"
              onClick={() => handleQuantityChange(1)}
            >
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
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>

          {/* Remove Button */}
          <button
            className="flex items-center gap-1 text-red-500 hover:text-red-700 text-sm font-medium transition-colors"
            onClick={() => handleRemoveItem(product.id)}
          >
            {/* Trash Icon */}
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
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
