'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { AuthFormProps, AuthInputs, signUp } from '../../auth/auth'; // Adjust the import path as necessary

const SignUp: React.FC<AuthFormProps> = ({
  onSignUpSuccess = () => {},
  onSwitchMode = () => {},
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthInputs>();

  const onSubmit = async (data: AuthInputs) => {
    try {
      // Include userType when signing up
      await signUp(data);
      onSignUpSuccess();
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='lg:w-1/2 md:w-2/3 mx-auto'
    >
      {/* Email Input */}
      <div className='p-2 w-1/2 mx-auto'>
        <div className='relative'>
          <label htmlFor='email' className='leading-7 text-sm text-gray-400'>
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

      {/* Password Input */}
      <div className='p-2 w-1/2 mx-auto'>
        <div className='relative'>
          <label htmlFor='password' className='leading-7 text-sm text-gray-400'>
            Password
          </label>
          <input
            type='password'
            id='password'
            {...register('password', { required: 'Password is required' })}
            className='w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
          />
          {errors.password && (
            <p className='text-red-500'>{errors.password.message}</p>
          )}
        </div>
      </div>

      {/* User Type Radio Buttons */}
      <div className='p-2 w-full'>
        <div className='relative flex justify-center'>
          <label className='leading-7 text-sm text-gray-400 mr-4'>
            User Type:
          </label>
          <div className='form-check form-check-inline'>
            <input
              {...register('userType', { required: 'User type is required' })}
              type='radio'
              id='student'
              value='student'
              className='form-check-input'
            />
            <label htmlFor='student' className='form-check-label mr-2'>
              Student
            </label>
          </div>
          <div className='form-check form-check-inline'>
            <input
              {...register('userType', { required: 'User type is required' })}
              type='radio'
              id='teacher'
              value='teacher'
              className='form-check-input'
            />
            <label htmlFor='teacher' className='form-check-label'>
              Teacher
            </label>
          </div>
        </div>
        {errors.userType && (
          <p className='text-red-500 text-center'>{errors.userType.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className='p-2 w-full'>
        <button
          type='submit'
          className='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'
        >
          Sign Up
        </button>
      </div>

      {/* Switch Mode Button */}
      <div className='text-center mt-4'>
        <button type='button' onClick={onSwitchMode} className='text-white'>
          Already have an account? Sign In
        </button>
      </div>
    </form>
  );
};

export default SignUp;
