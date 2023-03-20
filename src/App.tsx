import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import About from './pages/About';
import Store from './pages/Store';
import Navbar from './components/Navbar';
import storeItems from './data/items';
import { TItemToggle } from './types/TStoreItems';
import CartContext from './context/cartContext';

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

  const providerState = React.useMemo(
    () => ({
      items,
      toggleItem,
    }),
    [items, toggleItem],
  );

  return (
    <CartContext.Provider value={providerState}>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="store" element={<Store />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </Container>
    </CartContext.Provider>
  );
}

export default App;
