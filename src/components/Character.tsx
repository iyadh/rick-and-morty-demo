import { useParams } from 'react-router';
import { MapPinIcon, HomeIcon } from '@heroicons/react/24/outline';
import StatusPill from './shared/StatusPill';
import ErrorPanel from './shared/ErrorPanel';
import { useCharacter } from '@/hooks/useCharacter';
import type { Status } from '@/types';

const Character = () => {
  const { id } = useParams<{ id: string }>();
  const { character, isLoading, error } = useCharacter(id || '');

  if (isLoading) return <div>Fetching data...</div>;
  if (error) return <ErrorPanel />;

  return (
    <div className='container mx-auto py-8 px-4'>
      <div className='flex flex-col md:flex-row bg-white rounded-xl overflow-hidden space-x-8'>
        <img src={character?.image} alt={character?.name} className='w-full md:w-1/2' />
        <section className='flex flex-col items-start py-4 space-y-4'>
          <h1 className='text-4xl mb-4 uppercase font-black tracking-widest'>{character?.name}</h1>
          <StatusPill status='species'>{character?.species + ' - ' + character?.gender}</StatusPill>
          <StatusPill status={character?.status?.toLowerCase() as Status}>{character?.status}</StatusPill>
          <span className='flex justify-center'>
            <MapPinIcon className='h-6 w-6 mr-2 stroke-character text-gray-300' />
            Location: {character?.location?.name}
          </span>
          <span className='flex justify-center'>
            <HomeIcon className='h-6 w-6 mr-2 stroke-character text-gray-300' />
            Origin: {character?.origin?.name}
          </span>
        </section>
      </div>
    </div>
  );
};

export default Character;
