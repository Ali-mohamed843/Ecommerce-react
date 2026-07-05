export default function AboutUsCraftingFuture() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Crafting the Future of Retail
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At LuxeRetail, we believe that luxury isn't about being noticed;
              it's about being remembered for the right reasons. Every stitch,
              every pixel, and every customer interaction is guided by our
              commitment to frictionless elegance.
            </p>
          </div>
          <div className="relative h-[350px] md:h-[450px] w-full overflow-hidden rounded-xl shadow-md group">
            <img
              src="https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=2070&auto=format&fit=crop"
              alt="Craftsmanship detail"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
