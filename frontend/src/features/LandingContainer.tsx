import type { ReactNode } from 'react';

interface LandingContainerProps {
  children: ReactNode;
}

export default function LandingContainer({ children }: LandingContainerProps) {
  return (
      <div className="min-h-screen bg-[#2D1B69] font-sans text-white selection:bg-purple-300 selection:text-purple-900">
        {children}
      </div>
  );
}
