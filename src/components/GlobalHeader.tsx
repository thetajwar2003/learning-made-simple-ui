'use client';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/navigation';

export default function GlobalHeader() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await Auth.signOut();
      router.push('/'); // Redirect to the home page or login page after logout
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <header className='text-white bg-black body-font sticky top-0'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center '>
        <a className='flex title-font font-medium items-center text-white mb-4 md:mb-0'>
          {/* TODO: replace the scg with an actual logo of our product */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            stroke='currentColor'
            strokeLinejoin='round'
            strokeWidth='2'
            className='w-10 h-10 text-white p-2 bg-primary rounded-full'
            viewBox='0 0 24 24'
          >
            <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
          </svg>
          <span className='ml-3 text-xl'>Learning Made Simple</span>
        </a>
        <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
          <a className='mr-5 hover:text-gray-400'>First Link</a>
          <a className='mr-5 hover:text-gray-400'>Second Link</a>
          <a className='mr-5 hover:text-gray-400'>Third Link</a>
          <a className='mr-5 hover:text-gray-400'>Fourth Link</a>
        </nav>
        <button
          onClick={handleLogout}
          id='logout-button'
          className='inline-flex items-center bg-primary border-0 py-1 px-3 focus:outline-none hover:bg-secondary rounded text-base mt-4 md:mt-0'
        >
          Log Out
          <svg
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            className='w-4 h-4 ml-1'
            viewBox='0 0 24 24'
          >
            <path d='M5 12h14M12 5l7 7-7 7'></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
