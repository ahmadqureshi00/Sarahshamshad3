import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-off-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-lora font-bold mb-4">Sarah Shamshad</h2>
            <p className="text-neutral-gray mb-6 max-w-md">
              Strategic Communication and Creative Storytelling Professional bridging journalism, content creation, and academic research.
            </p>
            <div className="flex space-x-4">
              <Link href="https://pk.linkedin.com/in/sarah-shamshad-bbbb0532" target="_blank" rel="noopener noreferrer" className="hover:text-teal transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-lora font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-neutral-gray hover:text-teal transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-neutral-gray hover:text-teal transition-colors">About</Link></li>
              <li><Link href="/portfolio" className="text-neutral-gray hover:text-teal transition-colors">Portfolio</Link></li>
              <li><Link href="/certifications" className="text-neutral-gray hover:text-teal transition-colors">Certifications</Link></li>
              <li><Link href="/services" className="text-neutral-gray hover:text-teal transition-colors">Services</Link></li>
              <li><Link href="/blog" className="text-neutral-gray hover:text-teal transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-neutral-gray hover:text-teal transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-lora font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-neutral-gray">
              <li>Email: sarahpostcolonial@gmail.com</li>
              <li>Phone: 0300-7321979</li>
              <li>Location: Multan, Pakistan</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-gray/20 mt-8 pt-8 text-center text-neutral-gray">
          <p>&copy; {currentYear} Sarah Shamshad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}