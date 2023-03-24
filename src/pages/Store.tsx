import React, { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import StoreItem from '../components/StoreItem/StoreItem';
import CartContext from '../context/cartContext';

function Store() {
  const { items } = useContext(CartContext);

  return (
    <>
      <h1>Store page</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {items.map((item) => (
          <Col key={item.id}>
            <StoreItem
              id={item.id}
              name={item.name}
              imgUrl={item.imgUrl}
              price={item.price}
              amount={item.amount}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Store;
