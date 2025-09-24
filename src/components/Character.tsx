import { MapPinIcon, HomeIcon } from '@heroicons/react/24/outline';
import StatusPill from './shared/StatusPill';
import useStore from '@/store';

const Character = () => {
  const currentCharacter = useStore(state => state.currentCharacter);

  return (
    <div className='container mx-auto py-8 px-4'>
      <div className='flex flex-col md:flex-row bg-white rounded-xl overflow-hidden space-x-8'>
        <img src={currentCharacter.image} alt={currentCharacter.name} className='w-full md:w-1/2' />
        <section className='flex flex-col items-start py-4 space-y-4'>
          <h1 className='text-4xl mb-4 uppercase font-black tracking-widest'>{currentCharacter.name}</h1>
          <StatusPill status='species'>{currentCharacter.species + ' - ' + currentCharacter.gender}</StatusPill>
          <StatusPill status={currentCharacter.status?.toLowerCase()}>{currentCharacter.status}</StatusPill>
          <span className='flex justify-center'>
            <MapPinIcon className='h-6 w-6 mr-2 stroke-current text-gray-300' />
            Location: {currentCharacter.location?.name}
          </span>
          <span className='flex justify-center'>
            <HomeIcon className='h-6 w-6 mr-2 stroke-current text-gray-300' />
            Origin: {currentCharacter.origin?.name}
          </span>
        </section>
      </div>
    </div>
  );
};

export default Character;
