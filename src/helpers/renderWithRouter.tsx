import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from '../components/AppRouter/AppRouter';

const renderWithRouter = (
  component: React.ReactElement | null,
  initialPath = '/'
) => {
  return (
    <MemoryRouter initialEntries={[initialPath]}>
      {component}
      <AppRouter />
    </MemoryRouter>
  );
};

export default renderWithRouter;
