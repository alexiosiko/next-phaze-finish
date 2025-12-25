"use client";
export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center py-8 px-4 bg-[color:var(--background)] text-[color:var(--foreground)] mt-auto border-t border-[color:var(--border)]">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-xl font-semibold mb-4 text-[color:var(--accent)]">Next Phaze Finish</h3>
        <p className="text-neutral-300 mb-4 max-w-2xl">
          We restore and install great-looking floors that stand up to everyday life — done with care, honesty, and pride.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6 text-sm">
          <a href="tel:2368697404" className="text-[color:var(--accent)] hover:underline font-semibold">
            📞 (236) 869-7404
          </a>
          <span className="hidden sm:inline text-neutral-400">|</span>
          <a href="mailto:nextphazefinish@gmail.com" className="text-[color:var(--accent)] hover:underline">
            ✉️ nextphazefinish@gmail.com
          </a>
        </div>
        
		
        {/* <div className="flex justify-center gap-6 mb-6">
          <a href="#" className="text-neutral-500 hover:text-[color:var(--accent)] transition-colors">Facebook</a>
          <a href="#" className="text-neutral-500 hover:text-[color:var(--accent)] transition-colors">Instagram</a>
          <a href="#" className="text-neutral-500 hover:text-[color:var(--accent)] transition-colors">Yelp</a>
        </div> */}
        
        <div className="border-t border-neutral-700 pt-4">
          <p className="text-sm text-neutral-400">
            © 2025 Next Phaze Finish | All rights reserved | Quality flooring solutions built to last
          </p>
        </div>
      </div>
    </footer>
  );
}
