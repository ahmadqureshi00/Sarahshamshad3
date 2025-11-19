"use client";

import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import certifications from '../../src/data/certifications';
import Image from 'next/image';

// Get unique categories
const categories = ['All', ...new Set(certifications.map(cert => cert.category))];

export default function Certifications() {
  const [filter, setFilter] = useState('All');
  const [filteredCerts, setFilteredCerts] = useState(certifications);

  useEffect(() => {
    if (filter === 'All') {
      setFilteredCerts(certifications);
    } else {
      setFilteredCerts(certifications.filter(cert => cert.category === filter));
    }
  }, [filter]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-4">Certifications & Awards</h1>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            A comprehensive collection of my academic and professional achievements.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full font-medium text-sm transition-colors
                  ${filter === category 
                    ? 'bg-teal-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCerts.map((cert) => (
              <div key={cert.title} className="border rounded-lg overflow-hidden shadow-md group">
                {/* Wrap image in a link to open it in a new tab */}
                <a href={cert.image} target="_blank" rel="noopener noreferrer">
                  <div className="w-full h-64 relative">
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
                        layout="fill" 
                        className="object-contain p-2 group-hover:scale-105 transition-transform"
                      />
                    )}
                  </div>
                </a>
                
                <div className="p-4">
                  <h3 className="font-bold text-lg">{cert.title}</h3>
                  <p className="text-gray-600">{cert.org}</p>
                  {cert.date && <p className="text-sm text-gray-500">{cert.date}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}