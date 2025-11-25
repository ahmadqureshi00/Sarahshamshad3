"use client";

import { useState, useEffect } from "react";
import { testimonialsData } from "../src/data/testimonialsData";

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);

  // Update items per slide based on screen size
  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerSlide(3); // Desktop: 3 items
      } else if (window.innerWidth >= 768) {
        setItemsPerSlide(2); // Tablet: 2 items
      } else {
        setItemsPerSlide(1); // Mobile: 1 item
      }
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? getTotalSlides() - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === getTotalSlides() - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const getTotalSlides = () => {
    return Math.ceil(testimonialsData.length / itemsPerSlide);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  // Get testimonials for current slide
  const getCurrentTestimonials = () => {
    const start = currentIndex * itemsPerSlide;
    const end = start + itemsPerSlide;
    return testimonialsData.slice(start, end);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-off-white dark:bg-charcoal/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-lora font-bold mb-4">Testimonials & Endorsements</h2>
          <p className="text-xl text-charcoal dark:text-off-white max-w-3xl mx-auto">
            Hear what colleagues, students, and collaborators have to say about working with me.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-teal text-off-white rounded-full p-3 shadow-md hover:bg-teal/90 transition-colors duration-300"
            aria-label="Previous testimonials"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-teal text-off-white rounded-full p-3 shadow-md hover:bg-teal/90 transition-colors duration-300"
            aria-label="Next testimonials"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
            {getCurrentTestimonials().map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-white dark:bg-charcoal p-8 rounded-lg shadow-sm border border-neutral-gray/30 transition-all duration-300 hover:shadow-md"
              >
                <div className="text-teal text-4xl mb-4">❝</div>
                <p className="text-charcoal dark:text-off-white mb-6 italic">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="font-lora font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-neutral-gray">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: getTotalSlides() }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? "bg-teal" : "bg-neutral-gray/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}