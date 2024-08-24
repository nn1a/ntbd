import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './layouts/Dashboard';
import GridTest from './pages/GridTest';

const Home = lazy(() => import('./pages/Home'));
// const GridTest = lazy(() => import('./pages/GridTest'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: '/about/grid',
        element: <GridTest />,
      },
      {
        path: '/about/company/mission',
        element: <Home />,
      },
    ],
  },
]);

export const Routes: React.FC = () => {
  return <RouterProvider router={router} />;
};
