export default function AboutSection() {
  return (
    <section className="w-full flex flex-col items-center py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">About Next Phaze Finish</h2>
        
        <p className="text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 mb-8 sm:mb-12 leading-relaxed px-2 sm:px-0">
          At Next Phaze Finish, we specialize in transforming floors into beautiful, lasting works of craftsmanship. 
          Our mission is simple: deliver high-quality results that stand the test of time.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
          <div className="space-y-3 p-4 sm:p-0">
            <h3 className="text-base sm:text-lg font-semibold text-[#CD9B6A]">Quality Workmanship</h3>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">Every cut, seam, and finish is handled with precision and care.</p>
          </div>
          
          <div className="space-y-3 p-4 sm:p-0">
            <h3 className="text-base sm:text-lg font-semibold text-[#CD9B6A]">Transparent Pricing</h3>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">Clear estimates with no hidden costs or surprises.</p>
          </div>
          
          <div className="space-y-3 p-4 sm:p-0">
            <h3 className="text-base sm:text-lg font-semibold text-[#CD9B6A]">Personalized Service</h3>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">You work directly with our experienced craftsmen.</p>
          </div>
        </div>
      </div>
    </section>
  );
}