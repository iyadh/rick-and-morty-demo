import { useState } from 'react';
import { useSearchParams } from 'react-router';
import type { FormEvent } from '@/types';

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [name, setName] = useState(searchParams.get('name') || '');
  const [status, setStatus] = useState(searchParams.get('status') || '');

  const updateUrl = () => {
    const params = new URLSearchParams();

    if (name) params.set('name', name);
    if (status) params.set('status', status);

    setSearchParams(params);
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    updateUrl();
  };

  const reset = () => {
    setName('');
    setStatus('');
    setSearchParams(new URLSearchParams());
  };

  return (
    <form
      className='flex flex-col md:flex-row flex-nowrap justify-between items-center bg-white p-4 mb-8 rounded-xl space-x-4'
      onSubmit={submit}
    >
      <label htmlFor='name' className='w-full md:w-8/12 flex'>
        <input
          id='name'
          value={name}
          onChange={e => setName(e.target.value)}
          type='text'
          className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
          placeholder='Enter a character name ...'
        />
      </label>
      <div className='flex flex-row items-center space-x-3 mt-4 md:mt-0'>
        <label htmlFor='isAlive'>
          <input
            id='isAlive'
            checked={status === 'alive'}
            onChange={e => setStatus(e.target.value)}
            type='radio'
            name='status'
            value='alive'
          />
          Alive
        </label>
        <label htmlFor='isDead'>
          <input
            id='isDead'
            checked={status === 'dead'}
            onChange={e => setStatus(e.target.value)}
            type='radio'
            name='status'
            value='dead'
          />
          Dead
        </label>

        <label htmlFor='isUnknown'>
          <input
            id='isUnknown'
            checked={status === 'unknown'}
            onChange={e => setStatus(e.target.value)}
            type='radio'
            name='status'
            value='unknown'
          />
          Unknown
        </label>
      </div>
      <div className='controls space-x-2 mt-4 md:mt-0 flex'>
        <button
          type='reset'
          onClick={reset}
          className='p-2 rounded-lg bg-gray-100 text-gray-700 tracking-widest uppercase text-sm'
        >
          Reset
        </button>
        <button type='submit' className='p-2 rounded-lg bg-green-100 text-green-900 tracking-widest uppercase text-sm'>
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
