

export default function Hero() {
  return (
    <section className="relative h-[600px] overflow-hidden bg-primary-container">
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-start">
        <div className="max-w-2xl text-white">
          <span className="bg-secondary text-on-secondary px-2 py-1 text-xs font-semibold rounded-full mb-4 inline-block uppercase tracking-widest">Summer Collection 2024</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">Define Your Signature Elegance</h1>
          <p className="text-lg md:text-xl mb-10 opacity-90">Curated premium essentials designed for the modern professional. Experience the pinnacle of luxury retail with effortless grace.</p>
          <div className="flex gap-4">
            <button className="bg-secondary text-on-secondary px-10 py-4 rounded-lg text-sm font-semibold tracking-wide hover:opacity-90 transition-all shadow-md">Shop The Collection</button>
            <button className="border border-white text-white px-10 py-4 rounded-lg text-sm font-semibold tracking-wide hover:bg-white hover:text-black transition-all">View Lookbook</button>
          </div>
        </div>
      </div>
    </section>
  );
}
