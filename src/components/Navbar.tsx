import React, { useContext, useState } from 'react';
import {
  Navbar as NavbarBS,
  Container,
  Nav,
  Button,
  Offcanvas,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import CartContext from '../context/cartContext';
import CartPicture from './CartPicture';
import CartPictureContainer from './CartCard/CartPictureContainer';

function Navbar() {
  const { items, toggleItem } = useContext(CartContext);
  const [show, setShow] = useState(false);
  const totalItems = items.reduce((r, i) => (r += i.amount), 0);

  return (
    <>
      <NavbarBS sticky="top" className="bg-white shadow-sm mb-3">
        <Container>
          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>
              Home
            </Nav.Link>
            <Nav.Link to="/store" as={NavLink}>
              Store
            </Nav.Link>
            <Nav.Link to="/about" as={NavLink}>
              About
            </Nav.Link>
          </Nav>
          <Button
            style={{ width: '3rem', height: '3rem', position: 'relative' }}
            variant="outline-primary"
            className="rounded-circle"
            onClick={() => setShow(true)}
          >
            <CartPicture />
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: 'white',
                width: '1.5em',
                height: '1.5em',
                position: 'absolute',
                bottom: -5,
                right: -10,
              }}
            >
              {totalItems}
            </div>
          </Button>
        </Container>
      </NavbarBS>
      <Offcanvas show={show} onHide={() => setShow(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <CartPictureContainer items={items} toggleItem={toggleItem} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Navbar;
