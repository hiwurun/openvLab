import React from 'react';

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="container mx-auto space-y-4">{children}</div>;
}
