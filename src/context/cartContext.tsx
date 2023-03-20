import React from 'react';
import { TItemToggle, TStoreItems } from '../types/TStoreItems';

type ContextType = {
  items: TStoreItems[];
  toggleItem: (id: number, type: TItemToggle) => void;
};

const initState: ContextType = { items: [], toggleItem: () => {} };

export default React.createContext<ContextType>(initState);
