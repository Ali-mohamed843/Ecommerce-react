export default function AboutUsVisionaries() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Visionaries Behind the Brand
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Founded by Julian Thorne and Eliana Vance, LuxeRetail was born
              from a shared frustration with the disposable nature of modern
              fashion. Together, they sought to create a brand that stands for
              something permanent.
            </p>
            <button className="bg-[#0f5e3f] hover:bg-[#0a4a30] text-white px-8 py-3 rounded-md font-medium transition-colors duration-200 cursor-pointer">
              Read Our Story
            </button>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <div className="relative h-[400px] w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 rounded-lg shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                  alt="Julian Thorne"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="mt-4 text-center">
                <h4 className="text-xl font-bold text-gray-900">
                  Julian Thorne
                </h4>
                <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">
                  Co-Founder & CEO
                </p>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="relative h-[400px] w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 rounded-lg shadow-lg mt-8 md:mt-12">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                  alt="Eliana Vance"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="mt-4 text-center">
                <h4 className="text-xl font-bold text-gray-900">
                  Eliana Vance
                </h4>
                <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">
                  Co-Founder & Creative Director
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
