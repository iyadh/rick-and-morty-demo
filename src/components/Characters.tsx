import useStore from '@/store';
import Card from './shared/Card';
import type { Character } from '@/types';
import SearchBar from './shared/SearchBar';

const Characters = () => {
  const characters = useStore(state => state.characters);
  const cards = characters.map((c: Character) => <Card key={c.id} id={c.id} img={c.image} name={c.name} />);
  return (
    <div className='container mx-auto py-8 px-4 md:px-0'>
      <SearchBar />
      <section className='characters--grid grid grid-cols-1 md:grid-cols-5 gap-4'>{cards}</section>
    </div>
  );
};

export default Characters;
