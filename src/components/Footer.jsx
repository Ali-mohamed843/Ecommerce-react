

export default function Footer() {
  const sections = [
    {
      title: "Shop",
      links: ["New Arrivals", "Best Sellers", "Seasonal Collections", "Gift Cards"],
    },
    {
      title: "Support",
      links: ["Customer Service", "Track Your Order", "Returns & Exchanges", "Contact Us"],
    },
    {
      title: "Company",
      links: ["Company Info", "Sustainability", "Privacy Policy", "Terms of Service"],
    },
  ];

  return (
    <footer className="bg-surface w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 py-10 max-w-7xl mx-auto">
        <div className="flex flex-col space-y-4">
          <div className="text-2xl font-bold text-primary">LuxeRetail</div>
          <p className="text-sm text-on-surface-variant">Defining the future of premium retail through curated excellence and unparalleled service.</p>
          <div className="flex space-x-4">
            <a className="text-on-surface-variant hover:text-secondary transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
            <a className="text-on-surface-variant hover:text-secondary transition-colors" href="#"><span className="material-symbols-outlined">share</span></a>
          </div>
        </div>
        {sections.map((section) => (
          <div key={section.title} className="flex flex-col space-y-2">
            <h6 className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">{section.title}</h6>
            {section.links.map((link) => (
              <a key={link} className="text-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">{link}</a>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}
