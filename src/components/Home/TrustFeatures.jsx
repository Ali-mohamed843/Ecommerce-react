

export default function TrustFeatures() {
  const features = [
    { icon: "local_shipping", title: "Complimentary Shipping", desc: "On all orders over $150" },
    { icon: "verified", title: "Authenticity Guaranteed", desc: "100% genuine premium goods" },
    { icon: "lock", title: "Secure Checkout", desc: "Encrypted payment protection" },
    { icon: "support_agent", title: "Dedicated Concierge", desc: "24/7 personal support" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 pb-10 border-b border-outline-variant">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-secondary text-4xl mb-2">{feature.icon}</span>
            <h5 className="text-sm font-semibold text-primary mb-1">{feature.title}</h5>
            <p className="text-sm text-on-surface-variant">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
