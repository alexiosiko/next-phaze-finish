import Image from "next/image";

export default function BrandsSection() {
  return (
    <section className="w-full flex flex-wrap items-center justify-center gap-6 py-6 px-4 bg-neutral-50 dark:bg-neutral-900">
      {/* Replace with actual brand logos */}
      <Image src="/brand-placeholder.svg" alt="Brand 1" width={80} height={40} />
      <Image src="/brand-placeholder.svg" alt="Brand 2" width={80} height={40} />
      <Image src="/brand-placeholder.svg" alt="Brand 3" width={80} height={40} />
      <Image src="/brand-placeholder.svg" alt="Brand 4" width={80} height={40} />
    </section>
  );
}