import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { cartActions } from "../store/cart-slice";
import { orderActions } from "../store/order-slice";
import FormInput from "../components/Checkout/FormInput";
import CheckoutSummary from "../components/Checkout/CheckoutSummary";

export default function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, totalPrice, shipping, tax, voucher } = useSelector((state) => state.cart);
  const [step, setStep] = useState(1);

  const [shippingForm, setShippingForm] = useState({
    firstName: "", lastName: "", email: "", address: "", city: "", state: "", zip: "", phone: "",
  });

  const [paymentForm, setPaymentForm] = useState({
    cardNumber: "", cardName: "", expiry: "", cvv: "",
  });

  const [errors, setErrors] = useState({});

  const taxAmount = totalPrice * tax;
  const total = totalPrice + shipping + taxAmount;

  const handleShippingChange = (field) => (e) => {
    setShippingForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handlePaymentChange = (field) => (e) => {
    let value = e.target.value;

    if (field === "cardNumber") {
      value = value.replace(/\D/g, "").slice(0, 16);
      value = value.replace(/(.{4})/g, "$1 ").trim();
    }

    if (field === "expiry") {
      value = value.replace(/\D/g, "").slice(0, 4);
      if (value.length > 2) value = value.slice(0, 2) + "/" + value.slice(2);
    }

    if (field === "cvv") {
      value = value.replace(/\D/g, "").slice(0, 4);
    }

    setPaymentForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  function validateShipping() {
    const newErrors = {};
    const required = ["firstName", "lastName", "email", "address", "city", "state", "zip"];
    required.forEach((field) => {
      if (!shippingForm[field].trim()) newErrors[field] = "Required";
    });
    if (shippingForm.email && !/\S+@\S+\.\S+/.test(shippingForm.email)) {
      newErrors.email = "Invalid email";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function validatePayment() {
    const newErrors = {};
    if (!paymentForm.cardNumber.replace(/\s/g, "")) newErrors.cardNumber = "Required";
    if (!paymentForm.cardName.trim()) newErrors.cardName = "Required";
    if (!paymentForm.expiry || paymentForm.expiry.length < 5) newErrors.expiry = "MM/YY";
    if (!paymentForm.cvv || paymentForm.cvv.length < 3) newErrors.cvv = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleNextStep(e) {
    e.preventDefault();
    if (validateShipping()) setStep(2);
  }

  function handlePlaceOrder(e) {
    e.preventDefault();
    if (!validatePayment()) return;

    dispatch(
      orderActions.placeOrder({
        items,
        shipping: shippingForm,
        payment: paymentForm,
        subtotal: totalPrice,
        shippingCost: shipping,
        tax: taxAmount,
        total,
        voucherCode: voucher.code,
      }),
    );

    dispatch(cartActions.emptyCart());
    navigate("/receipt");
  }

  if (items.length === 0) {
    return (
      <div className="bg-[#f8f9fa] min-h-screen py-20">
        <div className="container mx-auto px-4 max-w-xl text-center">
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-10">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                <circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Add items to your cart before checking out.</p>
            <Link
              to="/shop"
              className="inline-flex items-center px-6 py-3 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f8f9fa] min-h-screen py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center gap-3 mb-8">
          <Link to="/cart" className="text-gray-500 hover:text-gray-900 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" /><polyline points="12 19 5 12 12 5" />
            </svg>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Checkout</h1>
        </div>

        <div className="flex items-center gap-2 mb-8">
          <div className={`flex items-center gap-2 ${step >= 1 ? "text-black" : "text-gray-400"}`}>
            <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step >= 1 ? "bg-black text-white" : "bg-gray-200 text-gray-500"}`}>1</span>
            <span className="text-sm font-medium hidden sm:inline">Shipping</span>
          </div>
          <div className="w-12 h-px bg-gray-200" />
          <div className={`flex items-center gap-2 ${step >= 2 ? "text-black" : "text-gray-400"}`}>
            <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step >= 2 ? "bg-black text-white" : "bg-gray-200 text-gray-500"}`}>2</span>
            <span className="text-sm font-medium hidden sm:inline">Payment</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {step === 1 && (
              <form onSubmit={handleNextStep} className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 sm:p-8">
                <h2 className="text-lg font-bold text-gray-900 mb-6">Shipping Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormInput label="First Name" id="firstName" placeholder="John" value={shippingForm.firstName} onChange={handleShippingChange("firstName")} error={errors.firstName} />
                  <FormInput label="Last Name" id="lastName" placeholder="Doe" value={shippingForm.lastName} onChange={handleShippingChange("lastName")} error={errors.lastName} />
                  <FormInput label="Email" id="email" type="email" placeholder="john@example.com" value={shippingForm.email} onChange={handleShippingChange("email")} error={errors.email} className="sm:col-span-2" />
                  <FormInput label="Address" id="address" placeholder="123 Main St" value={shippingForm.address} onChange={handleShippingChange("address")} error={errors.address} className="sm:col-span-2" />
                  <FormInput label="City" id="city" placeholder="New York" value={shippingForm.city} onChange={handleShippingChange("city")} error={errors.city} />
                  <FormInput label="State" id="state" placeholder="NY" value={shippingForm.state} onChange={handleShippingChange("state")} error={errors.state} />
                  <FormInput label="ZIP Code" id="zip" placeholder="10001" value={shippingForm.zip} onChange={handleShippingChange("zip")} error={errors.zip} />
                  <FormInput label="Phone" id="phone" type="tel" placeholder="(555) 123-4567" value={shippingForm.phone} onChange={handleShippingChange("phone")} error={errors.phone} />
                </div>
                <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-100">
                  <Link to="/cart" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Back to Cart</Link>
                  <button type="submit" className="px-8 py-3 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                    Continue to Payment
                  </button>
                </div>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={handlePlaceOrder} className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 sm:p-8">
                <h2 className="text-lg font-bold text-gray-900 mb-6">Payment Details</h2>
                <div className="space-y-4">
                  <FormInput label="Name on Card" id="cardName" placeholder="John Doe" value={paymentForm.cardName} onChange={handlePaymentChange("cardName")} error={errors.cardName} />
                  <FormInput label="Card Number" id="cardNumber" placeholder="1234 5678 9012 3456" value={paymentForm.cardNumber} onChange={handlePaymentChange("cardNumber")} error={errors.cardNumber} />
                  <div className="grid grid-cols-2 gap-4">
                    <FormInput label="Expiry Date" id="expiry" placeholder="MM/YY" value={paymentForm.expiry} onChange={handlePaymentChange("expiry")} error={errors.expiry} />
                    <FormInput label="CVV" id="cvv" placeholder="123" value={paymentForm.cvv} onChange={handlePaymentChange("cvv")} error={errors.cvv} />
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mt-6 flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mt-0.5 shrink-0">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <p className="text-xs text-gray-500">Your payment is secured with 256-bit SSL encryption. We never store your card details.</p>
                </div>

                <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-100">
                  <button type="button" onClick={() => setStep(1)} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Back to Shipping</button>
                  <button type="submit" className="px-8 py-3 bg-[#006c49] hover:bg-[#005a3c] text-white text-sm font-medium rounded-lg transition-colors">
                    Place Order — ${total.toFixed(2)}
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="lg:col-span-1">
            <CheckoutSummary />
          </div>
        </div>
      </div>
    </div>
  );
}
