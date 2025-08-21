import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { RouterProvider } from 'react-router';
import router from './router';
const queryClient = new QueryClient();
const App: React.FC = () => {
  return (
    <div className="relative flex h-screen flex-col">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
};

export default App;
