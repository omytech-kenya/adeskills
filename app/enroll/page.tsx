"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function EnrollPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    program: "solar-installation",
    comments: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ submitted: true, success: false, message: "Submitting..." });

    // Here you would typically send the data to a server
    // For now, we'll just simulate a network request
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Simulate success
    console.log("Form submitted:", formData);
    setFormStatus({ submitted: true, success: true, message: "Thank you for your enrollment request! We will be in touch shortly." });
    
    // Reset form after a few seconds
    setTimeout(() => {
        setFormData({
            fullName: "",
            email: "",
            phone: "",
            program: "solar-installation",
            comments: "",
        });
        setFormStatus({ submitted: false, success: false, message: "" });
    }, 5000);
  };

  return (
    <div className="bg-gray-50 text-gray-800">
      <Navigation />
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-[#002366] to-[#1a3a8a] text-white text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Join ADESKILLS</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Take the next step in your career with our industry-leading solar technology and electrical training programs.
        </p>
      </header>

      <main className="max-w-4xl mx-auto p-8">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#002366]">Enrollment Application</h2>
          
          {formStatus.submitted ? (
            <div className={`text-center p-6 rounded-lg ${formStatus.success ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
              <p>{formStatus.message}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <fieldset className="space-y-4">
                <legend className="text-xl font-semibold mb-2 border-b pb-2">Personal Information</legend>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium mb-1">Full Name *</label>
                    <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D71920] transition" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address *</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D71920] transition" />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D71920] transition" />
                </div>
              </fieldset>

              {/* Program Selection */}
              <fieldset className="space-y-4">
                <legend className="text-xl font-semibold mb-2 border-b pb-2">Program of Interest</legend>
                <div>
                  <label htmlFor="program" className="block text-sm font-medium mb-1">Select a Program *</label>
                  <select id="program" name="program" value={formData.program} onChange={handleInputChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D71920] transition bg-white">
                    <option value="solar-installation">Solar Installation Technician</option>
                    <option value="solar-maintenance">Solar System Maintenance</option>
                    <option value="electrical-basics">Electrical Fundamentals</option>
                    <option value="advanced-solar">Advanced Solar Technology</option>
                    <option value="project-management">Project Management for Solar</option>
                    <option value="lms-access">LMS Platform Access Only</option>
                  </select>
                </div>
              </fieldset>

              {/* Additional Information */}
              <fieldset>
                <legend className="text-xl font-semibold mb-2 border-b pb-2">Additional Information</legend>
                <div>
                  <label htmlFor="comments" className="block text-sm font-medium mb-1">Questions or Comments</label>
                  <textarea id="comments" name="comments" rows={5} value={formData.comments} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D71920] transition"></textarea>
                </div>
              </fieldset>

              <div className="text-center pt-4">
                <button type="submit" className="px-8 py-3 bg-[#D71920] text-white font-bold rounded-lg hover:bg-[#B3141A] transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D71920]">
                  Submit Application
                </button>
              </div>
            </form>
          )}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-2">Have questions before you enroll?</p>
          <Link href="/contact" className="font-semibold text-[#002366] hover:text-[#D71920] transition">
            Contact Us
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}