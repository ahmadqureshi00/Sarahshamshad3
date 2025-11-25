import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Services from "../components/Services";
import PortfolioPreview from "../components/PortfolioPreview";
import AboutPreview from "../components/AboutPreview";
import CertificationsPreview from "../components/CertificationsPreview";
import GalleryPreview from "../components/GalleryPreview";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        {/* IELTS Teaser Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-teal/10">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block bg-teal text-off-white text-sm font-medium px-4 py-1 rounded-full mb-4">
                New Service
              </span>
              <h2 className="text-3xl md:text-4xl font-lora font-bold mb-4">IELTS Online Classes Now Open</h2>
              <p className="text-xl text-charcoal dark:text-off-white mb-8">
                Master the English language with a certified instructor. Personalized coaching for Academic and General Training.
              </p>
              <Link 
                href="/ielts" 
                className="inline-block bg-charcoal dark:bg-off-white text-off-white dark:text-charcoal hover:bg-charcoal/90 dark:hover:bg-neutral-gray font-medium py-3 px-8 rounded-full transition-colors duration-300"
              >
                View Course Details
              </Link>
            </div>
          </div>
        </section>
        <Services />
        <PortfolioPreview />
        <CertificationsPreview />
        <GalleryPreview />
        <TestimonialsCarousel />
        <AboutPreview />
      </main>
      <Footer />
    </div>
  );
}