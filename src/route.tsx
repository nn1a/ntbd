import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './layouts/Dashboard';

const Home = lazy(() => import('./pages/Home'));
const GridTest = lazy(() => import('./pages/GridTest'));
const GraphTest = lazy(() => import('./pages/GraphTest'));
const Dummy = lazy(() => import('./pages/Dummy'));
const TableTest = lazy(() => import('./pages/TableTest'));

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
        path: '/components/grid',
        element: <GridTest />,
      },
      {
        path: '/components/graph',
        element: <GraphTest />,
      },
      {
        path: '/components/table',
        element: <TableTest />,
      },
      {
        path: '/components/sub/dummy',
        element: <Dummy />,
      },
      {
        path: '/components/sub/dummy1',
        element: <Dummy />,
      },
    ],
  },
]);

export const Routes: React.FC = () => {
  return <RouterProvider router={router} />;
};
