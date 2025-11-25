import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { ReactNode } from "react";

// Import data
import { ieltsFeatures, ieltsModules, ieltsTestimonials } from "../../src/data/ieltsData";

export default function IELTS() {
  // Icon components mapping
  const iconMap: Record<string, ReactNode> = {
    Target: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    Award: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    FileText: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    Clock: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal to-charcoal">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-lora font-bold text-off-white mb-6">
                Achieve Your Target Band Score
              </h1>
              <p className="text-xl text-off-white/90 mb-8">
                Expert IELTS preparation with Sarah Shamshad, PhD Scholar & Certified Instructor
              </p>
              <Link 
                href="/contact" 
                className="inline-block bg-off-white text-charcoal hover:bg-neutral-gray font-medium py-3 px-8 rounded-full transition-colors duration-300"
              >
                Book a Free Demo Class
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Sarah Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-lora font-bold mb-4">Why Choose Sarah</h2>
              <p className="text-xl text-charcoal dark:text-off-white max-w-3xl mx-auto">
                IELTS Instructor at Australian Educational Counsel since 2019
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {ieltsFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-charcoal p-8 rounded-lg shadow-sm border border-neutral-gray/30 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="text-teal mb-4">
                    {iconMap[feature.icon]}
                  </div>
                  <h3 className="text-xl font-lora font-semibold mb-3">{feature.title}</h3>
                  <p className="text-charcoal dark:text-off-white">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The 4 Modules Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-off-white dark:bg-charcoal/10">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-lora font-bold mb-4">The 4 IELTS Modules</h2>
              <p className="text-xl text-charcoal dark:text-off-white max-w-3xl mx-auto">
                Comprehensive training for all sections of the IELTS exam
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ieltsModules.map((module, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-charcoal p-6 rounded-lg shadow-sm border border-neutral-gray/30 text-center"
                >
                  <h3 className="text-xl font-lora font-semibold mb-3 text-teal">{module.title}</h3>
                  <p className="text-charcoal dark:text-off-white">{module.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Student Success Stories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-lora font-bold mb-4">Student Success Stories</h2>
              <p className="text-xl text-charcoal dark:text-off-white max-w-3xl mx-auto">
                Real results from real students
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ieltsTestimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="bg-white dark:bg-charcoal p-8 rounded-lg shadow-sm border border-neutral-gray/30"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-teal font-lora font-semibold">{testimonial.score}</span>
                  </div>
                  <p className="text-charcoal dark:text-off-white mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-lora font-semibold">{testimonial.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-teal">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-lora font-bold text-off-white mb-6">
                Ready to start your journey?
              </h2>
              <p className="text-xl text-off-white/90 mb-8">
                Join hundreds of successful students who have achieved their target band scores
              </p>
              <Link 
                href="/contact" 
                className="inline-block bg-off-white text-charcoal hover:bg-neutral-gray font-medium py-3 px-8 rounded-full transition-colors duration-300"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}