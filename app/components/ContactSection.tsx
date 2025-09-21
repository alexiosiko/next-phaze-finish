"use client";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section className="w-full flex flex-col items-center py-12 px-4">
      <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
      <form className="w-full max-w-lg flex flex-col gap-4">
        <div className="flex gap-4">
          <input className="flex-1 border rounded px-3 py-2" placeholder="First Name *" required />
          <input className="flex-1 border rounded px-3 py-2" placeholder="Last Name *" required />
        </div>
        <input className="border rounded px-3 py-2" placeholder="Email *" type="email" required />
        <input className="border rounded px-3 py-2" placeholder="Phone *" type="tel" required />
        <input className="border rounded px-3 py-2" placeholder="Zip code *" required />
        <textarea className="border rounded px-3 py-2" placeholder="Brief Description of Project *" required />
        <input className="border rounded px-3 py-2" placeholder="How You Found Us *" required />
        <input className="border rounded px-3 py-2" type="file" />
        <Button type="submit">Send</Button>
      </form>
      <div className="mt-6 text-center">
        <p className="font-semibold">(929)-203-9337</p>
        <p>7502 15th Ave Brooklyn, NY 11228</p>
      </div>
    </section>
  );
}