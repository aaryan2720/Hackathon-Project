import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About FoodBridge</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              At FoodBridge, we're committed to creating a world where no food goes to waste while people go hungry. 
              Our mission is to bridge the gap between surplus food and those in need, leveraging technology to make 
              food redistribution efficient, sustainable, and scalable.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 mb-4">
              We envision a future where technology and community collaboration eliminate food waste entirely, 
              ensuring that surplus food reaches those who need it most. Through our platform, we aim to create 
              a more sustainable and equitable food system for all.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We constantly innovate to make food redistribution more efficient and effective.
                </p>
              </div>
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainability</h3>
                <p className="text-gray-600">
                  We're committed to environmental sustainability and reducing food waste.
                </p>
              </div>
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
                <p className="text-gray-600">
                  We believe in the power of community collaboration to solve social challenges.
                </p>
              </div>
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Impact</h3>
                <p className="text-gray-600">
                  We measure our success by the positive impact we create in communities.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}