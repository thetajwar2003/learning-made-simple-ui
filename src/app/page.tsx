import Header from '@/components/Header';
import Link from 'next/link';
import Features from '@/components/HomePage/Features';
import FAQSection from '@/components/HomePage/Faq';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className='flex min-h-screen flex-col items-center p-24'>
        <div className='container mx-auto flex px-5 md:flex-row flex-col items-center mt-24'>
          {/* SECTION: Title */}
          <div className='lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center mr-5'>
            <h1
              className='title-font font-bold sm:text-4xl md:text-7xl mb-8 font-medium text-white'
              id='landing-title'
            >
              Where you can find all your classroom needs
            </h1>
            <p className='mb-10 leading-loose text-xl mr-2' id='brief-bio'>
              A comprehensive learning management system that combines the best
              features of Blackboard, Google Classroom, Pupil Path, and
              Microsoft Teams into a single, user-friendly interface
            </p>
            <Link
              href='/login'
              className='inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-lg'
            >
              Sign Up
            </Link>
          </div>

          {/* SECTION: Image */}
          <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
            <img
              className='object-cover object-center rounded'
              alt='hero'
              src='https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?q=80&w=3500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              id='large-logo'
            />
          </div>
        </div>
        <div className='mt-52'>
          <Features />
        </div>
        <div className='mt-44'>
          <FAQSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
