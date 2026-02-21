import type { ReactNode } from 'react';

interface LandingContainerProps {
  children: ReactNode;
}

export default function LandingContainer({ children }: LandingContainerProps) {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-primary selection:text-white">
      {children}
      
      {/* WhatsApp Flutuante */}
      <a 
        href="https://wa.me/5548991972520"
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-xl transition-transform hover:-translate-y-1 font-bold"
      >
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
