import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

export default function Analytics() {
  return (
    <div className="min-h-screen bg-[#0A0F2B] flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Header */}
        <Header />

        {/* Content Area */}
        <main className="p-8">
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-[#EAEDFA] font-['Space_Grotesk'] mb-4">
                Analytics
              </h1>
              <p className="text-[#EAEDFA]/70 font-['Plus_Jakarta_Sans'] text-lg">
                Coming Soon
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
