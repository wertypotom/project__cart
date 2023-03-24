import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import cartContext from '../../context/cartContext';
import { TStoreItems } from '../../types/TStoreItems';
import formatCurrency from '../../utilities/currencyFormater';

type Props = {
  item: TStoreItems;
};

function CartCard({ item }: Props) {
  const { toggleItem } = useContext(cartContext);
  const totalItems = item.amount * item.price;

  return (
    <Card className="d-flex">
      <Card.Img
        src={item.imgUrl}
        height="100px"
        width="100"
        style={{ objectFit: 'cover' }}
      />
      <Card.Body style={{ gap: 5 }} className="d-flex align-items-center">
        <div className="d-flex flex-column me-auto">
          <span>{item.name}</span>
          <span className="text-muted">{formatCurrency(item.price)}</span>
        </div>
        <span>{formatCurrency(totalItems)}</span>
        <Button
          onClick={() => toggleItem(item.id, 'reset')}
          style={{ height: 40 }}
          variant="outline-danger"
          className="rounded-2 d-flex align-align-items-center justify-content-center "
        >
          x
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CartCard;
