import React from 'react';
import Navbar from '../Components/Navbar'

function Location() {
  return (
    <>
    <Navbar />
    <div className="container mx-auto py-12 px-4 md:px-12">
    <h2 className="text-6xl font-bold text-green-800 mb-6">LOCATIONS</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <div>
            <h3 className="text-2xl font-semibold text-green-600 mb-4">Store Locations</h3>
            <div className="flex flex-col space-y-4">
              <div className="p-4 bg-white shadow-md rounded-lg">
                <p className="font-semibold text-xl">TKL Manila</p>
                <p className="text-gray-700">2240 Laguna cor. Oroquieta St., Sta. Cruz, Manila</p>
                <a
                  href="https://www.google.com/maps?q=2240+Laguna+cor.+Oroquieta+St.,+Sta.+Cruz,+Manila"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 underline"
                >
                  Directions
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">Warehouse Locations</h3>
            <div className="flex flex-col space-y-4">
              <div className="p-4 bg-white shadow-md rounded-lg">
                <p className="font-semibold text-xl">Mercury Warehouse</p>
                <p className="text-gray-700">Manila</p>
              </div>
              <div className="p-4 bg-white shadow-md rounded-lg">
                <p className="font-semibold text-xl">Jupiter Warehouse</p>
                <p className="text-gray-700">Cavite</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-semibold text-green-600 mb-4">Find Us on the Map</h3>
          <div className="w-full h-[400px] bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed/v1/place?q=2240+Laguna+cor.+Oroquieta+St.,+Sta.+Cruz,+Manila&key=YOUR_API_KEY"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Location;
