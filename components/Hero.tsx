"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-lora font-bold leading-tight mb-6">
              Strategic Communication & <span className="text-teal">Creative Storytelling</span>
            </h1>
            <p className="text-xl text-charcoal dark:text-off-white mb-8 max-w-2xl">
              Hi, I'm Sarah Shamshad — a journalist, content creator, PhD scholar, and entrepreneur 
              weaving narratives that inform, inspire, and drive impact across media, academia, and business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/portfolio" 
                className="bg-teal hover:bg-teal/90 text-off-white font-medium py-3 px-8 rounded-full transition-colors duration-300"
              >
                Explore My Work
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-charcoal dark:border-off-white text-charcoal dark:text-off-white hover:bg-charcoal hover:text-off-white dark:hover:bg-off-white dark:hover:text-charcoal font-medium py-3 px-8 rounded-full transition-colors duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square rounded-full bg-neutral-gray/20 flex items-center justify-center">
              <Image 
                src="/materials/pic.jpg" 
                alt="Sarah Shamshad" 
                width={320} 
                height={320} 
                className="rounded-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-teal w-32 h-32 rounded-full z-[-1]"></div>
            <div className="absolute -top-6 -left-6 bg-charcoal w-24 h-24 rounded-full z-[-1]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}