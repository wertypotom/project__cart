import React from 'react';
import { describe, it } from 'vitest';
import CartItemsContainer from './CartItemsContainer';
import CartCard from './CartCard';
import { render } from '@testing-library/react';
import items from '../../data/items';

describe('Testing CartItemsContainer', () => {
  it('Renders CartItemsContainer conponent', () => {
    const component = render(<CartItemsContainer />);

    expect(component).toMatchSnapshot();
  });
});

describe('Testing Single Cart', () => {
  it('Renders CartItemsContainer conponent', () => {
    const component = render(<CartCard item={items[0]} />);

    expect(component).toMatchSnapshot();
  });
});
