import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import renderWithRouter from '../../helpers/renderWithRouter';
import Navbar from './Navbar';

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

describe('Testind Navbar Component', () => {
  it('Should correctly render Navbar', () => {
    const component = render(renderWithRouter(<Navbar />));
    expect(component).toMatchSnapshot();
  });

  it('Should open cart on click', () => {
    render(renderWithRouter(<Navbar />));

    const toggleBtn = screen.getByRole('button');
    expect(toggleBtn).toBeInTheDocument();

    fireEvent.click(toggleBtn);

    const totalCount = screen.getByText(/Cart/i);
    expect(totalCount).toBeInTheDocument();
  });
});
