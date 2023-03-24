import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import CartContext from '../../context/cartContext';
import { TStoreItems } from '../../types/TStoreItems';
import StoreItem from './StoreItem';

describe('Test StoreItem Component', () => {
  let item: TStoreItems;
  const items: TStoreItems[] = [
    {
      id: 1,
      name: 'Book',
      price: 10.99,
      imgUrl: '/imgs/book.jpg',
      amount: 0,
    },
    {
      id: 2,
      name: 'Table',
      price: 10.99,
      imgUrl: '/imgs/book.jpg',
      amount: 0,
    },
    {
      id: 3,
      name: 'Toy',
      price: 10.99,
      imgUrl: '/imgs/book.jpg',
      amount: 0,
    },
  ];
  const toggleItem = vi.fn(() => {});
  const { getByTestId, queryByTestId, getByText } = screen;

  beforeEach(() => {
    item = {
      id: 1,
      name: 'Book',
      price: 10.99,
      imgUrl: '/imgs/book.jpg',
      amount: 0,
    };
  });

  it('should create snapshot', () => {
    const componenet = render(<StoreItem {...item} />);
    expect(componenet).toMatchSnapshot();
  });

  it('should render "Add to cart" Btn', () => {
    const componenet = render(
      <CartContext.Provider value={{ toggleItem, items }}>
        <StoreItem {...item} />
      </CartContext.Provider>
    );

    const btn = getByTestId('add-to-cart');
    expect(btn).toBeInTheDocument();

    screen.debug();

    // const itemsAmount = getByText('1 in cart');
    // expect(itemsAmount).toBeInTheDocument();
    // const toggleBtns = getByTestId('toggle-btns');
    // expect(toggleBtns).toBeInTheDocument();
  });

  it('should render toggle btns', () => {
    item.amount = 2;
    const componenet = render(<StoreItem {...item} />);

    const addToCartBtn = queryByTestId('add-to-cart');
    const toggleBtns = getByTestId('toggle-btns');
    expect(addToCartBtn).not.toBeInTheDocument();
    expect(toggleBtns).toBeInTheDocument();
  });
});
