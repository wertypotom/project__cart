import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import cartContext from '../../context/cartContext';
import formatCurrency from '../../utilities/currencyFormater';

type Props = {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
  amount: number;
};

function StoreItem({ id, imgUrl, name, price, amount }: Props) {
  const { toggleItem } = useContext(cartContext);

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {amount === 0 ? (
            <Button
              data-testid="add-to-cart"
              className="w-100"
              onClick={() => toggleItem(id, 'add')}
            >
              Add to Cart
            </Button>
          ) : (
            <div
              data-testid="toggle-btns"
              className="d-flex align-items-center flex-column"
              style={{ gap: '0.5rem' }}
            >
              <div>
                <Button onClick={() => toggleItem(id, 'remove')}>-</Button>
                <span className="mx-2">{amount} in cart</span>
                <Button onClick={() => toggleItem(id, 'add')}>+</Button>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => toggleItem(id, 'reset')}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default StoreItem;
