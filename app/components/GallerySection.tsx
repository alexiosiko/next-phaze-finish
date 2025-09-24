"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  { src: "/gallery1-placeholder.jpg", alt: "Next Phaze Finish Project 1" },
  { src: "/gallery2-placeholder.jpg", alt: "Next Phaze Finish Project 2" },
  { src: "/gallery3-placeholder.jpg", alt: "Next Phaze Finish Project 3" },
  { src: "/gallery4-placeholder.jpg", alt: "Next Phaze Finish Project 4" },
];

export default function GallerySection() {
  return (
    <motion.section
      className="w-full flex flex-col items-center py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-900"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Next Phaze Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-6xl">
        {galleryImages.map((image, index) => (
          <div key={index} className="aspect-[4/3] w-full max-w-sm mx-auto relative">
            <Image 
              src={image.src} 
              alt={image.alt} 
              fill 
              className="rounded-lg object-cover hover:scale-105 transition-transform duration-300" 
            />
          </div>
        ))}
      </div>
    </motion.section>
  );
}