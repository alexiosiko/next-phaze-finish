"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function GallerySection() {
  return (
    <motion.section
      className="w-full flex flex-col items-center py-12 px-4 bg-neutral-50 dark:bg-neutral-900"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="text-2xl font-semibold mb-4">Spagnoli Gallery</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-5xl">
        <div className="aspect-[4/3] w-full max-w-[220px] mx-auto"><Image src="/gallery1-placeholder.jpg" alt="Gallery 1" fill className="rounded object-cover" /></div>
        <div className="aspect-[4/3] w-full max-w-[220px] mx-auto"><Image src="/gallery2-placeholder.jpg" alt="Gallery 2" fill className="rounded object-cover" /></div>
        <div className="aspect-[4/3] w-full max-w-[220px] mx-auto"><Image src="/gallery3-placeholder.jpg" alt="Gallery 3" fill className="rounded object-cover" /></div>
        <div className="aspect-[4/3] w-full max-w-[220px] mx-auto"><Image src="/gallery4-placeholder.jpg" alt="Gallery 4" fill className="rounded object-cover" /></div>
      </div>
    </motion.section>
  );
}