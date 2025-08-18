import { createBrowserRouter, redirect } from 'react-router';

const routes = createBrowserRouter([
  {
    path: '/',
    // Component: Root,
    children: [
      {
        index: true, // This handles the exact "/" path
        loader: () => redirect('/characters'),
      },
      {
        path: 'characters',
        element: <div>Characters goes here</div>,
      },
      {
        path: 'character/:id',
        element: <div>Character details goes here</div>,
      },
    ],
  },
  {
    path: '*',
    element: <div>Not Found!</div>,
  },
]);

export default routes;
