"use client";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HeroCarousel from "../components/HeroCarousel";

const images = [
  "/gallery/adsk1.jpeg",
  "/gallery/adsk2.jpeg",
  "/gallery/adsk3.jpeg",
  "/gallery/adsk4.jpeg",
  "/gallery/adsk5.jpeg",
  "/gallery/adsk6.jpeg",
  "/gallery/adsk7.jpeg",
  "/gallery/adsk8.jpeg",
  "/gallery/adsk9.jpeg",
  "/gallery/adsk10.jpeg",
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroCarousel />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {images.map((src, idx) => (
              <div key={src} className="bg-white rounded-2xl shadow border border-gray-100 overflow-hidden">
                <img
                  src={src}
                  alt={`ADESK Gallery ${idx + 1}`}
                  style={{ width: "100%", height: "300px", objectFit: "cover", display: "block" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
} 