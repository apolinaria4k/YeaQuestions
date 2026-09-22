import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Main from './components/main/Main';
import MainDetails from './components/MainDetails/MainDetails';
import NotFound from './components/NotFound/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/questions/:questionId',
        element: <MainDetails />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
