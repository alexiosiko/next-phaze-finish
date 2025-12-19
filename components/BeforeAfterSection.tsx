	"use client";
	import Image from "next/image";
	import { Button } from "@/components/ui/button";
	import { motion } from "framer-motion";

	import React, { useCallback, useEffect, useState, useRef } from "react";
	import defaultPairs from "@/lib/beforeAfterPairs";
	import dynamic from "next/dynamic";
	import useEmblaCarousel from "embla-carousel-react";


	// Load react-compare-image dynamically (client-side only)
	const ReactCompareImage = dynamic(() => import("react-compare-image"), { ssr: false });


	export default function BeforeAfterSection({ maxHeight = 'var(--before-after-max-height)', aspectRatio = '16/9' }: { maxHeight?: string; aspectRatio?: string }) {
	// Disable swipe/drag on the carousel so compare handle interactions don't move slides
		const [viewportRef, embla] = useEmblaCarousel({ loop: true, watchDrag: false });
		const [selected, setSelected] = useState(0);
		const containerRef = useRef<HTMLDivElement | null>(null);
		const [computedHeight, setComputedHeight] = useState<number | null>(null);

		// Compute pixel height from container width and aspect ratio; CSS max-height still applies.
		


	const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
	const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

	useEffect(() => {
		if (!embla) return;
		const onSelect = () => setSelected(embla.selectedScrollSnap());
		embla.on('select', onSelect);
		onSelect();
		return () => {
			embla.off('select', onSelect);
		};
	}, [embla]);




	return (
		<motion.section
			className="w-full flex flex-col items-center py-12 px-4 bg-[color:var(--background)] text-[color:var(--foreground)]"
			initial={{ opacity: 0, y: 60 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.7, ease: "easeOut" }}
			aria-label="Before and after slider"
			>
			<h2 className="text-2xl font-semibold mb-4 section-title text-center md:text-left">Before & After — Real Refinishing Work</h2>

			<div className="w-full max-w-4xl mx-auto ">
				<div className="relative">
				<div className="rounded-lg overflow-hidden"  ref={(el) => { (viewportRef as any)(el); containerRef.current = el; }} style={{ touchAction: 'pan-y' }}>
					<div className="flex gap-6">
						{defaultPairs.map((p, idx) => (
							<div key={idx} className="min-w-full flex-shrink-0">
<div className="before-after-wrapper rounded-lg overflow-hidden shadow-md" style={{ maxHeight, aspectRatio, height: computedHeight ? `${computedHeight}px` : undefined }}>
								<ReactCompareImage
									leftImage={p.before}
									rightImage={p.after}
									/>
								</div>
							</div>
						))}
					</div>
				</div>

				<button
					aria-label="Previous"
					onClick={scrollPrev}
					className="absolute left-2 top-1/2 -translate-y-1/2 bg-[color:var(--surface)]/80 p-2 rounded-md shadow-sm hover:bg-[color:var(--surface)]"
				>
					‹
				</button>

				<button
					aria-label="Next"
					onClick={scrollNext}
					className="absolute right-2 top-1/2 -translate-y-1/2 bg-[color:var(--surface)]/80 p-2 rounded-md shadow-sm hover:bg-[color:var(--surface)]"
				>
					›
				</button>
				</div>

				<div className="mt-4 flex justify-center gap-2" role="tablist" aria-label="Slides">
				{defaultPairs.map((_, idx) => (
					<button
					key={idx}
					aria-selected={selected === idx}
					onClick={() => embla && embla.scrollTo(idx)}
					className={`w-3 h-3 rounded-full ${selected === idx ? "bg-[color:var(--accent)]" : "bg-neutral-300"}`}
					/>
				))}
				</div>
			</div>
		</motion.section>
	);
	}