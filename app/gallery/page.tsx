"use client";

import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";

export default function Gallery() {
  const [modalImage, setModalImage] = useState<{src: string, alt: string} | null>(null);

  // Generate gallery images array with correct extensions
  const galleryImages = Array.from({ length: 20 }, (_, i) => {
    // These specific gallery images use .jpeg extension
    const jpegImages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 14, 17, 19];
    const extension = jpegImages.includes(i + 1) ? 'jpeg' : 'jpg';
    return {
      src: `/materials/gallery_${i + 1}.${extension}`,
      alt: `Gallery Image ${i + 1}`
    };
  });

  const openModal = (src: string, alt: string) => {
    setModalImage({ src, alt });
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-lora font-bold mb-6">Gallery</h1>
              <p className="text-xl text-charcoal dark:text-off-white max-w-3xl mx-auto">
                A collection of moments from my professional journey and experiences.
              </p>
            </div>
            
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {galleryImages.map((image, index) => (
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
          </div>
        </section>
      </main>
      <Footer />

      {/* Image Modal */}
      {modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="relative max-w-6xl max-h-full" onClick={(e) => e.stopPropagation()}>
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
              width={1200} 
              height={1200} 
              className="max-h-[90vh] w-auto object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}