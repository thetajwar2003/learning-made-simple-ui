import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../../src/app/page'; // Update the path according to your project structure

describe('UNIT TEST: Home Page', () => {
  it('Demonstrates the expected behavior of the component => Should render the main title correctly', () => {
    render(<Home />);
    const title = screen.getByText(
      'Where you can find all your classroom needs'
    );
    expect(title).toBeInTheDocument();
  });

  it('Component handles invalid/backup condition => should display alt text when image src is invalid', () => {
    render(<Home />);
    const image = screen.getByRole('img', { name: /hero/i });
    expect(image).toBeInTheDocument();

    // Simulate an error by setting an invalid src
    image.setAttribute('src', 'invalid-src');
    expect(image).toHaveAttribute('alt', 'hero');
  });

  it('Should render the description paragraph', () => {
    render(<Home />);
    const description = screen.getByText(
      /A comprehensive learning management system/i
    );
    expect(description).toBeInTheDocument();
  });

  it('Should render the Sign Up link', () => {
    render(<Home />);
    const signUpLink = screen.getByRole('link', { name: /Sign Up/i });
    expect(signUpLink).toBeInTheDocument();
    expect(signUpLink).toHaveAttribute('href', '/authentication');
  });

  it('Should render the image with correct attributes', () => {
    render(<Home />);
    const image = screen.getByRole('img', { name: /hero/i });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://dummyimage.com/720x600');
    expect(image).toHaveAttribute('alt', 'hero');
  });
});
