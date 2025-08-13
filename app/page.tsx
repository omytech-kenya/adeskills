"use client";

import Image from "./components/Image";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HeroCarousel from "./components/HeroCarousel";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "lms", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:adeskills@outlook.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroCarousel variant="home" />

      {/* About Section */}
      <section id="about" className="py-20 bg-[#F5F5F5] relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-black">
                About <span className="gradient-text">ADESKILLS</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                ADESKILLS bridges the gap in technical education by providing
                accessible, high-quality training in solar technology. We focus
                on experiential learning, ensuring our students are
                industry-ready.
              </p>
              <Link
                href="/about"
                className="inline-block px-6 py-3 bg-[#D71920] text-white font-semibold rounded-xl hover:bg-[#B3141A] transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/gallery/adsk4.jpeg"
                alt="Solar Panels Installation Close-up"
                width={600}
                height={400}
                className="w-full h-80 object-cover rounded-2xl modern-shadow-lg modern-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-2xl modern-shadow border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 modern-card animate-fade-in-up">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/gallery/adsk5.jpeg"
                  alt="People in a Training Session"
                  fill
                  className="object-cover modern-image"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-3">
                  Experiential Training Programs
                </h3>
                <p className="text-gray-600">
                  Hands-on training programs designed to provide real-world
                  experience in solar technology.
                </p>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-2xl modern-shadow border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 modern-card animate-fade-in-up">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/gallery/adsk6.jpeg"
                  alt="Technicians Installing Solar Panels"
                  fill
                  className="object-cover modern-image"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-3">
                  Solar Installation Services
                </h3>
                <p className="text-gray-600">
                  Professional solar installation services with certified
                  technicians and quality assurance.
                </p>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-2xl modern-shadow border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 modern-card animate-fade-in-up">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/gallery/adsk7.jpeg"
                  alt="Engineer with Helmet Reviewing Plans"
                  fill
                  className="object-cover modern-image"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-3">
                  Technical Skill Development
                </h3>
                <p className="text-gray-600">
                  Comprehensive skill development programs for technical
                  professionals in renewable energy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              What Our Trainees Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <p className="text-gray-700 mb-4">
                "The training program at ADESKILLS transformed my career. The
                hands-on experience with solar installations gave me the
                confidence to start my own business."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-black">John Kamau</h4>
                  <p className="text-gray-600 text-sm">Solar Technician</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <p className="text-gray-700 mb-4">
                "The LMS platform is excellent for learning at my own pace. The
                certification I received opened many doors in the renewable
                energy sector."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-black">Sarah Muthoni</h4>
                  <p className="text-gray-600 text-sm">Energy Consultant</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Image
              src="/gallery/adsk2.jpeg"
              alt="Happy Group Photo"
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-20 bg-[#F5F5F5] relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to start your journey in solar technology? Contact us today
              and let's discuss how we can help you achieve your goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Details */}
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white rounded-2xl p-6 sm:p-8 modern-shadow border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 modern-card">
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-6">
                  Contact Information
                </h3>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 w-10 sm:w-12 h-10 sm:h-12 gradient-bg rounded-xl flex items-center justify-center animate-float">
                      <svg
                        className="w-5 sm:w-6 h-5 sm:h-6 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1 text-sm sm:text-base">
                        Email Address
                      </h4>
                      <p className="text-gray-600 text-sm sm:text-base">
                        adeskills@outlook.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 w-10 sm:w-12 h-10 sm:h-12 gradient-bg rounded-xl flex items-center justify-center animate-float">
                      <svg
                        className="w-5 sm:w-6 h-5 sm:h-6 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1 text-sm sm:text-base">
                        Phone Numbers
                      </h4>
                      <p className="text-gray-600 text-sm sm:text-base">
                        +254 795 133 107
                      </p>
                      <p className="text-gray-600 text-sm sm:text-base">
                        +254 721 933 152
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 w-10 sm:w-12 h-10 sm:h-12 gradient-bg rounded-xl flex items-center justify-center animate-float">
                      <svg
                        className="w-5 sm:w-6 h-5 sm:h-6 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1 text-sm sm:text-base">
                        Office Address
                      </h4>
                      <p className="text-gray-600 text-sm sm:text-base">
                        P.O.Box 51649-00100
                      </p>
                      <p className="text-gray-600 text-sm sm:text-base">
                        Nairobi, Kenya
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 modern-shadow border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 modern-card">
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-6">
                Send us a Message
              </h3>
              <form
                className="space-y-4 sm:space-y-6"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your full name"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D71920] focus:border-transparent transition-all duration-200 placeholder-gray-500 placeholder-opacity-100 modern-input text-sm sm:text-base text-black"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email address"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D71920] focus:border-transparent transition-all duration-200 placeholder-gray-500 placeholder-opacity-100 modern-input text-sm sm:text-base text-black"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D71920] focus:border-transparent transition-all duration-200 placeholder-gray-500 placeholder-opacity-100 modern-input text-sm sm:text-base text-black"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D71920] focus:border-transparent transition-all duration-200 text-black modern-input text-sm sm:text-base"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                  >
                    <option value="" className="text-gray-500">
                      Select a subject
                    </option>
                    <option value="training" className="text-black">
                      Training Programs
                    </option>
                    <option value="installation" className="text-black">
                      Solar Installation
                    </option>
                    <option value="lms" className="text-black">
                      LMS Platform
                    </option>
                    <option value="consultation" className="text-black">
                      Consultation
                    </option>
                    <option value="other" className="text-black">
                      Other
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your inquiry..."
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D71920] focus:border-transparent transition-all duration-200 resize-none placeholder-gray-500 placeholder-opacity-100 modern-input text-sm sm:text-base text-black"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-[#D71920] text-white font-semibold rounded-xl hover:bg-[#B3141A] transition-all duration-300 transform hover:-translate-y-1 modern-btn text-sm sm:text-base"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <svg
                      className="w-4 sm:w-5 h-4 sm:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                    <span>Send Message</span>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
