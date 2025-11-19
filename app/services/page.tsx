import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Services() {
  const services = [
    {
      title: "Content Strategy & Creation",
      description: "Developing compelling content that resonates with your audience and achieves business objectives.",
      features: [
        "Audience analysis and persona development",
        "Content planning and calendar creation",
        "Multi-platform content creation",
        "Performance analytics and optimization"
      ],
      icon: "✍️"
    },
    {
      title: "Journalistic Writing",
      description: "Investigative reporting, feature writing, and news analysis across digital and print platforms.",
      features: [
        "Investigative journalism",
        "Feature articles and profiles",
        "News analysis and commentary",
        "Fact-checking and verification"
      ],
      icon: "📰"
    },
    {
      title: "Academic Research & Writing",
      description: "Scholarly publications, research papers, and educational content rooted in rigorous methodology.",
      features: [
        "Literature reviews and synthesis",
        "Research design and methodology",
        "Academic paper writing and editing",
        "Publication strategy and support"
      ],
      icon: "📚"
    },
    {
      title: "Training & Workshops",
      description: "Customized training programs in communication, writing, and media literacy for organizations.",
      features: [
        "Media literacy workshops",
        "Professional writing training",
        "Communication skills development",
        "Custom curriculum design"
      ],
      icon: "🎓"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-lora font-bold mb-6">Services</h1>
              <p className="text-xl text-charcoal dark:text-off-white max-w-3xl mx-auto">
                Bridging the worlds of media, academia, and business with tailored communication solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-lora font-bold mb-6">My Approach</h2>
                <p className="text-charcoal dark:text-off-white mb-6">
                  With experience spanning journalism, academia, and corporate communication, I bring a unique 
                  multidisciplinary perspective to every project.
                </p>
                <p className="text-charcoal dark:text-off-white mb-6">
                  My process begins with deep listening to understand your goals, audience, and challenges. 
                  From there, I develop customized strategies that leverage the most effective channels and formats.
                </p>
                <p className="text-charcoal dark:text-off-white">
                  Whether you need to inform, persuade, or inspire, I craft messages that cut through the noise 
                  and create meaningful connections with your intended audience.
                </p>
              </div>
              <div className="bg-neutral-gray/20 rounded-lg p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">💬</div>
                  <h3 className="text-2xl font-lora font-bold mb-2">Let's Connect</h3>
                  <p className="text-charcoal dark:text-off-white mb-6">
                    Ready to discuss your project? I'd love to hear about your goals and explore how we can work together.
                  </p>
                  <a 
                    href="/contact" 
                    className="inline-block bg-teal hover:bg-teal/90 text-off-white font-medium py-3 px-8 rounded-full transition-colors duration-300"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-off-white dark:bg-charcoal/10">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-charcoal p-8 rounded-lg shadow-sm border border-neutral-gray/30"
                >
                  <div className="text-5xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-lora font-bold mb-4">{service.title}</h3>
                  <p className="text-charcoal dark:text-off-white mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg 
                          className="w-5 h-5 text-teal mr-2 mt-0.5 flex-shrink-0" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-charcoal dark:text-off-white">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Preview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-lora font-bold mb-4">What Clients Say</h2>
              <p className="text-charcoal dark:text-off-white max-w-2xl mx-auto">
                Don't just take my word for it. Here's what some of my clients and collaborators have to say.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white dark:bg-charcoal p-6 rounded-lg border border-neutral-gray/30">
                <div className="text-teal text-4xl mb-4">“</div>
                <p className="text-charcoal dark:text-off-white mb-6">
                  Sarah transformed our communication strategy, helping us reach new audiences while staying true to our mission.
                </p>
                <div>
                  <p className="font-lora font-semibold">Alex Johnson</p>
                  <p className="text-sm text-neutral-gray">Executive Director, NGO</p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-charcoal p-6 rounded-lg border border-neutral-gray/30">
                <div className="text-teal text-4xl mb-4">“</div>
                <p className="text-charcoal dark:text-off-white mb-6">
                  Working with Sarah on our research publication was a game-changer. Her ability to translate complex ideas is exceptional.
                </p>
                <div>
                  <p className="font-lora font-semibold">Dr. Maria Rodriguez</p>
                  <p className="text-sm text-neutral-gray">University Professor</p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-charcoal p-6 rounded-lg border border-neutral-gray/30">
                <div className="text-teal text-4xl mb-4">“</div>
                <p className="text-charcoal dark:text-off-white mb-6">
                  Sarah's journalistic expertise brought depth and nuance to our storytelling that resonated with our audience.
                </p>
                <div>
                  <p className="font-lora font-semibold">James Wilson</p>
                  <p className="text-sm text-neutral-gray">Marketing Director, Tech Company</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <a 
                href="/about" 
                className="inline-block bg-charcoal dark:bg-off-white text-off-white dark:text-charcoal hover:bg-charcoal/90 dark:hover:bg-neutral-gray font-medium py-3 px-8 rounded-full transition-colors duration-300"
              >
                View All Testimonials
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}