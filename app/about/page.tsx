"use client";

import Image from "../components/Image";
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
                src="/gallery/adsk1.jpeg"
                alt="Solar Installation Training"
                width={600}
                height={400}
                className="w-full h-80 object-cover rounded-2xl modern-shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our <span className="text-[#D71920]">Story</span></h2>
          </div>
          <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6">
            <p>
              ADESKILLS Kenya was born out of the ADESK project, a bold vision under French Educational International (FEI) and the French Embassy in Kenya, to close the gap between education and employable skills for Kenya’s youth and technicians. What started as a simple idea in 2022 has grown into a dynamic movement reshaping how vocational training is delivered in underserved communities.
            </p>
            <p>
              Founded by a beneficiary of the ADESK project, ADESKILLS set out to solve a pressing problem: too many skilled youth were being left behind due to a lack of hands-on training, outdated curricula, or limited access to tools and mentorship. We asked ourselves: What if we could make learning practical, mobile, and empowering?
            </p>
            <p>
              From the start, ADESKILLS Kenya focused on solar energy and electrical installation, two rapidly growing sectors with enormous potential for employment and impact. Early workshops piloted in Nairobi and Kiambu confirmed what we believed—experiential, skill-based learning transforms lives.
            </p>
            <p>
              Since its inception in August 2024, Adeskills has trained over 300 youth and technicians through hands-on workshops and field-based projects.
            </p>
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
            <div className="bg-white rounded-2xl modern-shadow border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="h-64 relative">
                <Image
                  src="/gallery/adesk1.jpeg"
                  alt="Raziq Swaleh"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-110"
                  style={{ objectPosition: 'center 25%' }}
                />
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
            <div className="bg-white rounded-2xl modern-shadow border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="h-64 relative">
                <Image
                  src="/gallery/adesk2.jpeg"
                  alt="Swaleh Ibrahim"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-110 object-top"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-black mb-2">Swaleh Ibrahim</h3>
                <p className="text-[#D71920] font-medium mb-3">Founder / Project Coordinator</p>
                <p className="text-gray-600 text-sm">
                  Managing project coordination and strategic development initiatives with expertise in renewable energy project management.
                </p>
              </div>
            </div>

            {/* Team Member 3 - Sharleen Kiragu */}
            <div className="bg-white rounded-2xl modern-shadow border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="h-64 relative">
                <Image
                  src="/gallery/adesk3.jpeg"
                  alt="Sharleen Kiragu"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-110 object-top"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-black mb-2">Sharleen Kiragu</h3>
                <p className="text-[#D71920] font-medium mb-3">Programs Administrator</p>
                <p className="text-gray-600 text-sm">
                  Responsible for managing and coordinating our training programs, ensuring a seamless learning experience for all students.
                </p>
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