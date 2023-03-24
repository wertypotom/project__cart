import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import cartContext from '../../context/cartContext';
import formatCurrency from '../../utilities/currencyFormater';
import CartCard from './CartCard';

function CartItemsContainer() {
  const { items } = useContext(cartContext);
  const totalPrice = items.reduce((r, i) => (r += i.amount * i.price), 0);

  return (
    <Container className="d-flex flex-column gap-2">
      {items.map((item) => {
        if (item.amount) {
          return <CartCard key={item.id} item={item} />;
        }

        return null;
      })}
      <div className="align-self-end fw-bold">
        Total: {formatCurrency(totalPrice)}
      </div>
    </Container>
  );
}

export default CartItemsContainer;
