import React from 'react';

export default function Impact() {
  return (
    <section id="impact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Impact
          </h2>
          <p className="text-xl text-gray-600">
            Together we're making a difference in communities worldwide
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">50K+</div>
            <div className="text-gray-600">Meals Redistributed Daily</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">1000+</div>
            <div className="text-gray-600">Partner Organizations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">25+</div>
            <div className="text-gray-600">Cities Covered</div>
          </div>
        </div>
        <div className="mt-16 text-center">
          <button className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors">
            Join Our Mission
          </button>
        </div>
      </div>
    </section>
  );
}