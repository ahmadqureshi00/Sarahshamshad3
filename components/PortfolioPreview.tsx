"use client";

import Link from "next/link";
import Image from "next/image";
import { portfolioData } from "../src/data/portfolioData";
import { useState } from "react";

export default function PortfolioPreview() {
  // Get first 3 portfolio items
  const featuredProjects = portfolioData.slice(0, 3);
  const [modalImage, setModalImage] = useState<{src: string, alt: string} | null>(null);

  const openModal = (src: string, alt: string) => {
    setModalImage({ src, alt });
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-lora font-bold mb-4">Featured Work</h2>
          <p className="text-xl text-charcoal dark:text-off-white max-w-3xl mx-auto">
            A selection of projects showcasing the intersection of journalism, content strategy, and academic research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div 
              key={project.slug} 
              className="group border border-neutral-gray/30 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 w-full relative">
                {project.imageUrl.endsWith('.pdf') ? (
                  <div className="w-full h-full bg-white flex items-center justify-center">
                    <span className="text-black font-medium text-center p-4">
                      Click to preview
                    </span>
                  </div>
                ) : (
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="p-6">
                <span className="inline-block bg-teal/10 text-teal text-sm font-medium px-3 py-1 rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-lora font-semibold mb-2 group-hover:text-teal transition-colors">
                  {project.title}
                </h3>
                {project.category === "Journalism" ? (
                  <button 
                    onClick={() => openModal(project.imageUrl, project.title)}
                    className="text-teal hover:text-teal/80 font-medium flex items-center"
                  >
                    View case study
                    <svg 
                      className="w-4 h-4 ml-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ) : (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-teal hover:text-teal/80 font-medium flex items-center"
                  >
                    View case study
                    <svg 
                      className="w-4 h-4 ml-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/portfolio" 
            className="inline-block bg-charcoal dark:bg-off-white text-off-white dark:text-charcoal hover:bg-charcoal/90 dark:hover:bg-neutral-gray font-medium py-3 px-8 rounded-full transition-colors duration-300"
          >
            View Full Portfolio
          </Link>
        </div>
      </div>

      {/* Image Modal */}
      {modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={closeModal}>
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