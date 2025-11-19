"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("xeoneepa");

  if (state.succeeded) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-24">
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg 
                    className="w-8 h-8 text-teal" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-lora font-bold mb-2">Thanks for joining!</h3>
                <p className="text-charcoal dark:text-off-white mb-6">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button 
                  onClick={() => window.location.reload()}
                  className="bg-teal hover:bg-teal/90 text-off-white font-medium py-3 px-6 rounded-full transition-colors duration-300"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-lora font-bold mb-6">Get In Touch</h1>
              <p className="text-xl text-charcoal dark:text-off-white max-w-3xl mx-auto">
                Have a project in mind or want to discuss potential collaborations? I'd love to hear from you.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-lora font-bold mb-6">Let's Start a Conversation</h2>
                <p className="text-charcoal dark:text-off-white mb-8">
                  Whether you're looking for content creation, strategic communication advice, or academic collaboration, 
                  I'm here to help bring your ideas to life.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-teal/10 p-3 rounded-full mr-4">
                      <svg 
                        className="w-6 h-6 text-teal" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-lora font-semibold text-lg mb-1">Email</h3>
                      <p className="text-charcoal dark:text-off-white">sarahpostcolonial@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-teal/10 p-3 rounded-full mr-4">
                      <svg 
                        className="w-6 h-6 text-teal" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-lora font-semibold text-lg mb-1">Phone</h3>
                      <p className="text-charcoal dark:text-off-white">0300-7321979</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-teal/10 p-3 rounded-full mr-4">
                      <svg 
                        className="w-6 h-6 text-teal" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-lora font-semibold text-lg mb-1">Location</h3>
                      <p className="text-charcoal dark:text-off-white">Multan, Pakistan</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-teal/10 p-3 rounded-full mr-4">
                      <svg 
                        className="w-6 h-6 text-teal" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-lora font-semibold text-lg mb-1">Response Time</h3>
                      <p className="text-charcoal dark:text-off-white">Typically within 24-48 hours</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="font-lora font-semibold text-xl mb-4">Preferred Communication</h3>
                  <p className="text-charcoal dark:text-off-white mb-4">
                    For project inquiries, please include:
                  </p>
                  <ul className="space-y-2 text-charcoal dark:text-off-white">
                    <li className="flex items-start">
                      <svg 
                        className="w-5 h-5 text-teal mr-2 mt-0.5 flex-shrink-0" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Brief project description</span>
                    </li>
                    <li className="flex items-start">
                      <svg 
                        className="w-5 h-5 text-teal mr-2 mt-0.5 flex-shrink-0" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Timeline and budget (if applicable)</span>
                    </li>
                    <li className="flex items-start">
                      <svg 
                        className="w-5 h-5 text-teal mr-2 mt-0.5 flex-shrink-0" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Preferred communication method</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <div className="bg-white dark:bg-charcoal rounded-lg shadow-sm p-8 border border-neutral-gray/30">
                  <h2 className="text-2xl font-lora font-bold mb-6">Send a Message</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                      <label htmlFor="name" className="block text-charcoal dark:text-off-white mb-2 font-medium">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-neutral-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent bg-off-white dark:bg-charcoal/10"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="email" className="block text-charcoal dark:text-off-white mb-2 font-medium">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-neutral-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent bg-off-white dark:bg-charcoal/10"
                        placeholder="your.email@example.com"
                      />
                      <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-charcoal dark:text-off-white mb-2 font-medium">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 border border-neutral-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent bg-off-white dark:bg-charcoal/10"
                        placeholder="What's this regarding?"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-charcoal dark:text-off-white mb-2 font-medium">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-neutral-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent bg-off-white dark:bg-charcoal/10"
                        placeholder="Your message here..."
                      ></textarea>
                      <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className={`w-full bg-teal hover:bg-teal/90 text-off-white font-medium py-3 px-6 rounded-full transition-colors duration-300 ${
                        state.submitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {state.submitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}