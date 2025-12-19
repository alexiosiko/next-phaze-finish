export default function ClientsSection() {
  return (
    <section className="w-full flex flex-col items-center py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 section-title text-[color:var(--foreground)]">Who We Serve</h2>
        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 mb-8">
          Next Phaze Finish proudly serves homeowners, contractors, and businesses throughout the area with personalized flooring solutions.
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          {[
            "Homeowners", "Contractors", "Real Estate Agents", "Property Managers",
            "Interior Designers", "Architects", "Commercial Spaces", "Businesses"
          ].map((client, index) => (
            <div key={client} className="p-3 sm:p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg hover:shadow-md transition-shadow">
              <p className="font-medium text-sm sm:text-base text-neutral-800 dark:text-neutral-200">{client}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-[color:var(--accent)]/10 rounded-lg">
          <h3 className="text-lg sm:text-xl font-semibold mb-3 text-[color:var(--accent)]">Personalized Service for Every Project</h3>
          <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Whether you're a homeowner looking to upgrade a single room or a contractor managing multiple properties, 
            you'll work directly with our experienced team. We understand that every project is unique, and we're 
            committed to delivering results that exceed your expectations.
          </p>
        </div>
      </div>
    </section>
  );
}