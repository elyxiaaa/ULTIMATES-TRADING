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
  {
    category: 'Payment',
    questions: [
      {
        question: 'What are your payment options?',
        answer: (
          <>
           We have a wide range of payment options available. We accept cash, debit/credit card, and bank transfer. 
           <br/>
           We accept credit card payment except for Deformed Bar transactions.
          </>
        ),
      },
    ],
  },
  {
    category: 'Delivery & Pick-up',
    questions: [
      {
        question: 'When will I get my orders delivered?',
        answer: (
          <>
          TKL Steel is committed to delivering your orders 1 to 5 working days after we confirm your payment. The first working day of 
          the delivery schedule starts the day after the payment confirmation. We do not include Sundays and holidays in the delivery schedule.
          <br/>
          <br/>
          Some factors may affect the delivery lead time, such as unfavorable weather, mechanical truck error, and customers requesting 
          to reschedule delivery. Our team will coordinate with you for constant updates during these situations.
          </>
        ),
      },
      {
        question: 'Do you ship nationwide?',
        answer: (
          <>
          Currently, we are able to deliver in NCR, Region 3, Region 4A, and Pangasinan. Stay updated as we include more areas in the future. 
          </>
        ),
      },
      {
        question: 'Where can I pick-up my order?',
        answer: (
          <>
          You can pick-up your orders on our Warehouse in Valenzuela
          <br/>
          <br/>
          <strong>U.C.M.T Valenzuela Warehouse</strong>
          <br/>
          243c Aster St. De Castro Subd. Paso De Blas Valenzuela City
          <br/>
          <br/>
          Items for pick-up need proper coordination with our Sales team. If you have concerns about orders for pick-up, 
          please reach out to us through the official channels.
          <br/>
          <strong>Trunkline:</strong> (02) 8588 1155<br />
            <strong>Mobile:</strong> 0917 834 8581<br />
            <strong>Viber:</strong> 0923 820 2726<br />

          </>
        ),
      },
    ],
  },
  {
    category: 'Return & Refund',
    questions: [
      {
        question: 'What is your return and refund policy?',
        answer: (
          <>
          All items except for stainless, made to order items, and items with cutting requests, as long as in good condition, 
          can be returned within 30 days from the date it was received. The customer has 3 options for the product return – (1) 
          product exchange, (2) credit memo, and (3) refund.
          <br/>
          <br/>
          Refund for credit card transactions is only allowed for same day transactions. Refund will be through card charging reversal, 
          no cash refund is allowed.
          </>
        ),
      },
      {
        question: 'What is your returns, refund, and exchange timeline?',
        answer: (
          <>
          As long as you have provided all the necessary details in the form, processing of request will take 3 to 5 working days.
          <br/>
          </>
        ),
      },
      {
        question: 'What items are non-exchangeable and non-refundable?',
        answer: (
          <>
          Made to order items, items with cutting requests, and stainless steel items are not allowed for return, refund, or exchange requests. 
          Customers are advised to thoroughly review their orders before finalizing it.
          <br/>
          </>
        ),
      },
      {
        question: 'What do I do when I receive an incorrect or defective item?',
        answer: (
          <>
          If you were able to note the incorrect / defective item upon delivery, you can advise the delivery personnel that the items delivered are not acceptable / wrong. From there, our team will inspect the item, 
          if it is indeed found to be incorrect or defective, we will schedule the redelivery of the correct items.
          <br/>
          <br/>
          If you discovered the items to be incorrect / defective after the delivery, you can contact our team in the following channels:
          <br/>
          <strong>Trunkline:</strong> (02) 8588 1155<br />
            <strong>Mobile:</strong> 0917 834 8581<br />
            <strong>Viber:</strong> 0923 820 2726<br />

          </>
        ),
      },
    ],
  },

  {
    category: 'Locations',
    questions: [
      {
        question: 'Where are your warehouse locations?',
        answer: (
          <>
          U.C.M.T Valenzuela Warehouse <br/>
243c Aster St. De Castro Subd. Paso De Blas Valenzuela City
          </>
        ),
      },
    ],
  },

    {
    category: 'Operating Hours',
    questions: [
      {
        question: 'What is your operating hours?',
        answer: (
          <>
          Our office and warehouses are open from Mondays to Saturdays, 8AM to 6PM, except holidays.
          <br/>
          <br/>
          U.C.M.T Valenzuela
          <br/>
          Monday to Saturday 8AM to 5PM
          </>
        ),
      },
    ],
  },
  {
    category: 'Warehouse Visit',
    questions: [
      {
        question: 'Can I visit your warehouse?',
        answer: (
          <>
          Customers can drop by our warehouse in Valenzuela
          <br/>
          <br/>
          Reach out to our sales team for warehouse appointment:
          <br/>
          Trunkline: (02) 8588 1155
          <br/>
          Mobile: 0917 834 8581 <br/>
          Viber: 0933 820 2726 <br/>
          Email: sales@tkl.com.ph
          </>
        ),
      },
    ],
  },


];


function FAQ() {
    const [activeCategory, setActiveCategory] = useState('Products');
    const [openQuestions, setOpenQuestions] = useState({});
  
    const toggleQuestion = (category, index) => {
      const key = `${category}-${index}`;
      setOpenQuestions((prev) => ({
        ...prev,
        [key]: !prev[key],
      }));
    };
  return (
        <>
    <Navbar/>
    <div className="min-h-screen bg-white">
    <div className="w-full h-full p-10">
    <h1 className="text-indigo-950 font-bold text-7xl ">FAQs</h1>
  </div>

      <div className="flex">
        <aside className="w-1/5 p-6 border-r border-gray-200">
          {faqData.map((item) => (
            <div
              key={item.category}
              className={`cursor-pointer p-2 my-1 rounded ${
                activeCategory === item.category ? 'bg-indigo-300 font-bold' : ''
              }`}
              onClick={() => {
                setActiveCategory(item.category);
                setOpenQuestions({}); // Close all questions from previous category
              }}
            >
              {item.category}
            </div>
          ))}
        </aside>

        <main className="flex-1 p-8">
          <h2 className="text-4xl font-extrabold text-indigo-900 mb-6">{activeCategory}</h2>
          <div className="space-y-4">
          {faqData
  .find((item) => item.category === activeCategory)
  .questions.map((q, index) => {
    const key = `${activeCategory}-${index}`;
    return (
      <div key={index} className="border-t pt-4">
        <div
          className="flex justify-between items-center cursor-pointer text-lg font-bold text-gray-700"
          onClick={() => toggleQuestion(activeCategory, index)}
        >
          {q.question}
          <span>{openQuestions[key] ? '▲' : '▼'}</span>
        </div>
        {openQuestions[key] && (
          <div className="mt-2 text-md border-l border-indigo-500 text-indigo-600 pl-4">
            {q.answer}
          </div>
        )}
      </div>
    );
  })}
          </div>
        </main>
      </div>
    </div>
    <Footer/>
        </>
  )
}

export default FAQ
