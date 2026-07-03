


export default function CategoriesGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-3xl font-semibold text-primary">Curated Categories</h2>
          <p className="text-base text-on-surface-variant">Expertly selected collections for every facet of your life.</p>
        </div>
        <a className="text-primary text-sm font-semibold tracking-wide border-b border-primary hover:opacity-70 transition-opacity" href="#">Browse All</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-2 md:row-span-2 min-h-[300px] md:min-h-[500px] relative group overflow-hidden rounded-xl border border-outline-variant cursor-pointer">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: "url('https://picsum.photos/seed/mensfashion/800/600')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h3 className="text-2xl font-semibold mb-1">Men's Essentials</h3>
            <p className="text-sm opacity-80">Timeless pieces for the discerning gentleman.</p>
          </div>
        </div>
        <div className="min-h-[200px] md:min-h-[235px] relative group overflow-hidden rounded-xl border border-outline-variant cursor-pointer">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: "url('https://picsum.photos/seed/homedecor/400/600')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h3 className="text-sm font-semibold tracking-wide">Home Decor</h3>
          </div>
        </div>
        <div className="min-h-[200px] md:min-h-[235px] relative group overflow-hidden rounded-xl border border-outline-variant cursor-pointer">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: "url('https://picsum.photos/seed/techgadgets/400/600')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h3 className="text-sm font-semibold tracking-wide">Precision Tech</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
