import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";

// Load fonts according to brand guidelines
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Sarah Shamshad - Strategic Communication Professional",
    default: "Sarah Shamshad | Journalist, Podcaster & Academic",
  },
  description: "Portfolio of Sarah Shamshad - PhD Scholar, Journalist, and Podcaster specializing in strategic communication and IELTS training.",
  keywords: "journalist, podcaster, content creator, PhD scholar, entrepreneur, communication, storytelling, media, academia, research, writing, IELTS",
  authors: [{ name: "Sarah Shamshad" }],
  creator: "Sarah Shamshad",
  publisher: "Sarah Shamshad",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sarahshamshad.com",
    title: "Sarah Shamshad | Strategic Communication Professional",
    description: "Portfolio showcasing work in journalism, podcasting, content strategy, academic research, and entrepreneurship.",
    siteName: "Sarah Shamshad Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarah Shamshad | Strategic Communication Professional",
    description: "Portfolio showcasing work in journalism, podcasting, content strategy, academic research, and entrepreneurship.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable} ${inter.variable} font-sans antialiased bg-off-white dark:bg-charcoal text-charcoal dark:text-off-white min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}