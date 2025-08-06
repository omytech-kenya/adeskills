"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Resources() {
  const [activeTab, setActiveTab] = useState("brochures");

  const brochures = [
    {
      id: 1,
      title: "Solar Installation Training Brochure",
      description: "Comprehensive guide to our solar installation training programs and courses.",
      size: "2.3 MB",
      type: "PDF"
    },
    {
      id: 2,
      title: "Imara Program Information",
      description: "Detailed information about our youth empowerment program and application process.",
      size: "1.8 MB",
      type: "PDF"
    },
    {
      id: 3,
      title: "Career Opportunities Guide",
      description: "Explore career opportunities in the renewable energy sector and job placement support.",
      size: "1.5 MB",
      type: "PDF"
    }
  ];

  const blogArticles = [
    {
      id: 1,
      title: "The Future of Solar Energy in Kenya",
      excerpt: "Exploring the growing potential of solar energy and its impact on Kenya's economic development...",
      date: "March 15, 2024",
      category: "Industry Insights"
    },
    {
      id: 2,
      title: "Skills Development in Renewable Energy",
      excerpt: "How technical training programs are bridging the skills gap in Kenya's renewable energy sector...",
      date: "March 10, 2024",
      category: "Training"
    },
    {
      id: 3,
      title: "Youth Empowerment Through Solar Technology",
      excerpt: "The Imara Program's success in empowering young people with technical skills and career opportunities...",
      date: "March 5, 2024",
      category: "Youth Programs"
    }
  ];

  const faqs = [
    {
      question: "What are the entry requirements for your training programs?",
      answer: "Our basic requirements include minimum age of 18 years, high school education, basic computer skills, and physical fitness for field work. Some advanced programs may have additional prerequisites."
    },
    {
      question: "How long do the training programs take?",
      answer: "Program duration varies: workshops take 2-5 days, basic courses run for 4 weeks, advanced courses for 8 weeks, and the Imara Program spans 12 weeks."
    },
    {
      question: "Do you provide job placement assistance?",
      answer: "Yes, we offer comprehensive job placement assistance including career guidance, portfolio development, and connections with industry partners."
    },
    {
      question: "Are there any financial assistance options available?",
      answer: "Yes, we offer various financial assistance options including scholarships for the Imara Program, payment plans, and partnerships with financial institutions."
    },
    {
      question: "What certifications do participants receive?",
      answer: "Participants receive industry-recognized certificates upon completion, including practical assessments and portfolio development support."
    },
    {
      question: "Can I enroll in multiple programs?",
      answer: "Yes, you can enroll in multiple programs. We recommend starting with basic courses before progressing to advanced training."
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
              Resources & <span className="text-[#D71920]">Downloads</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Access our comprehensive collection of guides, brochures, articles, and frequently asked questions.
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveTab("brochures")}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === "brochures"
                  ? "bg-[#D71920] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Brochures & Guides
            </button>
            <button
              onClick={() => setActiveTab("blog")}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === "blog"
                  ? "bg-[#D71920] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Blog Articles
            </button>
            <button
              onClick={() => setActiveTab("faq")}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === "faq"
                  ? "bg-[#D71920] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              FAQ
            </button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Brochures & Guides */}
          {activeTab === "brochures" && (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-black mb-4">Brochures & <span className="text-[#D71920]">Guides</span></h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Download our comprehensive guides and brochures to learn more about our programs and services.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {brochures.map((brochure) => (
                  <div key={brochure.id} className="bg-white rounded-2xl p-6 modern-shadow border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="w-12 h-12 bg-[#D71920] rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-2">{brochure.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{brochure.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">{brochure.size} • {brochure.type}</span>
                      <button className="px-4 py-2 bg-[#D71920] text-white font-medium rounded-xl hover:bg-[#B3141A] transition-all duration-300">
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Blog Articles */}
          {activeTab === "blog" && (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-black mb-4">Blog <span className="text-[#D71920]">Articles</span></h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Stay updated with the latest insights, news, and developments in renewable energy and skills development.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogArticles.map((article) => (
                  <div key={article.id} className="bg-white rounded-2xl p-6 modern-shadow border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="w-12 h-12 bg-[#D71920] rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                    <span className="text-[#D71920] text-sm font-medium">{article.category}</span>
                    <h3 className="text-xl font-semibold text-black mb-2 mt-2">{article.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">{article.date}</span>
                      <button className="px-4 py-2 bg-[#D71920] text-white font-medium rounded-xl hover:bg-[#B3141A] transition-all duration-300">
                        Read More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQ */}
          {activeTab === "faq" && (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-black mb-4">Frequently Asked <span className="text-[#D71920]">Questions</span></h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Find answers to common questions about our programs, enrollment process, and services.
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 modern-shadow border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <h3 className="text-xl font-semibold text-black mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Additional <span className="text-[#D71920]">Resources</span></h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore more resources to help you on your renewable energy journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 modern-shadow border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-[#D71920] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Industry Reports</h3>
              <p className="text-gray-600 mb-4">Access the latest industry reports and market analysis for renewable energy in Kenya.</p>
              <button className="px-4 py-2 bg-[#D71920] text-white font-medium rounded-xl hover:bg-[#B3141A] transition-all duration-300">
                View Reports
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 modern-shadow border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-[#D71920] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Video Tutorials</h3>
              <p className="text-gray-600 mb-4">Watch instructional videos and tutorials on solar installation and maintenance.</p>
              <button className="px-4 py-2 bg-[#D71920] text-white font-medium rounded-xl hover:bg-[#B3141A] transition-all duration-300">
                Watch Videos
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 modern-shadow border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-[#D71920] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Community Forum</h3>
              <p className="text-gray-600 mb-4">Join our community forum to connect with other professionals and share experiences.</p>
              <button className="px-4 py-2 bg-[#D71920] text-white font-medium rounded-xl hover:bg-[#B3141A] transition-all duration-300">
                Join Forum
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#002366] to-[#6D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Need More Information?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Contact our team for personalized assistance and guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-[#D71920] text-white font-semibold rounded-xl hover:bg-[#B3141A] transition-all duration-300">
              Contact Us
            </Link>
            <Link href="/programs" className="px-8 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-[#002366] transition-all duration-300">
              View Programs
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
} 