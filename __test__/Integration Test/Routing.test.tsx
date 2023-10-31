import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Home from '../../src/app/page'; // Update the path according to your project structure

jest.mock('next/router', () => require('next-router-mock'));

describe('INTEGRATION TEST: Navigate from Home to Login Page', () => {
  it('navigates to authentication page on sign up link click {Integration Test}', () => {
    render(<Home />);

    const signUpLink = screen.getByRole('link', { name: /Sign Up/i });
    fireEvent.click(signUpLink);

    // Assuming that the "Sign Up" text is present in the authentication page
    const signUpText = screen.getByText('Sign Up');
    expect(signUpText).toBeInTheDocument();
  });



  
});
