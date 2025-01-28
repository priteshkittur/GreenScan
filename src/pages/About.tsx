import React from 'react';

export const AboutPage = () => (
  <div className="max-w-4xl mx-auto px-4 py-12">
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold mb-6">About GreenScan</h2>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 mb-6">
          GreenScan helps you make informed decisions about waste disposal by using
          advanced AI technology to identify materials and provide proper disposal
          guidelines.
        </p>
        <h3 className="text-xl font-semibold mb-4">Why Proper Waste Disposal Matters</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-600">
          <li>Reduces environmental pollution</li>
          <li>Conserves natural resources</li>
          <li>Minimizes landfill waste</li>
          <li>Promotes sustainable living</li>
        </ul>
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">Quick Tips</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Clean containers before recycling</li>
            <li>• Separate different types of materials</li>
            <li>• Check local recycling guidelines</li>
            <li>• Avoid contaminating recyclables</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);