"use client";

import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { portfolioData, portfolioCategories } from "../../src/data/portfolioData";

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [modalImage, setModalImage] = useState<{src: string, alt: string} | null>(null);
  
  const filteredProjects = filter === 'All' 
    ? portfolioData 
    : portfolioData.filter(project => project.category === filter);

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
              <h1 className="text-4xl md:text-5xl font-lora font-bold mb-6">Portfolio</h1>
              <p className="text-xl text-charcoal dark:text-off-white max-w-3xl mx-auto">
                A curated selection of projects spanning journalism, content strategy, academic research, and more.
              </p>
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {portfolioCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setFilter(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === category
                      ? "bg-teal text-off-white" 
                      : "bg-neutral-gray/20 text-charcoal dark:text-off-white hover:bg-neutral-gray"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
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
          </div>
        </section>
      </main>
      <Footer />

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
    </div>
  );
}