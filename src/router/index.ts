import { createBrowserRouter } from 'react-router';

import Layout from '@/layout';
import LoadPage from '@/pages/LoadPage';
import Market from '@/pages/Market';
import Teaching from '@/pages/Teaching';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: LoadPage
      },
      {
        path: 'market',
        Component: Market
      },
      {
        path: 'teaching',
        Component: Teaching
      }
    ]
  }
]);

export default router;
