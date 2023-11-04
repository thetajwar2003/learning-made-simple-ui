// src/pages/login.tsx
'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthInputs, signIn, signUp } from '../../auth/auth'; // Adjust the import path as necessary

export default function Login() {
  const [error, setError] = useState<string>('');
  const [isSignUp, setIsSignUp] = useState<boolean>(true);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthInputs>();

  const onSubmit = async (data: AuthInputs) => {
    setError('');
    if (isSignUp) {
      try {
        await signUp(data);
        router.push('/dashboard'); // Redirect to the dashboard after sign up
      } catch (error: any) {
        setError(error.message);
      }
    } else {
      try {
        await signIn(data);
        router.push('/dashboard'); // Redirect to the dashboard after sign in
      } catch (error: any) {
        setError(error.message);
      }
    }
  };

  return (
    <section className='text-gray-400 body-font absolute inset-0 bg-black'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-row text-center w-full mb-12 justify-around'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font text-white'>
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='lg:w-1/2 md:w-2/3 mx-auto'
        >
          <div className='flex flex-col -m-2'>
            <div className='p-2 w-1/2 mx-auto'>
              <div className='relative'>
                <label
                  htmlFor='email'
                  className='leading-7 text-sm text-gray-400'
                >
                  Email
                </label>
                <input
                  type='text'
                  id='email'
                  {...register('email', { required: 'Email is required' })}
                  className='w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
                {errors.email && (
                  <p className='text-red-500'>{errors.email.message}</p>
                )}
              </div>
            </div>
            <div className='p-2 w-1/2 mx-auto'>
              <div className='relative'>
                <label
                  htmlFor='password'
                  className='leading-7 text-sm text-gray-400'
                >
                  Password
                </label>
                <input
                  type='password'
                  id='password'
                  {...register('password', {
                    required: 'Password is required',
                  })}
                  className='w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
                {errors.password && (
                  <p className='text-red-500'>{errors.password.message}</p>
                )}
              </div>
            </div>
            <div className='p-2 w-full'>
              <button
                type='submit'
                className='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'
              >
                {isSignUp ? 'Sign Up' : 'Sign In'}
              </button>
            </div>
            {error && <p className='text-red-500 text-center'>{error}</p>}
          </div>
        </form>
        <div className='text-center mt-4'>
          <button
            type='button'
            onClick={() => setIsSignUp(!isSignUp)}
            className='text-white'
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
