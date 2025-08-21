import React from 'react';
import { RouterProvider } from 'react-router';
import router from './router';
const App: React.FC = () => {
  return (
    <div className="relative flex h-screen flex-col">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
