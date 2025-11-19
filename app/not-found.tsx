import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center px-4 py-16">
        <div className="text-center max-w-2xl">
          <div className="text-8xl font-lora font-bold text-teal mb-6">404</div>
          <h1 className="text-4xl font-lora font-bold mb-6">Page Not Found</h1>
          <p className="text-xl text-charcoal dark:text-off-white mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/" 
              className="bg-teal hover:bg-teal/90 text-off-white font-medium py-3 px-8 rounded-full transition-colors duration-300 text-center"
            >
              Go Home
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-charcoal dark:border-off-white text-charcoal dark:text-off-white hover:bg-charcoal hover:text-off-white dark:hover:bg-off-white dark:hover:text-charcoal font-medium py-3 px-8 rounded-full transition-colors duration-300 text-center"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}