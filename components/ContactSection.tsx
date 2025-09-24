"use client";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section className="w-full flex flex-col items-center py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Let's Start Your Next Phaze</h2>
        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
          Ready to transform your floors? Whether you're upgrading a single room or renovating an entire property, we're here to bring your flooring vision to life.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-6 text-left">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-[#CD9B6A]">📞 Contact Us Today</h3>
              <div className="space-y-3 text-base sm:text-lg">
                <p><strong>Phone:</strong> Ready to serve you</p>
                <p><strong>Service Area:</strong> Proudly serving homeowners, contractors, and businesses throughout the area</p>
                <p><strong>Free Consultation:</strong> Get your project started with a no-obligation estimate</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-3 text-[#CD9B6A]">What to Expect:</h4>
              <ul className="space-y-2 text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
                <li>• Transparent pricing with no hidden costs</li>
                <li>• Personalized service - deal directly with our team</li>
                <li>• Reliable scheduling and professional communication</li>
                <li>• Quality workmanship that stands the test of time</li>
              </ul>
            </div>
          </div>
          
          <div className="w-full">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Get Your Free Consultation</h3>
            <form className="w-full flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input className="flex-1 border border-neutral-300 dark:border-neutral-700 rounded px-3 py-2 bg-white dark:bg-neutral-800" placeholder="First Name *" required />
                <input className="flex-1 border border-neutral-300 dark:border-neutral-700 rounded px-3 py-2 bg-white dark:bg-neutral-800" placeholder="Last Name *" required />
              </div>
              <input className="border border-neutral-300 dark:border-neutral-700 rounded px-3 py-2 bg-white dark:bg-neutral-800" placeholder="Email *" type="email" required />
              <input className="border border-neutral-300 dark:border-neutral-700 rounded px-3 py-2 bg-white dark:bg-neutral-800" placeholder="Phone *" type="tel" required />
              <input className="border border-neutral-300 dark:border-neutral-700 rounded px-3 py-2 bg-white dark:bg-neutral-800" placeholder="Zip code *" required />
              <textarea className="border border-neutral-300 dark:border-neutral-700 rounded px-3 py-2 bg-white dark:bg-neutral-800 min-h-[100px]" placeholder="Tell us about your flooring project *" required />
              <input className="border border-neutral-300 dark:border-neutral-700 rounded px-3 py-2 bg-white dark:bg-neutral-800" placeholder="How did you hear about us?" />
              <input className="border border-neutral-300 dark:border-neutral-700 rounded px-3 py-2 bg-white dark:bg-neutral-800" type="file" accept="image/*" />
              <Button type="submit" className="bg-[#CD9B6A] hover:bg-[#B88756] text-white py-3 w-full">
                Get Free Consultation
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-lg">
          <h3 className="text-lg sm:text-xl font-semibold mb-3 text-[#CD9B6A]">Ready to Get Started?</h3>
          <p className="text-base sm:text-lg mb-4">
            Contact Next Phaze Finish today for your free consultation and estimate. We're excited to help transform your space with beautiful, lasting flooring solutions.
          </p>
          <Button size="lg" className="bg-[#CD9B6A] hover:bg-[#B88756] text-white w-full sm:w-auto">
            Call Now for Free Estimate
          </Button>
        </div>
      </div>
    </section>
  );
}