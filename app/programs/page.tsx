"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Programs() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-[#002366] to-[#6D0D0D] relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Programs & <span className="text-[#D71920]">Workshops</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive technical training programs designed to empower individuals with practical skills in renewable energy and solar technology.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Experiential Workshops */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Technical <span className="text-[#D71920]">Experiential Workshops</span></h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hands-on workshops designed to provide real-world experience in solar technology and renewable energy systems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Workshop 1 */}
            <div className="bg-white rounded-2xl modern-shadow border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/gallery/adsk1.jpeg"
                  alt="Solar Panel Installation Workshop"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-3">Solar Panel Installation</h3>
                <p className="text-gray-600 mb-4">Learn the fundamentals of solar panel installation, wiring, and system configuration.</p>

              </div>
            </div>

            {/* Workshop 2 */}
            <div className="bg-white rounded-2xl modern-shadow border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/gallery/adsk2.jpeg"
                  alt="Electrical Systems Workshop"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-3">Electrical Systems Design</h3>
                <p className="text-gray-600 mb-4">Master electrical system design principles for solar installations and renewable energy projects.</p>

              </div>
            </div>

            {/* Workshop 3 */}
            <div className="bg-white rounded-2xl modern-shadow border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/gallery/adsk3.jpeg"
                  alt="System Maintenance Workshop"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-3">System Maintenance & Troubleshooting</h3>
                <p className="text-gray-600 mb-4">Learn to maintain, troubleshoot, and optimize solar energy systems for maximum efficiency.</p>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Energy Installation Courses */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Solar Energy <span className="text-[#D71920]">Installation Courses</span></h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive courses designed to prepare you for a career in solar energy installation and maintenance.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Course 1 */}
            <div className="bg-white rounded-2xl p-8 modern-shadow border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#D71920] rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black">Basic Solar Installation</h3>
                  <p className="text-gray-600">Entry-level course</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#D71920] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Solar panel fundamentals
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#D71920] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Safety protocols
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#D71920] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Basic installation techniques
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#D71920] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  System testing and commissioning
                </li>
              </ul>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-[#D71920]">KES 25,000</span>
                <Link href="/contact" className="px-6 py-2 bg-[#D71920] text-white font-medium rounded-xl hover:bg-[#B3141A] transition-all duration-300">
                  Enroll Now
                </Link>
              </div>
            </div>

            {/* Course 2 */}
            <div className="bg-white rounded-2xl p-8 modern-shadow border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#D71920] rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black">Advanced Solar Systems</h3>
                  <p className="text-gray-600">Professional certification</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#D71920] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Advanced system design
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#D71920] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Grid-tied systems
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#D71920] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Battery storage systems
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#D71920] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Project management
                </li>
              </ul>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-[#D71920]">KES 45,000</span>
                <Link href="/contact" className="px-6 py-2 bg-[#D71920] text-white font-medium rounded-xl hover:bg-[#B3141A] transition-all duration-300">
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Youth Empowerment Initiatives */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Youth <span className="text-[#D71920]">Empowerment</span></h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Empowering young people through the Imara Program and other initiatives focused on skills development and career opportunities.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-black">Imara Program</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                The Imara Program is our flagship youth empowerment initiative designed to provide young people with 
                technical skills, mentorship, and career opportunities in the renewable energy sector.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-[#D71920] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Free technical training for youth aged 18-25</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-[#D71920] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Mentorship and career guidance</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-[#D71920] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Job placement assistance</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-[#D71920] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Entrepreneurship support and startup guidance</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-block px-8 py-3 bg-[#D71920] text-white font-semibold rounded-xl hover:bg-[#B3141A] transition-all duration-300">
                Apply for Imara Program
              </Link>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Youth Training Program"
                width={600}
                height={400}
                className="w-full h-80 object-cover rounded-2xl modern-shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Requirements */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Enrollment <span className="text-[#D71920]">Requirements</span></h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about enrolling in our programs and workshops.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 modern-shadow border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-[#D71920] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Basic Requirements</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Minimum age: 18 years</li>
                <li>• High school education</li>
                <li>• Basic computer skills</li>
                <li>• Physical fitness for field work</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 modern-shadow border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-[#D71920] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Program Duration</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Workshops: 2-5 days</li>
                <li>• Basic Course: 4 weeks</li>
                <li>• Advanced Course: 8 weeks</li>
                <li>• Imara Program: 12 weeks</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 modern-shadow border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-[#D71920] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Certification</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Industry-recognized certificates</li>
                <li>• Practical assessment</li>
                <li>• Portfolio development</li>
                <li>• Job placement support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#002366] to-[#6D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join our programs and become part of Kenya's renewable energy transformation. 
            Contact us today to learn more about enrollment and available opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-[#D71920] text-white font-semibold rounded-xl hover:bg-[#B3141A] transition-all duration-300">
              Contact Us
            </Link>
            <Link href="/gallery" className="px-8 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-[#002366] transition-all duration-300">
              View Gallery
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
} 