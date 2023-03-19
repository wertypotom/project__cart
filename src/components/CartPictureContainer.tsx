import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { TItemToggle, TStoreItems } from '../types/TStoreItems';
import { formatCurrency } from '../utilities/currencyFormater';
import CartCard from './CartCard';

type Props = {
  items: TStoreItems[];
  toggleItem: (id: number, type: TItemToggle) => void;
};

const CartPictureContainer = ({ items, toggleItem }: Props) => {
  const totalPrice = items.reduce((r, i) => (r += i.amount * i.price), 0);

  return (
    <Container className='d-flex flex-column gap-2'>
      {items.map((item) => {
        if (item.amount) {
          return <CartCard key={item.id} item={item} toggleItem={toggleItem} />;
        }

        return <></>;
      })}
      <div className='align-self-end fw-bold'>
        Total: {formatCurrency(totalPrice)}
      </div>
    </Container>
  );
};

export default CartPictureContainer;
