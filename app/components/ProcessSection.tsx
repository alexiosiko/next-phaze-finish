"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function ProcessSection() {
  return (
    <section className="w-full flex flex-col items-center py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">Our Process</h2>
        <p className="text-base sm:text-lg text-center text-neutral-600 dark:text-neutral-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-2 sm:px-0">
          From consultation to completion, we ensure a smooth experience with detailed project planning and clear communication every step of the way.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full">
          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 bg-[#CD9B6A] rounded-full flex items-center justify-center">
                <Image src="/consult-placeholder.svg" alt="Consult" width={24} height={24} className="sm:w-8 sm:h-8 filter brightness-0 invert" />
              </div>
              <CardTitle className="text-base sm:text-lg text-[#CD9B6A]">Free Consultation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">Get a detailed consultation and transparent written estimate from our experienced flooring specialists.</p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 bg-[#CD9B6A] rounded-full flex items-center justify-center">
                <Image src="/choose-placeholder.svg" alt="Choose" width={24} height={24} className="sm:w-8 sm:h-8 filter brightness-0 invert" />
              </div>
              <CardTitle className="text-base sm:text-lg text-[#CD9B6A]">Design & Planning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">Work with us to select the perfect flooring solution and custom finish that matches your vision and space.</p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 bg-[#CD9B6A] rounded-full flex items-center justify-center">
                <Image src="/schedule-placeholder.svg" alt="Schedule" width={24} height={24} className="sm:w-8 sm:h-8 filter brightness-0 invert" />
              </div>
              <CardTitle className="text-base sm:text-lg text-[#CD9B6A]">Expert Installation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">Our skilled craftsmen handle every detail with precision, respecting your space and timeline throughout the project.</p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 bg-[#CD9B6A] rounded-full flex items-center justify-center">
                <Image src="/celebrate-placeholder.svg" alt="Celebrate" width={24} height={24} className="sm:w-8 sm:h-8 filter brightness-0 invert" />
              </div>
              <CardTitle className="text-base sm:text-lg text-[#CD9B6A]">Enjoy Your Floors</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">Experience the beauty and lasting quality of your transformed floors - built to stand the test of time.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}