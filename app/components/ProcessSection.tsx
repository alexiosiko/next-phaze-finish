"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function ProcessSection() {
  return (
    <section className="w-full flex flex-col items-center py-12 px-4">
      <h2 className="text-2xl font-semibold mb-6">Our Process</h2>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 w-full max-w-5xl">
        <Card>
          <CardHeader>
            <CardTitle>Free Consult</CardTitle>
          </CardHeader>
          <CardContent>
            <Image src="/consult-placeholder.svg" alt="Consult" width={48} height={48} />
            <p>Consultation and written estimate from our experienced flooring specialists.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Choose A Floor/Finish</CardTitle>
          </CardHeader>
          <CardContent>
            <Image src="/choose-placeholder.svg" alt="Choose" width={48} height={48} />
            <p>Choose from our wide selection of high-quality hardwood flooring, stains, and refinishing options.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Schedule A Start Date</CardTitle>
          </CardHeader>
          <CardContent>
            <Image src="/schedule-placeholder.svg" alt="Schedule" width={48} height={48} />
            <p>Sit back and relax as our skilled team installs or refinishes your new hardwood floors.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Celebrate</CardTitle>
          </CardHeader>
          <CardContent>
            <Image src="/celebrate-placeholder.svg" alt="Celebrate" width={48} height={48} />
            <p>Enjoy the beauty and durability of stunning hardwood floors.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}