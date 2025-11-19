import Link from "next/link";
import Image from "next/image";
import certifications from "../src/data/certifications";

export default function CertificationsPreview() {
  // Get first 6 certifications
  const featuredCertificates = certifications.slice(0, 6);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-off-white dark:bg-charcoal/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-lora font-bold mb-4">Certifications & Awards</h2>
          <p className="text-xl text-charcoal dark:text-off-white max-w-3xl mx-auto">
            A selection of my academic and professional achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCertificates.map((cert, index) => (
            <div 
              key={index} 
              className="group border border-neutral-gray/30 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 w-full relative">
                {cert.image.endsWith('.pdf') ? (
                  <div className="w-full h-full bg-white flex items-center justify-center">
                    <span className="text-black font-medium text-center p-4">
                      Click to preview
                    </span>
                  </div>
                ) : (
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-lora font-semibold mb-2 group-hover:text-teal transition-colors">
                  {cert.title}
                </h3>
                <p className="text-charcoal dark:text-off-white mb-2">
                  {cert.org}
                </p>
                {cert.date && (
                  <p className="text-sm text-neutral-gray mb-4">
                    {cert.date}
                  </p>
                )}
                <a 
                  href={cert.image} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 font-medium"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/certifications" 
            className="inline-block bg-charcoal dark:bg-off-white text-off-white dark:text-charcoal hover:bg-charcoal/90 dark:hover:bg-neutral-gray font-medium py-3 px-8 rounded-full transition-colors duration-300"
          >
            View All Certifications
          </Link>
        </div>
      </div>
    </section>
  );
}