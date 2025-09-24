"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const galleryImages = [
  { src: "/floors/hardwood-light.jpg", alt: "Light Hardwood Flooring Installation" },
  { src: "/floors/hardwood-herringbone.jpg", alt: "Herringbone Pattern Hardwood Floor" },
  { src: "/floors/hardwood-natural.jpg", alt: "Natural Hardwood Floor Finish" },
  { src: "/floors/hardwood-dark.jpg", alt: "Dark Hardwood Floor Installation" },
];

export default function GallerySection() {
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({});

  const handleImageError = (src: string) => {
    setImageErrors(prev => ({ ...prev, [src]: true }));
  };

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
            {!imageErrors[image.src] ? (
              <Image 
                src={image.src} 
                alt={image.alt} 
                fill 
                className="rounded-lg object-cover hover:scale-105 transition-transform duration-300"
                onError={() => handleImageError(image.src)}
                priority={index < 2}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            ) : (
              <div className="w-full h-full bg-neutral-200 dark:bg-neutral-800 rounded-lg flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-12 h-12 mx-auto mb-2 bg-[#CD9B6A] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">NPF</span>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {image.alt}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.section>
  );
}