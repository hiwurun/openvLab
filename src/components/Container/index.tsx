import React from 'react';

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container flex-1 space-y-4 p-3 md:space-y-6 md:p-4 lg:p-6">{children}</div>
  );
}
