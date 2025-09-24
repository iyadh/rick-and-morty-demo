import { useNavigate, useRouteLoaderData } from 'react-router';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Logo from './Logo';

function Toolbar() {
  const navigate = useNavigate();
  const isCharacterPage = useRouteLoaderData('character'); // This will only be true on /character route due to loader in router config

  const handleClick = () => navigate('/');

  return (
    <div className='w-full py-4 bg-white'>
      <div className='flex content-center items-center space-x-4 px-4'>
        {isCharacterPage && (
          <span
            className='h-10 cursor-pointer grid place-content-center pr-4 border-r-2 border-gray-200 group'
            onClick={handleClick}
          >
            <ArrowLeftIcon className='fill-current w-4 h-4 text-gray-300 transition ease-in-out duration-300 group-hover:text-green-600' />
          </span>
        )}
        <Logo />
      </div>
    </div>
  );
}

export default Toolbar;
