import { useSelector } from "react-redux";
import CartItem from "../components/Cart/CartItem";
import OrderSummary from "../components/Cart/OrderSummary";
import { Link } from "react-router-dom";

export default function Cart() {
  const { items: cartItems } = useSelector((state) => state.cart);

  return (
    <div className="bg-[#f8f9fa] min-h-screen py-12 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">
          Your Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column: Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <CartItem item={item} key={item.product.id} />
            ))}

            {/* Continue Shopping */}
            <Link
              to={"/shop"}
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors mt-4"
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
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Continue Shopping
            </Link>
          </div>

          {/* Right Column: Summary */}
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
