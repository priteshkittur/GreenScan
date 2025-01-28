import React from 'react';
import { Link } from 'react-router-dom';
import { ScanLine, Sprout } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="min-h-screen bg-gray-50">
    <nav className="bg-white shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-emerald-600 font-semibold">
            <div className="relative">
              <ScanLine className="w-6 h-6" />
              <Sprout className="w-4 h-4 absolute -top-1 -right-1" />
            </div>
            <span>GreenScan</span>
          </Link>
          <div className="flex gap-4">
            <Link to="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link to="/analyze" className="text-gray-600 hover:text-gray-900">
              Analyze
            </Link>
          </div>
        </div>
      </div>
    </nav>
    {children}
  </div>
);