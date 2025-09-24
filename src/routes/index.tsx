import { createBrowserRouter, redirect } from 'react-router';
import { charactersLoader, characterLoader } from '@/routes/loaders';
import Characters from '@/components/Characters';
import Character from '@/components/Character';
import Root from '@/components/Root';

const routes = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true, // This handles the exact "/" path
        loader: () => redirect('/characters'),
      },
      {
        path: 'characters',
        loader: charactersLoader,
        element: <Characters />,
      },
      {
        id: 'character',
        path: 'character/:id',
        loader: characterLoader, // Ref: https://www.reddit.com/r/react/comments/15lfm9n/comment/n0h7ix8/
        Component: Character,
      },
    ],
  },
  {
    path: '*',
    element: <div>Not Found!</div>,
  },
]);

export default routes;
