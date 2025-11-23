"use client";

import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { blogData } from "../../src/data/blogData";

export default function Blog() {
  const [email, setEmail] = useState("");
  const [modalImage, setModalImage] = useState<{src: string, alt: string} | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail("");
  };

  // Use the first blog post as the featured article
  const featuredPost = blogData.length > 0 ? blogData[0] : null;

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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-off-white dark:bg-charcoal/10">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-lora font-bold mb-6">Insights & Perspectives</h1>
              <p className="text-xl text-charcoal dark:text-off-white max-w-3xl mx-auto">
                Exploring the intersections of media, academia, translation, language education, and cultural narratives through critical analysis and storytelling.
              </p>
            </div>
            
            {/* Featured Article */}
            {featuredPost ? (
              <div className="bg-white dark:bg-charcoal rounded-lg shadow-md p-8 mb-16 border border-neutral-gray/30">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <span className="inline-block bg-teal/10 text-teal text-sm font-medium px-3 py-1 rounded-full mb-4">
                      Featured
                    </span>
                    <h2 className="text-3xl font-lora font-bold mb-4">{featuredPost.title}</h2>
                    <p className="text-charcoal dark:text-off-white mb-6">
                      Explore this featured article for insights and perspectives on contemporary media, language, and cultural narratives.
                    </p>
                    <div className="flex items-center text-sm text-neutral-gray mb-6">
                      <span>November 16, 2025</span>
                      <span className="mx-2">•</span>
                      <span>5 min read</span>
                    </div>
                    <button 
                      onClick={() => openModal(featuredPost.imageUrl, featuredPost.title)}
                      className="inline-block bg-charcoal dark:bg-off-white text-off-white dark:text-charcoal hover:bg-charcoal/90 dark:hover:bg-neutral-gray font-medium py-3 px-6 rounded-full transition-colors duration-300"
                    >
                      Read Article
                    </button>
                  </div>
                  <div className="h-64 w-full relative">
                    {featuredPost.imageUrl.endsWith('.pdf') ? (
                      <div className="w-full h-full bg-white flex items-center justify-center">
                        <span className="text-black font-medium text-center p-4">
                          Click to preview
                        </span>
                      </div>
                    ) : (
                      <Image
                        src={featuredPost.imageUrl}
                        alt={featuredPost.title}
                        fill
                        className="object-cover rounded-xl"
                      />
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white dark:bg-charcoal rounded-lg shadow-md p-8 mb-16 border border-neutral-gray/30 text-center">
                <h2 className="text-2xl font-lora font-bold mb-4">No Featured Article Available</h2>
                <p className="text-charcoal dark:text-off-white">
                  Check back later for featured content.
                </p>
              </div>
            )}
            
            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogData.map((post) => (
                <article 
                  key={post.slug} 
                  className="bg-white dark:bg-charcoal rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-neutral-gray/30"
                >
                  <div className="h-48 w-full relative">
                    {post.imageUrl.endsWith('.pdf') ? (
                      <div className="w-full h-full bg-white flex items-center justify-center">
                        <span className="text-black font-medium text-center p-4">
                          Click to preview
                        </span>
                      </div>
                    ) : (
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-lora font-semibold mb-3 group-hover:text-teal transition-colors">
                      {post.title}
                    </h3>
                    <button 
                      onClick={() => openModal(post.imageUrl, post.title)}
                      className="text-teal hover:text-teal/80 font-medium text-sm flex items-center"
                    >
                      Read more
                      <svg 
                        className="w-3 h-3 ml-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </article>
              ))}
            </div>
            
            {/* Newsletter Signup */}
            <div className="bg-teal rounded-lg p-8 mt-16 text-center">
              <h2 className="text-2xl font-lora font-bold text-off-white mb-4">Stay Updated</h2>
              <p className="text-off-white/90 mb-6 max-w-2xl mx-auto">
                Get the latest articles, insights, and resources delivered to your inbox.
              </p>
              <div className="max-w-md mx-auto flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-charcoal"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button 
                  onClick={handleSubmit}
                  className="bg-charcoal text-off-white px-6 py-3 rounded-r-lg font-medium hover:bg-charcoal/90 transition-colors"
                >
                  Subscribe
                </button>
              </div>
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