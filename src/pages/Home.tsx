import React from 'react';
import { ArrowRight, Info, ScanLine, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

export const HomePage = () => (
  <div className="max-w-4xl mx-auto px-4 py-12 text-center">
    <div className="mb-8">
      <div className="relative inline-block">
        <ScanLine className="w-16 h-16 text-emerald-600" />
        <Sprout className="w-10 h-10 text-emerald-600 absolute -top-2 -right-2" />
      </div>
      <h1 className="text-4xl font-bold mb-4">GreenScan</h1>
      <p className="text-xl text-gray-600 mb-8">
        Smart waste analysis for a sustainable future
      </p>
    </div>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link to="/analyze">
        <Button>
          Start Analyzing <ArrowRight className="w-5 h-5" />
        </Button>
      </Link>
      <Link to="/about">
        <Button variant="secondary">
          Learn More <Info className="w-5 h-5" />
        </Button>
      </Link>
    </div>
  </div>
);