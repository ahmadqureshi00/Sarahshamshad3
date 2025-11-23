import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Content Strategy & Creation",
      description: "Developing compelling content that resonates with your audience and achieves business objectives.",
      icon: "✍️"
    },
    {
      title: "Journalistic & Editorial Writing",
      description: "Investigative reporting, feature writing, editorial content, and news analysis across digital and print platforms.",
      icon: "📰"
    },
    {
      title: "Academic Research & Writing",
      description: "Scholarly publications, research papers, and educational content rooted in rigorous methodology.",
      icon: "📚"
    },
    {
      title: "Translation & Language Services",
      description: "Professional translation services and language education including IELTS preparation.",
      icon: "🌐"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-off-white dark:bg-charcoal/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-lora font-bold mb-4">Services</h2>
          <p className="text-xl text-charcoal dark:text-off-white max-w-3xl mx-auto">
            Bridging the worlds of media, academia, language education, and business with tailored communication solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-charcoal p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-neutral-gray/30"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-lora font-semibold mb-3">{service.title}</h3>
              <p className="text-charcoal dark:text-off-white mb-6">{service.description}</p>
              <Link 
                href="/services" 
                className="text-teal hover:text-teal/80 font-medium flex items-center"
              >
                Learn more
                <svg 
                  className="w-4 h-4 ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/services" 
            className="inline-block bg-charcoal dark:bg-off-white text-off-white dark:text-charcoal hover:bg-charcoal/90 dark:hover:bg-neutral-gray font-medium py-3 px-8 rounded-full transition-colors duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}