import { getProductImage } from "../../utils/productImages";

export default function CheckoutOrderItem({ item }) {
  const { product, quantity, selectedColor, selectedSize } = item;

  return (
    <div className="flex gap-4 py-4">
      <div className="w-16 h-20 bg-gray-100 rounded-md overflow-hidden shrink-0">
        <img src={getProductImage(product)} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium text-gray-900 truncate">{product.name}</h4>
        <p className="text-xs text-gray-500 mt-0.5">
          {selectedColor.name} / {selectedSize}
        </p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-gray-500">Qty: {quantity}</span>
          <span className="text-sm font-semibold text-gray-900">${(product.price * quantity).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
