import React, { useState } from 'react'
import Guarantee from '../assets/guarantee.jpg'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Career() {
  const [openJob, setOpenJob] = useState(null)

  const toggleDropdown = (index) => {
    setOpenJob(openJob === index ? null : index)
  }

  const jobOpenings = [
    {
      title: 'Delivery Driver',
      requirements: [
        'With 3-5 years of experience in operating trailer trucks and delivering construction materials.',
        'With a valid Professional Driver’s License and A, A1, B, B1 B2, C, CE, D restriction code.'
      ],
      description: [
        'Ensures safe and timely delivery of goods.',
        'Adheres to standard operating procedures (SOPs) by performing daily checks on oil, fuel, tires, engine, and other components.',
        'Maintains cleanliness of the vehicle.',
        'Complies with all government traffic rules, regulations, and laws to avoid violations.'
      ]
    },
    {
      title: 'HR Associate (Recruitment)',
      requirements: [
        'Bachelor\'s degree in HR, Psychology, or related field.',
        '2-3 years of experience in recruitment and employee relations.'
      ],
      description: [
        'Manages recruitment processes for all positions.',
        'Coordinates with managers to ensure hiring needs are met.',
        'Handles onboarding and training for new employees.'
      ]
    },
    {
      title: 'Company Nurse',
      requirements: [
        'Registered Nurse with current licensure.',
        'Experience in corporate health and wellness programs.'
      ],
      description: [
        'Provides health services to employees.',
        'Administers first aid and ensures a safe working environment.',
        'Keeps health records for employees and handles emergencies.'
      ]
    },
    {
        title: 'Cost Accountant',
        requirements: [
          'Accountancy degree or equivalent.',
          '3-5 yrs relevant experience.'
        ],
        description: [
          'Provide support in almost all aspects of the comptrollership department but mainly focus on forward – looking report.',
          'Help in the preparation and development of costing analysis (per item) reports for top management.',
          'Help in the review of the company’s accounting information and transactions to identify and resolve inaccuracies or imbalances.',
          'Utilizes the accounting system to facilitate processes and maintain records.',
          'Coordinating and assisting in budget process and preparation.',
          'Preparation of monthly reports related to sales, cost of Sales, gross profit and produce subsidiary ledger for inventory balances.'
        ]
      },
      {
        title: 'Fleet Associate',
        requirements: [
          'Graduate of any 4-year course.',
          'With at least 1-2 years of related experience',
          'Preferably with knowledge in GPS apps.'
        ],
        description: [
          'Plan, schedule and monitor itineraries of delivery trucks.',
          'Tracks the progress of sales orders for delivery.',
          'Ensure that delivery lead time is comply.',
          'Maintain a free line communication with Delivery drivers and personnel to attend queries.',
          'Coordinate safety loading of items as per truck capacity.',
        ]
      },
      {
        title: 'Delivery Driver (Trailer)',
        requirements: [
          'With a valid Professional Driver’s License and # A, A1, B, B1, B2, C, CE, D restriction code',
          'With at least 5-6 years of experience as a trailer driver',
          'Familiar with NCR, North Luzon, and South Luzon route.',
          'With basic to advance troubleshooting skills.'
        ],
        description: [
          'Monitors the truck mileage of the assigned Vehicle',
          'Reports (Exactly) all the daily truck petty cash expenses and returns all unused petty cash.',
          'Coordinates with the fleet assistant for the daily delivery updates to customers.',
          'Practices good customer service at all time',
          'Coordinates with delivery section of the schedule of truck’s corrective repairs and preventive maintenance.',
          'Will be assigned to Manila and Valenzuela'
        ]
      },
      {
        title: 'Sales Associate',
        requirements: [
          'Graduate of any 4-year course.',
          'With at least 2-3 years of related experience',
          'Preferably with a background in steel/hardware industries',
          'Able to thrive in a fast-paced, high-volume environment'
        ],
        description: [
          'Sell the company’s product',
          'Get the customer’s information. (Contact details, what type of customer, projects)',
          'Close sales and achieve sales targets',
          'Coordinate with the customer and logistics team on the schedule of delivery',
          'Coordinate with respective departments to solve issues/concerns.',
          'Others: Solving customer complaints, following up/ touch base with current/previous customers',
          'Provide good after-sales service to all customers'
        ]
      },
  ]

  return (
    <>
    <title>Careers - UCMT Corporation</title>
      <Navbar />
      <div className="w-full bg-white py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 xl:px-44 gap-10">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-indigo-950"><strong>BUILD YOUR</strong></span><br />
              <span className="text-yellow-500"><strong>FUTURE WITH US</strong></span>
            </h1>
            <div className="w-32 h-1 bg-indigo-500 my-4 mx-auto lg:mx-0" />
            <p className="text-lg text-indigo-950 font-medium">
            At UCMT, we invest in our employees because we treat them like family.
            their growth via instruction and provide them with  
            more advantages for a better quality of life.  Send us your résumé to start your career.
            </p>
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <img src={Guarantee} alt="TKL Guarantee" className="rounded shadow-lg" />
          </div>
        </div>
      </div>

      {/* Job Openings Section */}
      <div className="w-full bg-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left mb-6">
            <h2 className="text-6xl sm:text-7xl font-bold text-indigo-950"><strong>JOB OPENINGS</strong></h2>
            <div className="w-44 h-1 bg-indigo-500 mt-2 mb-2"></div>
          </div>

          {/* Mapping through job openings */}
          {jobOpenings.map((job, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 mb-2 ">
              <div 
                onClick={() => toggleDropdown(index)}
                className="flex justify-between cursor-pointer items-center pb-4 "
              >
                <h3 className="text-xl font-bold text-indigo-700">{job.title}</h3>
                <button
                  className="text-indigo-500 font-bold"
                >
                  {openJob === index ? '▲' : '▼'}
                </button>
              </div>

              {/* Dropdown Content */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openJob === index ? 'max-h-screen' : 'max-h-0 overflow-hidden'
                }`}
              >
                <div className="text-sm font-medium text-indigo-900">
                  <h4 className="text-lg font-semibold">Requirements:</h4>
                  <ul className="list-disc list-inside mb-4">
                    {job.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                  <h4 className="text-lg font-semibold">Job Description:</h4>
                  <ul className="list-disc list-inside">
                    {job.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Career
