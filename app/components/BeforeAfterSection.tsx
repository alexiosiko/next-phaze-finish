"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function BeforeAfterSection() {
  return (
    <motion.section
      className="w-full flex flex-col items-center py-12 px-4"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="text-2xl font-semibold mb-4">Transform Your Floors with Us</h2>
      <div className="flex flex-col sm:flex-row gap-4">
        <Image src="/before-placeholder.jpg" alt="Before" width={320} height={240} className="rounded shadow" />
        <Image src="/after-placeholder.jpg" alt="After" width={320} height={240} className="rounded shadow" />
      </div>
      <Button className="mt-4">Contact Us</Button>
    </motion.section>
  );
}