import { useSearchParams } from 'react-router';
import Card from './shared/Card';
import SearchBar from './shared/SearchBar';
import ErrorPanel from './shared/ErrorPanel';
import { useCharacters } from '@/hooks/useCharacters';

const Characters = () => {
  const [params] = useSearchParams();
  const query = {
    name: params.get('name') || undefined,
    status: params.get('status') || undefined,
  };

  const { characters, isLoading, error } = useCharacters(query);

  if (isLoading) return <div>Fetching data...</div>;
  if (error) return <ErrorPanel />;

  return (
    <div className='container mx-auto py-8 px-4 md:px-0'>
      <SearchBar />
      <section className='grid grid-cols-1 md:grid-cols-5 gap-4'>
        {characters.map(c => (
          <Card key={c.id} id={c.id} img={c.image} name={c.name} />
        ))}
      </section>
    </div>
  );
};

export default Characters;
