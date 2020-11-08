import React from 'react';

const ItemsContext = React.createContext({
  items: [], // {qty: 1, product: {}}
  updateItems: (newBasket) => {},
});

export default ItemsContext;
