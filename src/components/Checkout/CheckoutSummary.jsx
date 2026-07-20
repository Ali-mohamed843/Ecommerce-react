import { useSelector } from "react-redux";
import CheckoutOrderItem from "./CheckoutOrderItem";

export default function CheckoutSummary() {
  const { items, totalPrice, shipping, tax, voucher } = useSelector((state) => state.cart);

  const taxAmount = totalPrice * tax;
  const total = totalPrice + shipping + taxAmount;

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 sticky top-24">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h2>

      <div className="divide-y divide-gray-100 max-h-64 overflow-y-auto mb-4">
        {items.map((item) => (
          <CheckoutOrderItem key={item.product.id} item={item} />
        ))}
      </div>

      <div className="space-y-2.5 text-sm border-t border-gray-200 pt-4">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span className="text-gray-900">${totalPrice.toFixed(2)}</span>
        </div>

        {voucher.code && (
          <div className="flex justify-between text-[#006c49]">
            <span>Voucher ({voucher.code})</span>
            <span className="font-medium">Applied</span>
          </div>
        )}

        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span className="text-gray-900">${shipping.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Tax</span>
          <span className="text-gray-900">${taxAmount.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex justify-between text-base font-bold text-gray-900 mt-4 pt-4 border-t border-gray-200">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
}
