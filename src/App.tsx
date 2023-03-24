import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar/Navbar';
import storeItems from './data/items';
import { TItemToggle } from './types/TStoreItems';
import CartContext from './context/cartContext';
import AppRouter from './components/AppRouter/AppRouter';

function App() {
  const [items, setItems] = useState(storeItems);

  const toggleItem = (id: number, type: TItemToggle) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          amount:
            type === 'reset'
              ? 0
              : type === 'add'
              ? item.amount + 1
              : item.amount - 1,
        };
      }

      return item;
    });

    setItems(newItems);
  };

  return (
    <CartContext.Provider value={{ toggleItem, items }}>
      <Navbar />
      <Container className="mb-4">
        <AppRouter />
      </Container>
    </CartContext.Provider>
  );
}

export default App;
