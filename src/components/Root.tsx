import { Outlet } from 'react-router';
import Toolbar from './shared/Toolbar';

const Root = () => {
  return (
    <div>
      <Toolbar />
      <Outlet />
    </div>
  );
};

export default Root;
