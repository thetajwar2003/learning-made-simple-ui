'use client';

import { Amplify, Auth } from 'aws-amplify';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

Amplify.configure({
  Auth: {
    mandatorySignIn: false,
    region: process.env.NEXT_PUBLIC_REGION,
    userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID,
    userPoolWebClientId: process.env.NEXT_PUBLIC_APP_CLIENT_ID,
  },
});

type AuthInputs = {
  email: string;
  password: string;
};

export default function Authentication() {
  const [error, setError] = useState<string>('');
  const [isSignUp, setIsSignUp] = useState<boolean>(true);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthInputs>();

  const signUp = async (data: AuthInputs) => {
    const { email, password } = data;
    try {
      await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
        },
      });
      // Directly sign in after successful sign up
      await signIn(data);
    } catch (error: any) {
      setError(error.message);
    }
  };

  const signIn = async (data: AuthInputs) => {
    const { email, password } = data;
    try {
      await Auth.signIn(email, password);
      router.push('/dashboard');
    } catch (error: any) {
      setError(error.message);
    }
  };

  const onSubmit = async (data: AuthInputs) => {
    setError('');
    if (isSignUp) {
      await signUp(data);
    } else {
      await signIn(data);
    }
  };

  return (
    <section className='text-gray-400 body-font absolute inset-0 bg-black'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-row text-center w-full mb-12 justify-around'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font text-white'>
            {isSignUp
              ? 'Sign Up to Use Learning Made Simple'
              : 'Sign In to Learning Made Simple'}
          </h1>
        </div>
        <form
          className='lg:w-1/2 md:w-2/3 mx-auto justify-center'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='flex flex-col -m-2 items-center'>
            <div className='p-2 w-1/2'>
              <div className='relative'>
                <label className='leading-7 text-sm text-gray-400'>Email</label>
                <input
                  type='text'
                  id='email'
                  {...register('email', {
                    required: 'Please enter a valid email.',
                  })}
                  className='w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
            </div>
            <div className='p-2 w-1/2'>
              <div className='relative'>
                <label className='leading-7 text-sm text-gray-400'>
                  Password
                </label>
                <input
                  type='password'
                  id='password'
                  {...register('password', {
                    required: 'Please enter a password.',
                    minLength: {
                      value: 8,
                      message: 'Please enter a stronger password.',
                    },
                  })}
                  className='w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
            </div>
            <div className='p-2 w-auto space-y-4'>
              <button
                type='submit'
                id='auth-submit'
                className='flex mx-auto text-white bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-secondary rounded-full text-lg w-full justify-center items-center'
              >
                <img
                  className='w-5 h-5'
                  src='https://img.icons8.com/material-outlined/24/FFFFFF/enter-2.png'
                  loading='lazy'
                  alt='log in logo'
                />
                {isSignUp ? 'Sign Up' : 'Sign In'}
              </button>
            </div>
            {error && (
              <p id='authError' className='text-red-700'>
                {error}
              </p>
            )}
          </div>
        </form>
        <div className='text-center mt-4'>
          <button
            type='button'
            onClick={() => setIsSignUp(!isSignUp)}
            className='text-white'
            id='auth-toggle'
          >
            {isSignUp
              ? 'Already have an account? Sign In'
              : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </section>
  );
}
