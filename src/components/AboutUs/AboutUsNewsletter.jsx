export default function AboutUsNewsletter() {
  const cellWidth = 100;
  const cellHeight = 30;
  const lineWidth = 2;

  return (
    <section className="py-16 md:py-24 bg-[#f7f9fc]">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="bg-[#1e2633] rounded-2xl p-10 md:p-16 text-center shadow-lg relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: ` repeating-linear-gradient( 0deg, transparent, transparent ${cellHeight}px, rgba(255,255,255,0.04) ${cellHeight}px, rgba(255,255,255,0.04) ${cellHeight + lineWidth}px ), 
                                 repeating-linear-gradient( 90deg, transparent, transparent ${cellWidth}px, rgba(255,255,255,0.04) ${cellWidth}px, rgba(255,255,255,0.04) ${cellWidth + lineWidth}px )
    `,
            }}
          />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join the LuxeRetail Circle
            </h2>
            <p className="text-gray-300 mb-8 text-lg max-w-xl mx-auto">
              Subscribe to receive exclusive insights into our upcoming
              collections and heritage stories.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-md bg-[#2c3648] border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0f5e3f]"
                required
              />
              <button
                type="submit"
                className="bg-[#0f5e3f] hover:bg-[#0a4a30] text-white px-8 py-3 rounded-md font-medium transition-colors duration-200 cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
