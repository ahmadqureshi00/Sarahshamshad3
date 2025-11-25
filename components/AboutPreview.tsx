import Link from "next/link";
import Image from "next/image";

export default function AboutPreview() {
  // Array of journey images
  const journeyImages = [
    { src: "/materials/journey1.png", alt: "Journey 1" },
    { src: "/materials/journey2.png", alt: "Journey 2" },
    { src: "/materials/journey3.jpeg", alt: "Journey 3" },
    { src: "/materials/journey4.jpeg", alt: "Journey 4" },
    { src: "/materials/journey5.jpeg", alt: "Journey 5" },
    { src: "/materials/journey6.png", alt: "Journey 6" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-off-white dark:bg-charcoal/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {journeyImages.map((image, index) => (
                <div key={index} className="aspect-square relative">
                  <Image 
                    src={image.src} 
                    alt={image.alt} 
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-lora font-bold mb-6">About Sarah</h2>
            <p className="text-charcoal dark:text-off-white mb-6">
              As a multi-hyphenate professional, I bridge the worlds of journalism, content creation, academic research, 
              translation, language teaching, and entrepreneurship. My work focuses on strategic communication that drives impact across diverse audiences.
            </p>
            <p className="text-charcoal dark:text-off-white mb-6">
              With a PhD in Communication Studies and years of experience in international media, I bring a unique 
              perspective to every project — combining scholarly rigor with creative storytelling.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h3 className="font-lora font-semibold text-lg mb-2">Journalism</h3>
                <p className="text-charcoal dark:text-off-white text-sm">10+ years in international media</p>
              </div>
              <div>
                <h3 className="font-lora font-semibold text-lg mb-2">Academia</h3>
                <p className="text-charcoal dark:text-off-white text-sm">PhD in Communication Studies</p>
              </div>
              <div>
                <h3 className="font-lora font-semibold text-lg mb-2">Translation</h3>
                <p className="text-charcoal dark:text-off-white text-sm">Published book translator</p>
              </div>
              <div>
                <h3 className="font-lora font-semibold text-lg mb-2">Language Teaching</h3>
                <p className="text-charcoal dark:text-off-white text-sm">IELTS Instructor</p>
              </div>
            </div>
            <Link 
              href="/about" 
              className="inline-block bg-teal hover:bg-teal/90 text-off-white font-medium py-3 px-8 rounded-full transition-colors duration-300"
            >
              Learn More About Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}