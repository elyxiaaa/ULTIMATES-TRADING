import React, { useState } from 'react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
const faqData = [
  {
    category: 'Products',
    questions: [
      {
        question: 'Where can I order?',
        answer: (
          <>
            You may order through our official channels listed below and our team will provide you a formal quotation the soonest possible time.
            <br /><br />
            <strong>Trunkline:</strong> (02) 8588 1155<br />
            <strong>Mobile:</strong> 0917 834 8581<br />
            <strong>Viber:</strong> 0923 820 2726<br />
            <strong>Email:</strong> sales@tkl.com.ph<br />
            <strong>Facebook:</strong> facebook.com/tklsteelph
          </>
        ),
      },
      {
        question: 'What are the available products that you offer?',
        answer: 'We have a wide range of quality steel products available. Kindly check the image below for the complete list of items.',
      },
      {
        question: 'Do you accept made to order request for steel requirements?',
        answer: 'Yes, we do accept made to order requests. Kindly send us a detailed shop drawing for us to provide you with a quotation. Send your shop drawing at sales@tkl.com.ph.',
      },
    ],
  },
  {
    category: 'Ordering',
    questions: [
      {
        question: 'Can I call you to place my order?',
        answer: (
          <>
            You may call us through the following channels listed below:
            <br /><br />
            <strong>Trunkline:</strong> (02) 8588 1155<br />
            <strong>Mobile:</strong> 0917 834 8581<br />
            <strong>Viber:</strong> 0923 820 2726<br />
          </>
        ),
      },
      {
        question: 'Can I change my order after it has been placed?',
        answer: (
          <>
           For order changes, please contact our Sales Team:
            <br /><br />
            <strong>Trunkline:</strong> (02) 8588 1155<br />
            <strong>Email:</strong> sales@tkl.com.ph<br />
          </>
        ),
      },
    ],
  },


];


function FAQ() {
    const [activeCategory, setActiveCategory] = useState('Products');
    const [openQuestions, setOpenQuestions] = useState({});
  
    const toggleQuestion = (index) => {
      setOpenQuestions((prev) => ({
        ...prev,
        [index]: !prev[index],
      }));
    };
  return (
        <>
    <Navbar/>
    <div className="min-h-screen bg-white">
      <div className="p-10">
      <h1 className="text-green-900 font-bold text-7xl">FAQs</h1>
      </div>

      <div className="flex">
        <aside className="w-1/5 p-6 border-r border-gray-200">
          {faqData.map((item) => (
            <div
              key={item.category}
              className={`cursor-pointer p-2 my-1 rounded ${
                activeCategory === item.category ? 'bg-lime-300 font-bold' : ''
              }`}
              onClick={() => setActiveCategory(item.category)}
            >
              {item.category}
            </div>
          ))}
        </aside>

        <main className="flex-1 p-8">
          <h2 className="text-4xl font-extrabold text-green-900 mb-6">{activeCategory}</h2>
          <div className="space-y-4">
            {faqData
              .find((item) => item.category === activeCategory)
              .questions.map((q, index) => (
                <div key={index} className="border-t pt-4">
                  <div
                    className="flex justify-between items-center cursor-pointer text-sm font-bold text-gray-700"
                    onClick={() => toggleQuestion(index)}
                  >
                    {q.question}
                    <span>{openQuestions[index] ? '▲' : '▼'}</span>
                  </div>
                  {openQuestions[index] && (
                    <div className="mt-2 text-sm border-l border-lime-500 text-gray-600 pl-4">
                      {q.answer}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </main>
      </div>
    </div>
    <Footer/>
        </>
  )
}

export default FAQ
