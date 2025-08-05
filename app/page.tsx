"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "lms", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 modern-navbar shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl sm:text-2xl font-bold gradient-text">ADESKILLS</h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a 
                href="#home" 
                className={`nav-link transition-all duration-300 hover:scale-105 ${
                  activeSection === "home" 
                    ? "active" 
                    : "text-gray-700 hover:text-black"
                }`}
              >
                Home
              </a>
              <a 
                href="#about" 
                className={`nav-link transition-all duration-300 hover:scale-105 ${
                  activeSection === "about" 
                    ? "active" 
                    : "text-gray-700 hover:text-black"
                }`}
              >
                About
              </a>
              <a 
                href="#services" 
                className={`nav-link transition-all duration-300 hover:scale-105 ${
                  activeSection === "services" 
                    ? "active" 
                    : "text-gray-700 hover:text-black"
                }`}
              >
                Services
              </a>
              <a 
                href="#lms" 
                className={`nav-link transition-all duration-300 hover:scale-105 ${
                  activeSection === "lms" 
                    ? "active" 
                    : "text-gray-700 hover:text-black"
                }`}
              >
                LMS
              </a>
              <a 
                href="#contact" 
                className={`nav-link transition-all duration-300 hover:scale-105 ${
                  activeSection === "contact" 
                    ? "active" 
                    : "text-gray-700 hover:text-black"
                }`}
              >
                Contact
              </a>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/login" className="px-4 py-2 text-gray-700 hover:text-black transition-all duration-300 hover:scale-105">
                Login
              </Link>
              <Link href="/enroll" className="px-6 py-2 gradient-bg text-black font-medium rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 modern-btn">
                Enroll Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-black transition-all duration-300 p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden animate-fade-in-up">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
                <a href="#home" className="block px-3 py-3 text-gray-700 hover:text-black transition-all duration-300 hover:bg-gray-50 rounded-lg">Home</a>
                <a href="#about" className="block px-3 py-3 text-gray-700 hover:text-black transition-all duration-300 hover:bg-gray-50 rounded-lg">About</a>
                <a href="#services" className="block px-3 py-3 text-gray-700 hover:text-black transition-all duration-300 hover:bg-gray-50 rounded-lg">Services</a>
                <a href="#lms" className="block px-3 py-3 text-gray-700 hover:text-black transition-all duration-300 hover:bg-gray-50 rounded-lg">LMS</a>
                <a href="#contact" className="block px-3 py-3 text-gray-700 hover:text-black transition-all duration-300 hover:bg-gray-50 rounded-lg">Contact</a>
                <div className="pt-4 space-y-3 border-t border-gray-100 mt-4">
                  <Link href="/login" className="w-full px-4 py-3 text-gray-700 hover:text-black transition-all duration-300 text-left hover:bg-gray-50 rounded-lg block">
                    Login
                  </Link>
                  <Link href="/enroll" className="w-full px-4 py-3 gradient-bg text-black font-medium rounded-xl hover:shadow-lg transition-all duration-300 block">
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-12 sm:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 animate-fade-in-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
                Enhancing Technical Skills for{" "}
                <span className="gradient-text">Kenya's Renewable Energy Future</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Empowering individuals through technical training and solar energy solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/enroll" className="px-6 sm:px-8 py-3 sm:py-4 gradient-bg text-black font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 modern-btn text-sm sm:text-base text-center">
                  Enroll in Training
                </Link>
                <Link href="#contact" className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 transition-all duration-300 hover:shadow-md text-sm sm:text-base text-center">
                  Get a Quote
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <Image
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Solar Technician Working"
                width={600}
                height={400}
                className="w-full h-64 sm:h-96 object-cover rounded-2xl modern-shadow-lg modern-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#F5F5F5] relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-black">About <span className="gradient-text">ADESKILLS</span></h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                ADESKILLS bridges the gap in technical education by providing accessible, high-quality training in solar technology. We focus on experiential learning, ensuring our students are industry-ready.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Solar Panels Installation Close-up"
                width={600}
                height={400}
                className="w-full h-80 object-cover rounded-2xl modern-shadow-lg modern-image"
              />
            </div>
          </div>
          
          {/* Partners Section */}
          <div className="mt-16 pt-16 border-t border-gray-200">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">Our <span className="gradient-text">Partners</span></h3>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                We collaborate with leading organizations to deliver world-class training and certification programs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Schneider Electric */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 modern-shadow border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 modern-card">
                <div className="h-32 sm:h-40 relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center rounded-xl mb-6">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-gray-400 mb-2">Schneider Electric</div>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-lg sm:text-xl font-semibold text-black mb-3">Schneider Electric</h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Global leader in energy management and automation, providing cutting-edge technology solutions and industry expertise for our training programs.
                  </p>
                </div>
              </div>

              {/* French Education International */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 modern-shadow border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 modern-card">
                <div className="h-32 sm:h-40 relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center rounded-xl mb-6">
                  <div className="text-center">
                    <div className="text-lg sm:text-xl font-bold text-gray-400 mb-2">French Education</div>
                    <div className="text-lg sm:text-xl font-bold text-gray-400 mb-2">International</div>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-lg sm:text-xl font-semibold text-black mb-3">French Education International</h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    International education partner providing global standards and certification frameworks for our technical training programs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our <span className="gradient-text">Services</span></h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-2xl modern-shadow border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 modern-card animate-fade-in-up">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="People in a Training Session"
                  fill
                  className="object-cover modern-image"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-3">Experiential Training Programs</h3>
                <p className="text-gray-600">Hands-on training programs designed to provide real-world experience in solar technology.</p>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-2xl modern-shadow border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 modern-card animate-fade-in-up">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Technicians Installing Solar Panels"
                  fill
                  className="object-cover modern-image"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-3">Solar Installation Services</h3>
                <p className="text-gray-600">Professional solar installation services with certified technicians and quality assurance.</p>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-2xl modern-shadow border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 modern-card animate-fade-in-up">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Engineer with Helmet Reviewing Plans"
                  fill
                  className="object-cover modern-image"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-3">Technical Skill Development</h3>
                <p className="text-gray-600">Comprehensive skill development programs for technical professionals in renewable energy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LMS Section */}
      <section id="lms" className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-black">Learning Management System (LMS)</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our online LMS platform ensures equitable access to training materials, digital lessons, and certification for students across Kenya. Enroll, track progress, and learn at your own pace.
              </p>
              <button className="px-8 py-4 bg-[#FFC107] text-black font-semibold rounded-lg hover:bg-[#E6A800] transition-colors shadow-sm">
                Explore LMS
              </button>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="LMS Dashboard Sample"
                width={600}
                height={400}
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Meet Our <span className="gradient-text">Team</span></h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Our dedicated team of professionals is committed to empowering individuals through quality technical training and solar energy solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Team Member 1 - Raziq Swaleh */}
            <div className="bg-white rounded-2xl modern-shadow border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 modern-card">
              <div className="h-48 sm:h-64 relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl sm:text-4xl font-bold text-gray-400 mb-2">ADESKILLS</div>
                </div>
              </div>
              <div className="p-4 sm:p-6 text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">Raziq Swaleh</h3>
                <p className="text-[#FFC107] font-medium mb-3 text-sm sm:text-base">Founder / Trainer / Practitioner</p>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Leading technical training programs and hands-on solar installation practices.
                </p>
              </div>
            </div>

            {/* Team Member 2 - Swaleh Ibrahim */}
            <div className="bg-white rounded-2xl modern-shadow border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 modern-card">
              <div className="h-48 sm:h-64 relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl sm:text-4xl font-bold text-gray-400 mb-2">ADESKILLS</div>
                </div>
              </div>
              <div className="p-4 sm:p-6 text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">Swaleh Ibrahim</h3>
                <p className="text-[#FFC107] font-medium mb-3 text-sm sm:text-base">Founder / Project Coordinator</p>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Managing project coordination and strategic development initiatives.
                </p>
              </div>
            </div>

            {/* Team Member 3 - Grace Njeri */}
            <div className="bg-white rounded-2xl modern-shadow border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 modern-card">
              <div className="h-48 sm:h-64 relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl sm:text-4xl font-bold text-gray-400 mb-2">ADESKILLS</div>
                </div>
              </div>
              <div className="p-4 sm:p-6 text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">Grace Njeri</h3>
                <p className="text-[#FFC107] font-medium mb-3 text-sm sm:text-base">Trainer</p>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Specialized in technical skill development and experiential learning programs.
                </p>
              </div>
            </div>

            {/* Team Member 4 - Stephen Ogutu */}
            <div className="bg-white rounded-2xl modern-shadow border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 modern-card">
              <div className="h-48 sm:h-64 relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl sm:text-4xl font-bold text-gray-400 mb-2">ADESKILLS</div>
                </div>
              </div>
              <div className="p-4 sm:p-6 text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">Stephen Ogutu</h3>
                <p className="text-[#FFC107] font-medium mb-3 text-sm sm:text-base">Trainer</p>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Expert in solar technology training and practical implementation.
                </p>
              </div>
            </div>

            {/* Team Member 5 - Sharleen Kiragu */}
            <div className="bg-white rounded-2xl modern-shadow border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 modern-card">
              <div className="h-48 sm:h-64 relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl sm:text-4xl font-bold text-gray-400 mb-2">ADESKILLS</div>
                </div>
              </div>
              <div className="p-4 sm:p-6 text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">Sharleen Kiragu</h3>
                <p className="text-[#FFC107] font-medium mb-3 text-sm sm:text-base">Trainer / Practitioner</p>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Combining theoretical knowledge with practical solar installation expertise.
                </p>
              </div>
            </div>

            {/* Join Our Team Card */}
            <div className="bg-gradient-to-br from-[#FFC107] to-[#FFD54F] rounded-2xl modern-shadow border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 modern-card">
              <div className="h-48 sm:h-64 relative overflow-hidden flex items-center justify-center">
                <div className="text-center text-black">
                  <div className="text-4xl sm:text-6xl mb-4">🌟</div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">Join Our Team</h3>
                  <p className="text-xs sm:text-sm opacity-90">
                    Be part of Kenya's renewable energy future
                  </p>
                </div>
              </div>
              <div className="p-4 sm:p-6 text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">Career Opportunities</h3>
                <p className="text-black/80 text-xs sm:text-sm mb-4">
                  We're always looking for passionate individuals to join our mission.
                </p>
                <button className="px-4 sm:px-6 py-2 sm:py-2 bg-black text-white font-medium rounded-xl hover:bg-gray-800 transition-all duration-300 text-sm sm:text-base">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">What Our Trainees Say</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <p className="text-gray-700 mb-4">
                "The training program at ADESKILLS transformed my career. The hands-on experience with solar installations gave me the confidence to start my own business."
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
                "The LMS platform is excellent for learning at my own pace. The certification I received opened many doors in the renewable energy sector."
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
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
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
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Get in <span className="gradient-text">Touch</span></h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to start your journey in solar technology? Contact us today and let's discuss how we can help you achieve your goals.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Details */}
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white rounded-2xl p-6 sm:p-8 modern-shadow border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 modern-card">
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-6">Contact Information</h3>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 w-10 sm:w-12 h-10 sm:h-12 gradient-bg rounded-xl flex items-center justify-center animate-float">
                      <svg className="w-5 sm:w-6 h-5 sm:h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1 text-sm sm:text-base">Email Address</h4>
                      <p className="text-gray-600 text-sm sm:text-base">adeskills@outlook.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 w-10 sm:w-12 h-10 sm:h-12 gradient-bg rounded-xl flex items-center justify-center animate-float">
                      <svg className="w-5 sm:w-6 h-5 sm:h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1 text-sm sm:text-base">Phone Numbers</h4>
                      <p className="text-gray-600 text-sm sm:text-base">+254 795 133 107</p>
                      <p className="text-gray-600 text-sm sm:text-base">+254 721 933 152</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 w-10 sm:w-12 h-10 sm:h-12 gradient-bg rounded-xl flex items-center justify-center animate-float">
                      <svg className="w-5 sm:w-6 h-5 sm:h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1 text-sm sm:text-base">Office Address</h4>
                      <p className="text-gray-600 text-sm sm:text-base">P.O.Box 51649-00100</p>
                      <p className="text-gray-600 text-sm sm:text-base">Nairobi, Kenya</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 sm:p-8 modern-shadow border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 modern-card">
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-6">Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm sm:text-base">Monday - Friday</span>
                    <span className="font-semibold text-black text-sm sm:text-base">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm sm:text-base">Saturday</span>
                    <span className="font-semibold text-black text-sm sm:text-base">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm sm:text-base">Sunday</span>
                    <span className="font-semibold text-black text-sm sm:text-base">Closed</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 modern-shadow border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 modern-card">
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-6">Send us a Message</h3>
              <form className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="Enter your first name"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFC107] focus:border-transparent transition-all duration-200 placeholder-gray-500 placeholder-opacity-100 modern-input text-sm sm:text-base text-black"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Enter your last name"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFC107] focus:border-transparent transition-all duration-200 placeholder-gray-500 placeholder-opacity-100 modern-input text-sm sm:text-base text-black"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email address"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFC107] focus:border-transparent transition-all duration-200 placeholder-gray-500 placeholder-opacity-100 modern-input text-sm sm:text-base text-black"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFC107] focus:border-transparent transition-all duration-200 placeholder-gray-500 placeholder-opacity-100 modern-input text-sm sm:text-base text-black"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFC107] focus:border-transparent transition-all duration-200 text-black modern-input text-sm sm:text-base"
                  >
                    <option value="" className="text-gray-500">Select a subject</option>
                    <option value="training" className="text-black">Training Programs</option>
                    <option value="installation" className="text-black">Solar Installation</option>
                    <option value="lms" className="text-black">LMS Platform</option>
                    <option value="consultation" className="text-black">Consultation</option>
                    <option value="other" className="text-black">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your inquiry..."
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFC107] focus:border-transparent transition-all duration-200 resize-none placeholder-gray-500 placeholder-opacity-100 modern-input text-sm sm:text-base text-black"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 gradient-bg text-black font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 modern-btn text-sm sm:text-base"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <span>Send Message</span>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4">ADESKILLS</h3>
              <p className="text-gray-300 mb-4">
                Enhancing technical skills and supporting the development of solar energy in Kenya.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
                <li><a href="#lms" className="text-gray-300 hover:text-white transition-colors">LMS</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-yellow-400 hover:to-orange-500 transition-all duration-300 transform hover:scale-110">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-yellow-400 hover:to-orange-500 transition-all duration-300 transform hover:scale-110">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-yellow-400 hover:to-orange-500 transition-all duration-300 transform hover:scale-110">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-yellow-400 hover:to-orange-500 transition-all duration-300 transform hover:scale-110">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-300">© 2025 ADESKILLS Kenya. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
