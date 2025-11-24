import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Services from "../components/Services";
import PortfolioPreview from "../components/PortfolioPreview";
import AboutPreview from "../components/AboutPreview";
import CertificationsPreview from "../components/CertificationsPreview";
import GalleryPreview from "../components/GalleryPreview";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <PortfolioPreview />
        <CertificationsPreview />
        <GalleryPreview />
        <AboutPreview />
      </main>
      <Footer />
    </div>
  );
}