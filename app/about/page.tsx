import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";

export default function About() {
  const milestones = [
    {
      period: "2024 - Present",
      title: "Lecturer (Contractual)",
      organization: "Institute of Southern Punjab"
    },
    {
      period: "2019 - Present",
      title: "IELTS Instructor",
      organization: "Australian Educational Counsel Multan"
    },
    {
      period: "2018 - Present",
      title: "Lecturer",
      organization: "N.C.B.A & E Multan"
    },
    {
      period: "2015 - Present",
      title: "Lecturer",
      organization: "B.Z.U. MULTAN"
    },
    {
      period: "2006 - 2018",
      title: "Lecturer",
      organization: "Mammona Post Graduate College"
    },
    {
      period: "2002 - Present",
      title: "Co-Assistant Editor",
      organization: "Daily Khabrain"
    },
    {
      period: "2005 - 2006",
      title: "Lecturer",
      organization: "Scholars College Multan"
    },
    {
      period: "2004 - 2005",
      title: "Lecturer",
      organization: "Preston University"
    },
    {
      period: "2002 - 2004",
      title: "Lecturer",
      organization: "Zimics"
    }
  ];

  // Array of journey images
  const journeyImages = [
    { src: "/materials/journey1.png", alt: "Journey 1" },
    { src: "/materials/journey2.png", alt: "Journey 2" },
    { src: "/materials/journey3.jpeg", alt: "Journey 3" },
    { src: "/materials/journey4.jpeg", alt: "Journey 4" },
    { src: "/materials/journey5.png", alt: "Journey 5" },
    { src: "/materials/journey6.png", alt: "Journey 6" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-lora font-bold mb-6">About Sarah Shamshad</h1>
              <p className="text-xl text-charcoal dark:text-off-white max-w-3xl mx-auto">
                Strategic Communication and Creative Storytelling Professional
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
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
              <div>
                <h2 className="text-3xl font-lora font-bold mb-6">My Journey</h2>
                <p className="text-charcoal dark:text-off-white mb-6">
                  As a multi-hyphenate professional, I bridge the worlds of journalism, content creation, academic research, 
                  and entrepreneurship. My work focuses on strategic communication that drives impact across diverse audiences.
                </p>
                <p className="text-charcoal dark:text-off-white mb-6">
                  With a PhD in Communication Studies and years of experience in international media, I bring a unique 
                  perspective to every project — combining scholarly rigor with creative storytelling.
                </p>
                <p className="text-charcoal dark:text-off-white">
                  My approach is rooted in the belief that effective communication transcends traditional boundaries, 
                  creating connections that inform, inspire, and drive meaningful change.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-off-white dark:bg-charcoal/10">
          <div className="container mx-auto">
            <h2 className="text-3xl font-lora font-bold text-center mb-12">Professional Milestones</h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="relative pl-8 border-l-2 border-teal">
                {milestones.map((milestone, index) => (
                  <div key={index} className="mb-12 relative">
                    <div className="absolute -left-11 top-0 w-8 h-8 rounded-full bg-teal flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-off-white"></div>
                    </div>
                    <div className="bg-white dark:bg-charcoal p-6 rounded-lg shadow-sm">
                      <span className="inline-block bg-teal/10 text-teal text-sm font-medium px-3 py-1 rounded-full mb-2">
                        {milestone.period}
                      </span>
                      <h3 className="text-xl font-lora font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-charcoal dark:text-off-white">{milestone.organization}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Expertise */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-lora font-bold text-center mb-12">Skills & Expertise</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white dark:bg-charcoal p-8 rounded-lg shadow-sm border border-neutral-gray/30">
                <h3 className="text-xl font-lora font-semibold mb-4">Communication</h3>
                <ul className="space-y-2 text-charcoal dark:text-off-white">
                  <li>• Strategic Messaging</li>
                  <li>• Public Speaking</li>
                  <li>• Crisis Communication</li>
                  <li>• Intercultural Communication</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-charcoal p-8 rounded-lg shadow-sm border border-neutral-gray/30">
                <h3 className="text-xl font-lora font-semibold mb-4">Content</h3>
                <ul className="space-y-2 text-charcoal dark:text-off-white">
                  <li>• Journalism & Editing</li>
                  <li>• Digital Content Strategy</li>
                  <li>• Academic Writing</li>
                  <li>• Multimedia Production</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-charcoal p-8 rounded-lg shadow-sm border border-neutral-gray/30">
                <h3 className="text-xl font-lora font-semibold mb-4">Research</h3>
                <ul className="space-y-2 text-charcoal dark:text-off-white">
                  <li>• Qualitative Methods</li>
                  <li>• Data Analysis</li>
                  <li>• Literature Reviews</li>
                  <li>• Academic Publishing</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <a 
                href="/materials/updated cv Sarah Shamshad.docx 1.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-charcoal dark:bg-off-white text-off-white dark:text-charcoal hover:bg-charcoal/90 dark:hover:bg-neutral-gray font-medium py-3 px-8 rounded-full transition-colors duration-300"
              >
                Download Full CV
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}