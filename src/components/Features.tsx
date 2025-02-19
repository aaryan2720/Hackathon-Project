import React from 'react';
import { Building2, Clock, MapPin, BarChart as ChartBar, Truck } from 'lucide-react';

const features = [
  {
    icon: <MapPin className="h-6 w-6 text-emerald-600" />,
    title: "Smart Matching Algorithm",
    description: "Intelligent matching of food donors with nearby NGOs based on capacity and urgency."
  },
  {
    icon: <Clock className="h-6 w-6 text-emerald-600" />,
    title: "Real-Time Tracking",
    description: "Live updates on food pickup status and delivery tracking for maximum efficiency."
  },
  {
    icon: <Building2 className="h-6 w-6 text-emerald-600" />,
    title: "Seamless Integration",
    description: "Easy-to-use APIs for restaurants, grocery stores, and delivery partners."
  },
  {
    icon: <ChartBar className="h-6 w-6 text-emerald-600" />,
    title: "Impact Analytics",
    description: "Comprehensive data insights to track and optimize your contribution."
  },
  {
    icon: <Truck className="h-6 w-6 text-emerald-600" />,
    title: "Efficient Distribution",
    description: "Optimized routing and delivery scheduling to minimize food waste."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powered by Technology
          </h2>
          <p className="text-xl text-gray-600">
            Our platform leverages cutting-edge technology to make food redistribution efficient and effective.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}