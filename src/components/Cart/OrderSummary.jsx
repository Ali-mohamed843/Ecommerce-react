import OrderSummaryCard from "./OrderSummaryCard";
import PromoCode from "./PromoCode";

export default function OrderSummary() {
  return (
    <div className="lg:col-span-1 space-y-6">
      <OrderSummaryCard />
      <PromoCode />
    </div>
  );
}
