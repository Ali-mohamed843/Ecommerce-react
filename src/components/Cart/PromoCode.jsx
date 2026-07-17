import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { useRef } from "react";

export default function PromoCode() {
  const { voucher } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const voucherRef = useRef();

  function onApplyPromo(event) {
    event.preventDefault();

    const voucherCode = voucherRef.current.value.toUpperCase();

    dispatch(
      cartActions.applyVoucher({
        voucher: voucherCode,
      }),
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
      <p className="text-sm text-gray-900 font-medium mb-3">
        Have a promo code?
      </p>

      <form className="flex gap-2" onSubmit={onApplyPromo}>
        <input
          type="text"
          defaultValue={voucher.code || ""}
          ref={voucherRef}
          placeholder="Enter code"
          className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900"
        />

        <button
          type="submit"
          className="bg-black hover:bg-gray-800 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors"
        >
          Apply
        </button>
      </form>
    </div>
  );
}
