import { screen, render, fireEvent } from '@testing-library/react';
import Navbar from '../Navbar/Navbar';
import { expect, vi } from 'vitest';
import renderWithRouter from '../../helpers/renderWithRouter';

describe('Testing React Router', () => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // устарело
      removeListener: vi.fn(), // устарело
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });

  it('should correctly navigate between pages', () => {
    render(renderWithRouter(<Navbar />));

    const linkHome = screen.getByTestId('link-home');
    const linkAbout = screen.getByTestId('link-about');
    const linkStore = screen.getByTestId('link-store');

    fireEvent.click(linkHome);
    expect(screen.getByText(/Home page/)).toBeInTheDocument();
    fireEvent.click(linkAbout);
    expect(screen.getByText(/About page/)).toBeInTheDocument();
    fireEvent.click(linkStore);
    expect(screen.getByText(/Store page/)).toBeInTheDocument();
  });
  it('should navigate to Not Found page', () => {
    render(renderWithRouter(null, '/123456'));
    screen.debug();

    expect(screen.getByText(/NotFound/)).toBeInTheDocument();
  });
});
