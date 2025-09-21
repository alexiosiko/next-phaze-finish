"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const profiles = [
  { name: "Jane D.", img: "/profile1.jpg" },
  { name: "Mike S.", img: "/profile2.jpg" },
  { name: "Linda P.", img: "/profile3.jpg" },
];

export default function ReviewsSection() {
  return (
    <motion.section
      className="w-full flex flex-col items-center py-12 px-4 bg-neutral-50 dark:bg-neutral-900"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="text-2xl font-semibold mb-4">Reviews From All Over the Web</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        <Card className="w-64">
          <CardHeader className="flex flex-row items-center gap-3">
            <img src="/profile1.jpg" alt="Jane D." className="w-10 h-10 rounded-full border" />
            <div>
              <CardTitle>Google</CardTitle>
              <div className="text-xs text-neutral-500">Jane D.</div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">4.9</p>
            <a href="#" className="text-blue-600 hover:underline">See reviews</a>
          </CardContent>
        </Card>
        <Card className="w-64">
          <CardHeader className="flex flex-row items-center gap-3">
            <img src="/profile2.jpg" alt="Mike S." className="w-10 h-10 rounded-full border" />
            <div>
              <CardTitle>Yelp</CardTitle>
              <div className="text-xs text-neutral-500">Mike S.</div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">4.7</p>
            <a href="#" className="text-blue-600 hover:underline">See Yelp review</a>
          </CardContent>
        </Card>
        <Card className="w-64">
          <CardHeader className="flex flex-row items-center gap-3">
            <img src="/profile3.jpg" alt="Linda P." className="w-10 h-10 rounded-full border" />
            <div>
              <CardTitle>Angi</CardTitle>
              <div className="text-xs text-neutral-500">Linda P.</div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">4.9</p>
            <a href="#" className="text-blue-600 hover:underline">See reviews</a>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}