import type { ReactNode } from 'react';

interface LandingContainerProps {
  children: ReactNode;
}

export default function LandingContainer({ children }: LandingContainerProps) {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-slate-800 selection:text-white">
      {children}
    </div>
  );
}
