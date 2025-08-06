"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { useState } from "react";

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

export default function HeroCarousel({ variant }: { variant?: 'home' | 'default' }) {
  const [activeIdx, setActiveIdx] = useState(0);
  return (
    <div className="relative w-full min-h-[calc(100vh-4rem)] md:h-[80vh]">
      <Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        effect="fade"
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full h-full"
        onSlideChange={swiper => setActiveIdx(swiper.realIndex)}
        onInit={swiper => setActiveIdx(swiper.realIndex)}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="w-full min-h-[calc(100vh-4rem)] md:h-[80vh] flex items-center justify-center relative bg-center bg-cover"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div
                className="absolute inset-0"
                style={{ background: variant === 'home' ? "rgba(80,112,143,0.8)" : "rgba(80,112,143,0.6)" }}
              />
              {/* Content */}
              <div className={`relative z-10 w-full flex flex-col items-center justify-center px-4 ${variant === 'home' ? 'text-center' : ''}`}
                style={variant === 'home' ? { maxWidth: 800, margin: '0 auto', paddingTop: 32, paddingBottom: 32 } : {}}>
                <h1
                  className={`font-bold text-white mb-4 drop-shadow-lg transition-all duration-700 ${variant === 'home' ? 'text-4xl md:text-6xl leading-tight md:mb-6' : 'text-3xl md:text-5xl'}
                    ${activeIdx === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                  `}
                  style={{ transitionDelay: activeIdx === idx ? '0.1s' : '0s' }}
                >
                  {slide.heading}
                </h1>
                <p
                  className={`mb-8 mx-auto drop-shadow transition-all duration-700 ${variant === 'home' ? 'text-xl md:text-2xl text-gray-200 md:mb-10 max-w-2xl' : 'text-lg md:text-2xl text-gray-200 max-w-2xl'}
                    ${activeIdx === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                  `}
                  style={{ lineHeight: variant === 'home' ? 1.5 : undefined, transitionDelay: activeIdx === idx ? '0.3s' : '0s' }}
                >
                  {slide.subtext}
                </p>
                <a
                  href={slide.cta.href}
                  className={`inline-block px-10 py-4 bg-[#D71920] text-white font-semibold rounded-xl hover:bg-[#B3141A] transition-all duration-700 text-lg shadow-lg ${variant === 'home' ? 'text-xl md:text-2xl' : ''}
                    ${activeIdx === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                  `}
                  style={{ letterSpacing: variant === 'home' ? 1 : undefined, transitionDelay: activeIdx === idx ? '0.5s' : '0s' }}
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