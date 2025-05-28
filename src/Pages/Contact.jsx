import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [inquiryType, setInquiryType] = useState('Product Requirement');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(''); 
  const [progress, setProgress] = useState(0); // Progress bar state

  useEffect(() => {
    let timer;
    if (notification) {
      // Start progress bar when notification is shown
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer); // Stop the progress bar when it reaches 100%
            return 100;
          }
          return prev + 20; // Increase progress every second
        });
      }, 1000);

      // Clear the progress bar after 5 seconds
      setTimeout(() => {
        setNotification('');
        setProgress(0); // Reset progress
      }, 5000); // Notification disappears after 5 seconds
    }
    return () => clearInterval(timer);
  }, [notification]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setNotification(''); // Clear previous notifications

    const formData = {
      name,
      email,
      mobile,
      inquiryType,
      message,
    };

    // Send email using EmailJS
    emailjs
      .send('service_l0s2s2s', 'template_nlo6cbg', formData, 'OW1uU8yo8xjP0Ug7D')
      .then(
        (response) => {
          setNotification('Message sent successfully!');
          setLoading(false);
        },
        (error) => {
          setNotification('Failed to send message. Please try again later.');
          setLoading(false);
        }
      );
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f5f8f3] px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-indigo-950 mb-12">HOW CAN WE SERVE YOU?</h1>

          {/* Toast Notification */}
          {notification && (
            <div
              className={`fixed top-32 right-4 p-4 text-white rounded-md shadow-lg transition-all duration-300 ${
                notification.includes('successfully') ? 'bg-green-500' : 'bg-red-500'
              }`}
            >
              <div className="flex flex-col items-start">
                <span>{notification}</span>
                {/* Progress Bar */}
                <div className="w-full h-1 bg-white mt-2 rounded-full">
                  <div
                    className="h-1 bg-green-700 rounded-full"
                    style={{
                      width: `${progress}%`, // Set width dynamically based on progress
                      transition: 'width 1s linear',
                    }}
                  ></div>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Form Inputs */}
              <div>
                <label htmlFor="name" className="block text-lg font-semibold text-indigo-900">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-semibold text-indigo-900">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="mobile" className="block text-lg font-semibold text-indigo-900">
                  Mobile <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="inquiry" className="block text-lg font-semibold text-indigo-900">
                  Type of Inquiry <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center mt-2 space-x-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="Product Requirement"
                      checked={inquiryType === 'Product Requirement'}
                      onChange={() => setInquiryType('Product Requirement')}
                      className="mr-2"
                    />
                    Product Inquiry
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="Other Inquiry"
                      checked={inquiryType === 'Other Inquiry'}
                      onChange={() => setInquiryType('Other Inquiry')}
                      className="mr-2"
                    />
                    Other Inquiry
                  </label>
                </div>
              </div>
              <div className="col-span-2">
                <label htmlFor="message" className="block text-lg font-semibold text-indigo-900">
                  Type in your message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows="4"
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-indigo-900 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <span className="loading loading-bars loading-xs"></span>
                  <span className="ml-2">Submitting...</span>
                </span>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>
    <Footer/>
    </>
  
  );
}

export default Contact;
