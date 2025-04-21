import React from 'react';
import Navbar from '../Components/Navbar';

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
                  <p className="font-semibold text-xl">ULTIMATES CONSTRUCTION MATERIALS TRADING</p>
                  <p className="text-gray-700">243c Aster St. De Castro Subd. Paso De Blas Valenzuela City</p>
                  <a
                    href="https://www.google.com/maps/place/Ultimates+Construction+Materials+Trading/@14.7067503,120.9941312,17z/data=!3m1!4b1!4m6!3m5!1s0x3397b14500f0832d:0xe1d39b6667bd557b!8m2!3d14.7067452!4d120.9987446!16s%2Fg%2F11shsj6t2j?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D"
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
                  <p className="font-semibold text-xl">Warehouse 1</p>
                  <p className="text-gray-700">Valenzuela</p>
                </div>
                <div className="p-4 bg-white shadow-md rounded-lg">
                  <p className="font-semibold text-xl">Warehouse 2</p>
                  <p className="text-gray-700">Valenzuela</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">Find Us on the Map</h3>
            <div className="w-full h-[400px] bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.6019727656836!2d120.9941312!3d14.7067503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b14500f0832d%3A0xe1d39b6667bd557b!2sUltimates%20Construction%20Materials%20Trading!5e0!3m2!1sen!2sph!4v1713711300000!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Location;
