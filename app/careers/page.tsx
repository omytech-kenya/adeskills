"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Careers() {
  const [activeTab, setActiveTab] = useState("opportunities");

  const opportunities = [
    {
      id: 1,
      title: "Solar Installation Trainer",
      type: "Full-time",
      location: "Nairobi, Kenya",
      description: "We're looking for experienced solar installation trainers to join our team and help develop the next generation of renewable energy professionals.",
      requirements: [
        "Minimum 3 years experience in solar installation",
        "Teaching or training experience preferred",
        "Strong communication skills",
        "Passion for renewable energy education"
      ],
      benefits: [
        "Competitive salary",
        "Health insurance",
        "Professional development opportunities",
        "Flexible working hours"
      ]
    },
    {
      id: 2,
      title: "Youth Program Coordinator",
      type: "Full-time",
      location: "Nairobi, Kenya",
      description: "Join our team to coordinate and expand our Imara Program, empowering young people through technical training and career development.",
      requirements: [
        "Degree in Education, Social Work, or related field",
        "Experience working with youth programs",
        "Project management skills",
        "Strong organizational abilities"
      ],
      benefits: [
        "Competitive salary",
        "Health insurance",
        "Professional development opportunities",
        "Flexible working hours"
      ]
    },
    {
      id: 3,
      title: "Technical Support Specialist",
      type: "Part-time",
      location: "Remote",
      description: "Provide technical support for our LMS platform and assist students with their online learning experience.",
      requirements: [
        "Technical background in IT or engineering",
        "Experience with learning management systems",
        "Customer service skills",
        "Problem-solving abilities"
      ],
      benefits: [
        "Flexible remote work",
        "Competitive hourly rate",
        "Professional development opportunities",
        "Work-life balance"
      ]
    }
  ];

  const internships = [
    {
      id: 1,
      title: "Renewable Energy Intern",
      duration: "3-6 months",
      location: "Nairobi, Kenya",
      description: "Gain hands-on experience in renewable energy projects and training program development.",
      responsibilities: [
        "Assist with training program coordination",
        "Support fieldwork and installations",
        "Help with documentation and reporting",
        "Participate in community outreach"
      ]
    },
    {
      id: 2,
      title: "Marketing & Communications Intern",
      duration: "3-6 months",
      location: "Nairobi, Kenya",
      description: "Support our marketing efforts and help communicate our mission to a wider audience.",
      responsibilities: [
        "Assist with social media management",
        "Help create marketing materials",
        "Support event coordination",
        "Contribute to content creation"
      ]
    }
  ];

  const volunteerPositions = [
    {
      id: 1,
      title: "Community Outreach Volunteer",
      commitment: "Flexible",
      location: "Various locations",
      description: "Help us reach more communities and spread awareness about renewable energy opportunities.",
      responsibilities: [
        "Participate in community events",
        "Help with awareness campaigns",
        "Support training sessions",
        "Assist with documentation"
      ]
    },
    {
      id: 2,
      title: "Technical Training Assistant",
      commitment: "Part-time",
      location: "Nairobi, Kenya",
      description: "Support our training programs by assisting instructors and helping participants.",
      responsibilities: [
        "Assist trainers during sessions",
        "Help with equipment setup",
        "Support participant learning",
        "Maintain training materials"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-[#002366] to-[#6D0D0D] relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Join Our <span className="text-[#D71920]">Team</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Be part of Kenya's renewable energy transformation. Join our mission to empower individuals through technical training and sustainable solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveTab("opportunities")}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === "opportunities"
                  ? "bg-[#D71920] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Job Opportunities
            </button>
            <button
              onClick={() => setActiveTab("internships")}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === "internships"
                  ? "bg-[#D71920] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Internships
            </button>
            <button
              onClick={() => setActiveTab("volunteer")}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === "volunteer"
                  ? "bg-[#D71920] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Volunteer
            </button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Job Opportunities */}
          {activeTab === "opportunities" && (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-black mb-4">Job <span className="text-[#D71920]">Opportunities</span></h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Join our team and contribute to Kenya's renewable energy future. We're looking for passionate individuals who share our vision.
                </p>
              </div>
              
              <div className="space-y-8">
                {opportunities.map((job) => (
                  <div key={job.id} className="bg-white rounded-2xl p-8 modern-shadow border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-black mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-4">
                          <span className="px-3 py-1 bg-[#D71920] text-white text-sm font-medium rounded-full">
                            {job.type}
                          </span>
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                            {job.location}
                          </span>
                        </div>
                      </div>
                      <Link 
                        href={`mailto:adeskills@outlook.com?subject=Application for ${job.title}`}
                        className="mt-4 lg:mt-0 px-6 py-2 bg-[#D71920] text-white font-medium rounded-xl hover:bg-[#B3141A] transition-all duration-300"
                      >
                        Apply Now
                      </Link>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{job.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-black mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="flex items-start">
                              <svg className="w-5 h-5 text-[#D71920] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-600">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-black mb-3">Benefits</h4>
                        <ul className="space-y-2">
                          {job.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <svg className="w-5 h-5 text-[#D71920] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-600">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Internships */}
          {activeTab === "internships" && (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-black mb-4">Internship <span className="text-[#D71920]">Programs</span></h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Gain valuable experience in renewable energy and contribute to meaningful projects while building your career.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {internships.map((internship) => (
                  <div key={internship.id} className="bg-white rounded-2xl p-8 modern-shadow border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-black">{internship.title}</h3>
                      <span className="px-3 py-1 bg-[#D71920] text-white text-sm font-medium rounded-full">
                        {internship.duration}
                      </span>
                    </div>
                    
                    <p className="text-gray-500 mb-2">{internship.location}</p>
                    <p className="text-gray-600 mb-6">{internship.description}</p>
                    
                    <h4 className="font-semibold text-black mb-3">Responsibilities</h4>
                    <ul className="space-y-2 mb-6">
                      {internship.responsibilities.map((resp, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-4 h-4 text-[#D71920] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600 text-sm">{resp}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      href={`mailto:adeskills@outlook.com?subject=Internship Application for ${internship.title}`}
                      className="inline-block px-6 py-2 bg-[#D71920] text-white font-medium rounded-xl hover:bg-[#B3141A] transition-all duration-300"
                    >
                      Apply for Internship
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Volunteer Positions */}
          {activeTab === "volunteer" && (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-black mb-4">Volunteer <span className="text-[#D71920]">Opportunities</span></h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Make a difference in your community by volunteering with ADESKILLS. Share your skills and help us empower others.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {volunteerPositions.map((position) => (
                  <div key={position.id} className="bg-white rounded-2xl p-8 modern-shadow border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-black">{position.title}</h3>
                      <span className="px-3 py-1 bg-[#D71920] text-white text-sm font-medium rounded-full">
                        {position.commitment}
                      </span>
                    </div>
                    
                    <p className="text-gray-500 mb-2">{position.location}</p>
                    <p className="text-gray-600 mb-6">{position.description}</p>
                    
                    <h4 className="font-semibold text-black mb-3">Responsibilities</h4>
                    <ul className="space-y-2 mb-6">
                      {position.responsibilities.map((resp, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-4 h-4 text-[#D71920] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600 text-sm">{resp}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      href={`mailto:adeskills@outlook.com?subject=Volunteer Application for ${position.title}`}
                      className="inline-block px-6 py-2 bg-[#D71920] text-white font-medium rounded-xl hover:bg-[#B3141A] transition-all duration-300"
                    >
                      Apply to Volunteer
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Why Work With <span className="text-[#D71920]">Us</span></h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join a team that's passionate about making a difference in Kenya's renewable energy sector.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 text-center modern-shadow border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-[#D71920] rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Meaningful Impact</h3>
              <p className="text-gray-600 text-sm">Contribute to Kenya's renewable energy transformation and empower communities.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center modern-shadow border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-[#D71920] rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Professional Growth</h3>
              <p className="text-gray-600 text-sm">Access to training, mentorship, and career development opportunities.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center modern-shadow border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-[#D71920] rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Collaborative Team</h3>
              <p className="text-gray-600 text-sm">Work with passionate professionals who share your vision for a sustainable future.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center modern-shadow border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-[#D71920] rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Flexible Environment</h3>
              <p className="text-gray-600 text-sm">Flexible working hours and a supportive work environment that values work-life balance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Application <span className="text-[#D71920]">Process</span></h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to join our team? Here's how to apply for opportunities with ADESKILLS.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D71920] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Submit Application</h3>
              <p className="text-gray-600">Send your CV and cover letter to adeskills@outlook.com with the position title in the subject line.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#D71920] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Interview Process</h3>
              <p className="text-gray-600">Selected candidates will be invited for an interview to discuss their experience and fit for the role.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#D71920] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Join Our Team</h3>
              <p className="text-gray-600">Successful candidates will receive an offer and join our mission to transform Kenya's renewable energy sector.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#002366] to-[#6D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Mission?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Be part of Kenya's renewable energy transformation. Apply today and help us empower individuals through technical training and sustainable solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:adeskills@outlook.com?subject=Career Application" 
              className="px-8 py-3 bg-[#D71920] text-white font-semibold rounded-xl hover:bg-[#B3141A] transition-all duration-300"
            >
              Apply Now
            </a>
            <Link href="/contact" className="px-8 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-[#002366] transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
} 