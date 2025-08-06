"use client";

import { useState } from "react";
import Link from "next/link";

export default function Enroll() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    program: "",
    experience: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle enrollment logic here
    console.log("Enrollment attempt:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#002366] to-[#6D0D0D] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Link href="/" className="text-3xl font-bold text-white mb-4 inline-block">
            ADESKILLS
          </Link>
          <h1 className="text-4xl font-bold text-white mb-4">Enroll in Training</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Start your journey in solar technology with our comprehensive training programs. 
            Fill out the form below to begin your enrollment process.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Enrollment Form */}
          <div className="bg-white rounded-2xl p-8 modern-shadow border border-gray-100">
            <h2 className="text-2xl font-bold text-black mb-6">Enrollment Form</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D71920] focus:border-transparent transition-all duration-200 placeholder-gray-500 placeholder-opacity-100 text-black"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D71920] focus:border-transparent transition-all duration-200 placeholder-gray-500 placeholder-opacity-100 text-black"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D71920] focus:border-transparent transition-all duration-200 placeholder-gray-500 placeholder-opacity-100 text-black"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D71920] focus:border-transparent transition-all duration-200 placeholder-gray-500 placeholder-opacity-100 text-black"
                />
              </div>

              <div>
                <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-2">
                  Training Program *
                </label>
                <select
                  id="program"
                  required
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D71920] focus:border-transparent transition-all duration-200 text-black"
                >
                  <option value="">Select a training program</option>
                  <option value="solar-installation">Solar Installation Technician</option>
                  <option value="solar-maintenance">Solar System Maintenance</option>
                  <option value="electrical-basics">Electrical Fundamentals</option>
                  <option value="advanced-solar">Advanced Solar Technology</option>
                  <option value="lms-access">LMS Platform Access</option>
                </select>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Experience Level
                </label>
                <select
                  id="experience"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D71920] focus:border-transparent transition-all duration-200 text-black"
                >
                  <option value="">Select your experience level</option>
                  <option value="beginner">Beginner (No experience)</option>
                  <option value="intermediate">Intermediate (Some experience)</option>
                  <option value="advanced">Advanced (Experienced professional)</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your goals and any specific requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D71920] focus:border-transparent transition-all duration-200 resize-none placeholder-gray-500 placeholder-opacity-100 text-black"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#D71920] text-white font-semibold rounded-xl hover:bg-[#B3141A] transition-all duration-300 transform hover:-translate-y-1 modern-btn"
              >
                Submit Enrollment
              </button>
            </form>
          </div>

          {/* Program Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 modern-shadow border border-gray-100">
              <h3 className="text-xl font-bold text-black mb-4">Training Programs</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-[#D71920] pl-4">
                  <h3 className="font-semibold text-black">Solar Installation Training</h3>
                  <p className="text-gray-600 text-sm">Hands-on training in solar panel installation and maintenance</p>
                </div>
                <div className="border-l-4 border-[#D71920] pl-4">
                  <h3 className="font-semibold text-black">Electrical Systems</h3>
                  <p className="text-gray-600 text-sm">Comprehensive electrical system design and implementation</p>
                </div>
                <div className="border-l-4 border-[#D71920] pl-4">
                  <h3 className="font-semibold text-black">Project Management</h3>
                  <p className="text-gray-600 text-sm">Project planning, execution, and quality control</p>
                </div>
                <div className="border-l-4 border-[#D71920] pl-4">
                  <h3 className="font-semibold text-black">Safety & Compliance</h3>
                  <p className="text-gray-600 text-sm">Safety protocols and regulatory compliance training</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 modern-shadow border border-gray-100">
              <h3 className="text-xl font-bold text-black mb-4">Why Choose ADESKILLS?</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#D71920] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600">Hands-on practical training with real equipment</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#D71920] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600">Industry-recognized certifications</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#D71920] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600">Online LMS platform for flexible learning</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#D71920] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600">Job placement assistance and career support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link href="/" className="text-gray-600 hover:text-black transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
} 