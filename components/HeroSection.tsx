"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

const images = [
  "/hero/1.jpg",
  "/hero/2.jpg",
  "/hero/3.jpg",
  "/hero/4.jpg",
];

export default function HeroSection() {
  const plugin = Autoplay({ delay: 5000, stopOnInteraction: false });

  return (
    <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center bg-[color:var(--background)] py-12 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image src="/floors/hardwood-natural.jpg" alt="wood background" fill className="object-cover opacity-10" />
        <div className="absolute inset-0 bg-[color:var(--background)]/60" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex flex-col items-center justify-center z-10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[color:var(--foreground)]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-[color:var(--foreground)]">
            Beautiful floors, done right — Next Phaze Finish
          </h1>
          <div className="space-y-2 sm:space-y-4 mb-6 sm:mb-8">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[color:var(--foreground)]">
              Expert craftsmanship that looks and lasts
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[color:var(--muted-foreground)]">
              Hardwood • Laminate • Luxury Vinyl • Custom Finishes
            </p>
            <p className="text-sm sm:text-base md:text-lg italic text-[color:var(--muted-foreground)]">
              Installations, refinishes, and repairs — we make it easy and worry-free
            </p>
          </div>
          <Button 
            size="lg" 
            className="bg-[color:var(--accent)] hover:bg-[color:var(--primary)] text-[color:var(--accent-foreground)] text-base sm:text-lg py-4 sm:py-6 px-6 sm:px-8 rounded-md w-full sm:w-auto shadow-md"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                const yOffset = -80; // Account for sticky nav height
                const y = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
          >
            Get a free estimate
          </Button>
          <p className="mt-6 sm:mt-8 text-sm sm:text-base lg:text-lg px-2 sm:px-0 text-[color:var(--muted-foreground)]">
            Quality workmanship that stands the test of time • Transparent pricing • Personalized service
          </p>
        </div>
        {/* Carousel under the header content */}
        <div className="w-full flex justify-center mt-8 sm:mt-12 px-4">
          <div className="w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
            <Carousel
              className="w-full"
              plugins={[plugin]}
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                {images.map((src, index) => (
                  <CarouselItem key={src} className="flex items-center justify-center">
                    <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80 rounded-lg sm:rounded-xl overflow-hidden shadow-md">
                      <Image
                        src={src}
                        alt="Beautiful hardwood flooring"
                        fill
                        priority={index === 0}
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-[color:var(--foreground)]/10" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-1 sm:left-2" />
              <CarouselNext className="right-1 sm:right-2" />
            </Carousel>
          </div>
        </div>
      </motion.div>
    </section>
  );
}