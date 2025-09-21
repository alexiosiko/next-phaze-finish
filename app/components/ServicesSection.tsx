"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ServicesSection() {
  return (
    <motion.section
      className="w-full flex flex-col items-center py-12 px-4"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl">
        {[{
          title: "Sanding",
          img: "/sanding-placeholder.jpg",
        }, {
          title: "Staining",
          img: "/staining-placeholder.jpg",
        }, {
          title: "Installation",
          img: "/installation-placeholder.jpg",
        }].map(service => (
          <Card key={service.title} className="flex flex-col h-full min-h-[340px]">
            <div className="relative w-full aspect-[16/9] bg-neutral-200 rounded-t">
              <Image src={service.img} alt={service.title} fill className="object-cover rounded-t" />
            </div>
            <CardHeader className="flex-1 flex flex-col justify-center items-center">
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}