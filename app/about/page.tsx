"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-[#002366] to-[#6D0D0D] relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              About <span className="text-[#D71920]">ADESKILLS</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Empowering Kenya's renewable energy future through innovative technical training and sustainable solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-black">Our <span className="text-[#D71920]">Mission</span></h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To bridge the gap in technical education by providing accessible, high-quality training in solar technology. 
                We focus on experiential learning, ensuring our students are industry-ready and equipped with the skills 
                needed to drive Kenya's renewable energy transformation.
              </p>
              <div className="bg-[#F5F5F5] p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-black mb-3">Our Vision</h3>
                <p className="text-gray-700">
                  To be the leading technical training institution in East Africa, empowering individuals and communities 
                  through sustainable energy solutions and innovative education.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Solar Installation Training"
                width={600}
                height={400}
                className="w-full h-80 object-cover rounded-2xl modern-shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Meet Our <span className="text-[#D71920]">Team</span></h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our dedicated team of professionals is committed to empowering individuals through quality technical training and solar energy solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 - Raziq Swaleh */}
            <div className="bg-white rounded-2xl modern-shadow border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-400 mb-2">ADESKILLS</div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-black mb-2">Raziq Swaleh</h3>
                <p className="text-[#D71920] font-medium mb-3">Founder / Trainer / Practitioner</p>
                <p className="text-gray-600 text-sm">
                  Leading technical training programs and hands-on solar installation practices with over 10 years of experience in renewable energy.
                </p>
              </div>
            </div>

            {/* Team Member 2 - Swaleh Ibrahim */}
            <div className="bg-white rounded-2xl modern-shadow border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-400 mb-2">ADESKILLS</div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-black mb-2">Swaleh Ibrahim</h3>
                <p className="text-[#D71920] font-medium mb-3">Founder / Project Coordinator</p>
                <p className="text-gray-600 text-sm">
                  Managing project coordination and strategic development initiatives with expertise in renewable energy project management.
                </p>
              </div>
            </div>

            {/* Team Member 3 - Grace Njeri */}
            <div className="bg-white rounded-2xl modern-shadow border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-400 mb-2">ADESKILLS</div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-black mb-2">Grace Njeri</h3>
                <p className="text-[#D71920] font-medium mb-3">Senior Trainer</p>
                <p className="text-gray-600 text-sm">
                  Specialized in technical skill development and experiential learning programs with a focus on youth empowerment.
                </p>
              </div>
            </div>

            {/* Team Member 4 - Stephen Ogutu */}
            <div className="bg-white rounded-2xl modern-shadow border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-400 mb-2">ADESKILLS</div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-black mb-2">Stephen Ogutu</h3>
                <p className="text-[#D71920] font-medium mb-3">Technical Trainer</p>
                <p className="text-gray-600 text-sm">
                  Expert in solar technology training and practical implementation with extensive field experience.
                </p>
              </div>
            </div>

            {/* Team Member 5 - Sharleen Kiragu */}
            <div className="bg-white rounded-2xl modern-shadow border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-400 mb-2">ADESKILLS</div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-black mb-2">Sharleen Kiragu</h3>
                <p className="text-[#D71920] font-medium mb-3">Trainer / Practitioner</p>
                <p className="text-gray-600 text-sm">
                  Combining theoretical knowledge with practical solar installation expertise and community outreach.
                </p>
              </div>
            </div>

            {/* Join Our Team Card */}
            <div className="bg-gradient-to-br from-[#002366] to-[#6D0D0D] rounded-2xl modern-shadow border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 relative overflow-hidden flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🌟</div>
                  <h3 className="text-xl font-semibold mb-2">Join Our Team</h3>
                  <p className="text-sm opacity-90">
                    Be part of Kenya's renewable energy future
                  </p>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-2">Career Opportunities</h3>
                <p className="text-white/80 text-sm mb-4">
                  We're always looking for passionate individuals to join our mission.
                </p>
                <Link href="/careers" className="inline-block px-6 py-2 bg-[#D71920] text-white font-medium rounded-xl hover:bg-[#B3141A] transition-all duration-300">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our <span className="text-[#D71920]">Partners</span></h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We collaborate with leading organizations to deliver world-class training and certification programs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Schneider Electric */}
            <div className="bg-white rounded-2xl p-8 modern-shadow border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-40 relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center rounded-xl mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-400 mb-2">Schneider Electric</div>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold text-black mb-3">Schneider Electric</h4>
                <p className="text-gray-600">
                  Global leader in energy management and automation, providing cutting-edge technology solutions and industry expertise for our training programs.
                </p>
              </div>
            </div>

            {/* French Education International */}
            <div className="bg-white rounded-2xl p-8 modern-shadow border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-40 relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center rounded-xl mb-6">
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-400 mb-2">French Education</div>
                  <div className="text-xl font-bold text-gray-400 mb-2">International</div>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold text-black mb-3">French Education International</h4>
                <p className="text-gray-600">
                  International education partner providing global standards and certification frameworks for our technical training programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our <span className="text-[#D71920]">Impact</span></h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transforming lives and communities through technical education and renewable energy solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center modern-shadow border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl font-bold text-[#D71920] mb-2">500+</div>
              <p className="text-gray-600">Trained Professionals</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center modern-shadow border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl font-bold text-[#D71920] mb-2">50+</div>
              <p className="text-gray-600">Solar Installations</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center modern-shadow border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl font-bold text-[#D71920] mb-2">15+</div>
              <p className="text-gray-600">Partner Organizations</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center modern-shadow border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl font-bold text-[#D71920] mb-2">95%</div>
              <p className="text-gray-600">Employment Rate</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 