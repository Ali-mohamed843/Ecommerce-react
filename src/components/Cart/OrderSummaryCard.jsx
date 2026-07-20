import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function OrderSummaryCard() {
  const { totalPrice, shipping, tax } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const taxAmount = totalPrice * tax;
  const total = totalPrice + shipping + taxAmount;

  function onCheckout() {
    if (totalPrice === 0) return;
    navigate("/checkout");
  }

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span className="text-gray-900">${totalPrice}</span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Estimated Shipping</span>

          {shipping ? (
            <span className="text-gray-900">${shipping}</span>
          ) : (
            <span className="text-[#0f5e3f] font-medium">Free</span>
          )}
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Estimated Tax</span>
          <span className="text-gray-900">${taxAmount.toFixed(2)}</span>
        </div>
      </div>

      <hr className="my-4 border-gray-200" />

      <div className="flex justify-between text-lg font-bold text-gray-900 mb-6">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <button
        onClick={onCheckout}
        className="w-full bg-[#0f5e3f] hover:bg-[#0a4a30] text-white font-medium text-sm py-3.5 rounded-md uppercase tracking-wide transition-colors duration-200"
      >
        Proceed to Checkout
      </button>

      <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-500">
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
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>

        <span>Secure Checkout Guaranteed</span>
      </div>
    </div>
  );
}
