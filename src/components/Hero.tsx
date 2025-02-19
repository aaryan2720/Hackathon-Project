import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Connecting Surplus Food with
            <span className="text-emerald-600"> Those in Need</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Our AI-powered platform connects restaurants and supermarkets with NGOs and community kitchens
            in real-time, reducing food waste and fighting hunger at scale.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors flex items-center">
              Join as Donor
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-full border-2 border-emerald-600 hover:bg-emerald-50 transition-colors">
              Partner as NGO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}