"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  {
    image: "/gallery/adsk1.jpeg",
    heading: "Solar Installation Workshops",
    subtext: "Empowering communities with hands-on solar training led by industry experts.",
    cta: { text: "Learn More", href: "/programs" },
  },
  {
    image: "/gallery/adsk2.jpeg",
    heading: "Youth Empowerment & Skills Training",
    subtext: "Building brighter futures through technical education and mentorship.",
    cta: { text: "Our Impact", href: "/about" },
  },
  {
    image: "/gallery/adsk3.jpeg",
    heading: "Technical Hands-On Learning",
    subtext: "Experience real-world, practical learning environments at ADESK.",
    cta: { text: "Get Started", href: "/enroll" },
  },
];

export default function HeroCarousel() {
  return (
    <div className="relative w-full h-[60vh] md:h-[80vh]">
      <Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        effect="fade"
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="w-full h-[60vh] md:h-[80vh] flex items-center justify-center relative bg-center bg-cover"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0" style={{ background: "rgba(80, 112, 143, 0.6)" }} />
              {/* Content */}
              <div className="relative z-10 text-center px-4 w-full flex flex-col items-center justify-center">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                  {slide.heading}
                </h1>
                <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto drop-shadow">
                  {slide.subtext}
                </p>
                <a
                  href={slide.cta.href}
                  className="inline-block px-8 py-4 bg-[#D71920] text-white font-semibold rounded-xl hover:bg-[#B3141A] transition-all duration-300 text-lg shadow-lg"
                >
                  {slide.cta.text}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
} 