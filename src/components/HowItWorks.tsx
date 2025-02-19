import React from 'react';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-emerald-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            A simple three-step process to make food redistribution efficient
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">List Surplus Food</h3>
              <p className="text-gray-600">
                Restaurants and stores can easily list their surplus food through our platform or API.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Matching</h3>
              <p className="text-gray-600">
                Our AI automatically matches food with nearby NGOs based on their needs and capacity.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Distribution</h3>
              <p className="text-gray-600">
                Coordinated pickup and delivery ensures food reaches those in need while it's fresh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}