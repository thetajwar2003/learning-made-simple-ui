'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import SignIn from './signin';
import SignUp from './signup';

// Add a new prop type for the component
interface LoginProps {
  defaultMode?: 'signup' | 'signin';
}

export default function Login({ defaultMode = 'signup' }: LoginProps) {
  const [isSignUp, setIsSignUp] = useState(defaultMode === 'signup');
  const router = useRouter();

  const handleSignUpSuccess = () => {
    router.push('/dashboard'); // Redirect to the dashboard after sign up
  };

  const handleSignInSuccess = () => {
    router.push('/dashboard'); // Redirect to the dashboard after sign in
  };

  const switchMode = () => {
    setIsSignUp(!isSignUp);
  };

  // If you want to react to changes in defaultMode prop:
  useEffect(() => {
    setIsSignUp(defaultMode === 'signup');
  }, [defaultMode]);

  return (
    <section className='text-gray-400 body-font absolute inset-0 bg-black'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-col text-center w-full mb-12'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font text-white mb-4'>
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
            {isSignUp
              ? 'Create an account to get started!'
              : 'Sign in to continue to your dashboard.'}
          </p>
        </div>
        {isSignUp ? (
          <SignUp
            onSignUpSuccess={handleSignUpSuccess}
            onSwitchMode={switchMode}
          />
        ) : (
          <SignIn
            onSignInSuccess={handleSignInSuccess}
            onSwitchMode={switchMode}
          />
        )}
      </div>
    </section>
  );
}
