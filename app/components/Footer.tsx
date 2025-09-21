"use client";
export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center py-6 px-4 bg-neutral-900 text-neutral-100 mt-auto">
      <div className="flex gap-4 mb-2">
        <a href="#" className="hover:underline">Yelp</a>
        <a href="#" className="hover:underline">Instagram</a>
        <a href="#" className="hover:underline">YouTube</a>
      </div>
      <p className="text-xs">© 2024 Tully Spagnoli Flooring | All rights reserved</p>
    </footer>
  );
}