"use client";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current || isLoading) return;
    
    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
      );
      
      console.log('Email sent successfully:', result.text);
      setSubmitStatus('success');
      form.current.reset();
    } catch (error) {
      console.error('Email send failed:', error);
      console.error('Error details:', error);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className="w-full flex flex-col items-center py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[color:var(--background)] text-[color:var(--foreground)]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[color:var(--foreground)]">Ready to get started?</h2>
        <p className="text-base sm:text-lg text-[color:var(--muted-foreground)] mb-8">
          Tell us a bit about your project and we'll provide a clear, no-pressure estimate — fast and friendly.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">📞 Contact Us Today</h3>
              <div className="space-y-3 text-base sm:text-lg">
                <div>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-1">Call us directly:</p>
                  <a href="tel:2368697404" className="text-2xl font-bold  hover:underline block">
                    (236) 869-7404
                  </a>
                </div>
                
                <div className="border-t border-neutral-200 dark:border-neutral-700 pt-3">
                  <p className="text-neutral-600 dark:text-neutral-400 mb-1">Or email us:</p>
                  <a href="mailto:nextphazefinish@gmail.com" className="text-lg text-[color:var(--accent)] hover:underline">
                    nextphazefinish@gmail.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="text-center p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <h4 className="text-base font-semibold mb-2 text-[color:var(--accent)]">Quality Guarantee</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Transparent pricing with no hidden costs</p>
              </div>
              
              <div className="text-center p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                  <h4 className="text-base font-semibold mb-2 text-[color:var(--accent)]">Direct Service</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Work directly with our experienced team</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-[color:var(--accent)]">Get Your Free Consultation</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-4 p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-lg">
                <p className="text-green-800 dark:text-green-200">Thanks — we got your message. We'll be in touch shortly to set up a time to review your project.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-4 p-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-lg">
                <p className="text-red-800 dark:text-red-200">Oops — something went wrong. Please try again, or give us a quick call at (236) 869-7404.</p>
              </div>
            )}

            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name *"
                  aria-label="First name"
                  required
                  disabled={isLoading}
                  className="border border-neutral-300 dark:border-neutral-700 rounded px-3 py-2 bg-white dark:bg-neutral-900 disabled:opacity-50"
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name *"
                  required
                  disabled={isLoading}
                  className="border border-neutral-300 dark:border-neutral-700 rounded px-3 py-2 bg-white dark:bg-neutral-900 disabled:opacity-50"
                />
              </div>
              
              <input
                type="email"
                name="email"
                placeholder="Email *"
                aria-label="Email"
                required
                disabled={isLoading}
                className="w-full border border-neutral-300 dark:border-neutral-700 rounded px-3 py-2 bg-white dark:bg-neutral-900 disabled:opacity-50"
              />
              
              <input
                type="tel"
                name="phone"
                placeholder="Phone *"
                aria-label="Phone"
                required
                disabled={isLoading}
                className="w-full border border-neutral-300 dark:border-neutral-700 rounded px-3 py-2 bg-white dark:bg-neutral-900 disabled:opacity-50"
              />
              
              <input
                type="text"
                name="location"
                placeholder="Location/Zip Code"
                aria-label="Location or Zip code"
                disabled={isLoading}
                className="w-full border border-neutral-300 dark:border-neutral-700 rounded px-3 py-2 bg-white dark:bg-neutral-900 disabled:opacity-50"
              />
              
              <textarea
                name="project_description"
                placeholder="Tell us about your flooring project *"
                aria-label="Project description"
                required
                disabled={isLoading}
                className="w-full border border-neutral-300 dark:border-neutral-700 rounded px-3 py-2 bg-white dark:bg-neutral-900 min-h-[100px] disabled:opacity-50"
              />
              
              <input
                type="text"
                name="how_found_us"
                placeholder="How did you hear about us?"
                aria-label="How did you hear about us"
                disabled={isLoading}
                className="w-full border border-neutral-300 dark:border-neutral-700 rounded px-3 py-2 bg-white dark:bg-neutral-900 disabled:opacity-50"
              />

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[color:var(--accent)] hover:bg-[color:var(--primary)] text-[color:var(--accent-foreground)] py-3 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    Sending...
                  </>
                ) : (
                  'Send message'
                )}
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <a href="tel:2368697404">
            <Button size="lg" className="bg-[color:var(--accent)] hover:bg-[color:var(--primary)] text-[color:var(--accent-foreground)] text-lg px-8 py-4 w-full sm:w-auto">
              Call Now: (236) 869-7404
            </Button>
          </a>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            Ready to transform your space with beautiful, lasting flooring solutions
          </p>
        </div>
      </div>
    </section>
  );
}
