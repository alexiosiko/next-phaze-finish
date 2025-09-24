"use client";
export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center py-8 px-4 bg-neutral-900 text-neutral-100 mt-auto">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-xl font-semibold mb-4 text-[#CD9B6A]">Next Phaze Finish</h3>
        <p className="text-neutral-300 mb-4 max-w-2xl">
          Transforming floors into beautiful, lasting works of craftsmanship. 
          Quality workmanship that stands the test of time.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6 text-sm">
          <a href="tel:2368697404" className="text-[#CD9B6A] hover:underline font-semibold">
            📞 (236) 869-7404
          </a>
          <span className="hidden sm:inline text-neutral-400">|</span>
          <a href="mailto:artyom1025@gmail.com" className="text-[#CD9B6A] hover:underline">
            ✉️ artyom1025@gmail.com
          </a>
        </div>
        
        <div className="flex justify-center gap-6 mb-6">
          <a href="#" className="hover:text-[#CD9B6A] transition-colors">Facebook</a>
          <a href="#" className="hover:text-[#CD9B6A] transition-colors">Instagram</a>
          <a href="#" className="hover:text-[#CD9B6A] transition-colors">Yelp</a>
          <a href="#" className="hover:text-[#CD9B6A] transition-colors">Google Reviews</a>
        </div>
        
        <div className="border-t border-neutral-700 pt-4">
          <p className="text-sm text-neutral-400">
            © 2024 Next Phaze Finish | All rights reserved | Quality flooring solutions built to last
          </p>
        </div>
      </div>
    </footer>
  );
}