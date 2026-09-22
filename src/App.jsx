import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { ContextProvider } from './hoc/ContextProvider';

export default function App() {
  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
}
