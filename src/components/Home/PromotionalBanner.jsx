export default function PromotionalBanner() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="bg-black text-white rounded-xl overflow-hidden flex flex-col md:flex-row items-center">
        <div className="p-10 md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">The Loyalty Circle</h2>
          <p className="text-base opacity-80 mb-6">Join our exclusive membership program and gain early access to seasonal launches, private sales, and personalized styling services tailored to your unique taste.</p>
          <button className="bg-secondary text-on-secondary px-10 py-4 rounded-lg text-sm font-semibold tracking-wide hover:scale-105 transition-transform">Join Now</button>
        </div>
        <div className="md:w-1/2 h-full min-h-[300px] w-full">
          <div
            className="w-full h-full bg-cover bg-center"
          />
        </div>
      </div>
    </section>
  );
}
