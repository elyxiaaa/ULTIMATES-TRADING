import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Navbar from '../Components/Navbar';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [inquiryType, setInquiryType] = useState('Product Requirement');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

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
          alert('Message sent successfully!');
        },
        (error) => {
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-[#f5f8f3] px-4 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-green-900 mb-12">
          HOW CAN WE SERVE YOU?
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-lg font-semibold text-green-900">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-green-900">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label htmlFor="mobile" className="block text-lg font-semibold text-green-900">
                Mobile <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="inquiry" className="block text-lg font-semibold text-green-900">
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
              <p className="text-red-600 text-left mt-2 text-sm">
                Kindly input complete quantity, product, and sizes of your requirements
              </p>
            </div>
            <div className="col-span-2">
              <label htmlFor="message" className="block text-lg font-semibold text-green-900">
                Type in your message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows="4"
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-green-900 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Contact;
