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
  "/floors/hardwood-light.jpg",
  "/floors/hardwood-herringbone.jpg",
  "/floors/hardwood-natural.jpg",
  "/floors/hardwood-dark.jpg",
  "/floors/hardwood-pattern.jpg"
];

export default function HeroSection() {
  const plugin = Autoplay({ delay: 5000, stopOnInteraction: false });

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-neutral-900 py-12 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex flex-col items-center justify-center z-10"
      >
        <div className="max-w-6xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your NYC Property with Beautiful Hardwood Floors
          </h1>
          <div className="space-y-4 mb-8">
            <p className="text-2xl md:text-3xl font-semibold">
              4th Generation Flooring Company
            </p>
            <p className="text-xl md:text-2xl">
              Solid Hardwood, Engineered, Laminate, and Luxury Vinyl Flooring
            </p>
            <p className="text-lg italic">
              Refinisher | Installer | Repairer (it's a word)
            </p>
          </div>
          <Button size="lg" className="bg-[#CD9B6A] hover:bg-[#B88756] text-white text-lg py-6 px-8 rounded-none">
            Contact Us
          </Button>
          <p className="mt-8 text-lg">
            Serving: Manhattan, Brooklyn, Queens, Staten Island and the entire New York City metro area.
          </p>
        </div>
        {/* Carousel under the header content */}
        <div className="w-full flex justify-center mt-12">
          <div className="w-full max-w-3xl">
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
                    <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
                      <Image
                        src={src}
                        alt="Beautiful hardwood flooring"
                        fill
                        priority={index === 0}
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/60" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </div>
      </motion.div>
    </section>
  );
}