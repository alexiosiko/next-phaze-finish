"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ServicesSection() {
  return (
    <motion.section
      className="w-full flex flex-col items-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: '-100px 0px' }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 section-title text-[color:var(--foreground)]">What We Do</h2>
        <p className="text-base sm:text-lg text-center text-neutral-600 dark:text-neutral-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-2 sm:px-0">
          From complete installations to precision repairs, we bring your flooring vision to life with expert craftsmanship and attention to detail.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {[{
            title: "Flooring Installation & Renovation",
            img: "/installation-placeholder.jpg",
            description: "Complete flooring solutions including hardwood, laminate, and luxury vinyl installations for new constructions and renovations."
          }, {
            title: "Repairs & Refinishing",
            img: "/sanding-placeholder.jpg",
            description: "Expert restoration of worn or damaged floors, bringing them back to their original beauty and extending their lifespan."
          }, {
            title: "Custom Finishes",
            img: "/staining-placeholder.jpg",
            description: "Tailored looks to match your style and space, from traditional stains to contemporary finishes that reflect your vision."
          }].map(service => (
            <Card key={service.title} className="flex flex-col h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative w-full aspect-[4/3] bg-neutral-200 rounded-t overflow-hidden">
                <Image src={service.img} alt={service.title} fill className="object-cover" />
              </div>
              <CardHeader className="flex-1 flex flex-col justify-start p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl mb-2 sm:mb-3 text-[color:var(--accent)]">{service.title}</CardTitle>
                <CardContent className="p-0">
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">{service.description}</p>
                </CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8 sm:mt-12 px-2 sm:px-0">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-[color:var(--accent)]">Ready to transform your space?</h3>
          <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto">
            From a single room refresh to a whole property renovation, we'll work with you to find the right solution. Reach out for a quick, no-obligation consultation.
          </p>
        </div>
      </div>
    </motion.section>
  );
}