import { NavLink } from 'react-router';
import { HomeIcon } from '@heroicons/react/24/outline';
import jerry from '../../assets/jerry-lost.png';

const ErrorPanel = () => {
  return (
    <div className='flex flex-col justify-center items-center py-8'>
      <div className='text flex flex-col justify-center items-center gap-2 pb-4'>
        <h1 className='uppercase font-black tracking-widest text-4xl'>Wubba Lubba Dub-Dub!</h1>
        <p>There is nothing here ... Go home Jerry!</p>
      </div>
      <NavLink
        to='/'
        className='flex flex-row justify-center items-center gap-1 mt-4 mb-8 text-green-500 uppercase font-bold hover:text-green-700'
      >
        <HomeIcon className='h-5 w-5 mr-2 stroke-current' /> Go Home!
      </NavLink>
      <img className='w-5/6 md:w-1/3 object-cover' src={jerry} alt='There is nothing here' />
    </div>
  );
};

export default ErrorPanel;
