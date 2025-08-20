import React from "react";
import { RouterProvider } from "react-router";
import Layout from "./layout";
import router from "./router";
const App: React.FC = () => {
  return (
    <div className='relative flex h-screen flex-col'>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </div>
  );
};

export default App;
