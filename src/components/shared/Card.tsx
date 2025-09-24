import useStore from '@/store';
import { useNavigate } from 'react-router';

type CharacterProps = {
  id: string;
  img: string;
  name: string;
};

function CharacterCard({ img, name, id }: CharacterProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/character/${id}`);
  };

  return (
    <div
      className='bg-white rounded-xl overflow-hidden cursor-pointer transition ease-in-out duration-300 transform hover:shadow-xl hover:-translate-y-1'
      onClick={handleClick}
    >
      <img src={img} alt={name} className='w-full' width='50' />
      <h2 className='text-xl p-4'>{name}</h2>
    </div>
  );
}

export default CharacterCard;
