import rmLogo from '@assets/rick-and-morty.svg';

function Logo() {
  return (
    <div className='flex flex-row flex-grow justify-center space-x-4 place-self-center'>
      <img className='h-12' alt='Rick and Morty' src={rmLogo} />
      <div className='grid place-content-center text-left leading-4 uppercase tracking-widest font-bold'>
        Characters
        <br />
        Database
      </div>
    </div>
  );
}

export default Logo;
