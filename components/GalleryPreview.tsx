"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function GalleryPreview() {
  // First 6 gallery images for preview with correct extensions
  const previewImages = [
    { src: "/materials/gallery_1.jpeg", alt: "Gallery Image 1" },
    { src: "/materials/gallery_2.jpeg", alt: "Gallery Image 2" },
    { src: "/materials/gallery_3.jpeg", alt: "Gallery Image 3" },
    { src: "/materials/gallery_4.jpeg", alt: "Gallery Image 4" },
    { src: "/materials/gallery_5.jpeg", alt: "Gallery Image 5" },
    { src: "/materials/gallery_6.jpeg", alt: "Gallery Image 6" },
  ];

  const [modalImage, setModalImage] = useState<{src: string, alt: string} | null>(null);

  const openModal = (src: string, alt: string) => {
    setModalImage({ src, alt });
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-off-white dark:bg-charcoal/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-lora font-bold mb-4">Gallery</h2>
          <p className="text-xl text-charcoal dark:text-off-white max-w-3xl mx-auto">
            Moments from my professional journey and experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {previewImages.map((image, index) => (
            <div 
              key={index} 
              className="aspect-square relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => openModal(image.src, image.alt)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/gallery" 
            className="inline-block bg-charcoal dark:bg-off-white text-off-white dark:text-charcoal hover:bg-charcoal/90 dark:hover:bg-neutral-gray font-medium py-3 px-8 rounded-full transition-colors duration-300"
          >
            View Full Gallery
          </Link>
        </div>
      </div>

      {/* Image Modal */}
      {modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 z-10"
              onClick={closeModal}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image 
              src={modalImage.src} 
              alt={modalImage.alt} 
              width={1000} 
              height={1000} 
              className="max-h-[90vh] w-auto object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}