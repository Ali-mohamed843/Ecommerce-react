export default function AboutUsHero() {
  return (
    <section className="relative w-full h-[85vh] md:h-[90vh] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
        alt="LuxeRetail Heritage Workshop"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 flex flex-col justify-center h-full">
        <div className="max-w-3xl">
          <span className="inline-block text-[#65D3A5] px-3 py-1 text-lg font-bold tracking-[0.1em] uppercase mb-4 md:mb-6">
            Est. 1994
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6">
            Our Heritage of Quiet Authority
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl font-light">
            LuxeRetail began with a singular vision: to strip away the noise of
            fast fashion and return to the structural integrity of true
            craftsmanship. For three decades, we have defined the intersection
            of corporate precision and modern elegance.
          </p>
        </div>
      </div>
    </section>
  );
}
