import React, { useContext } from 'react';
import Button from '../Button/Button';
import ItemsContext from '../../contexts/ItemsContext';
import { Wrapper,Value,Price } from './Counter.styles';

const Counter = ({ text,productId, onIncrement, onDecrement }) => {

  const { items } = useContext(ItemsContext);
  
  return (
    
    <Wrapper>
      <Price>{text}</Price>
      <Button color='white' bgColor='grey'  text="-" onClick={onDecrement} />
      <Value>
       {!items.find((item) => item.product.pId === productId) ? 0 : items.find((item) => item.product.pId === productId).qty}
      </Value>
      <Button bgColor='black' color='white' text="+" onClick={onIncrement} />
      <Price>Total Price: ${!items.find((item) => item.product.pId === productId) ? 0 : items.find((item) => item.product.pId === productId).price.toFixed(2)} </Price>
    </Wrapper>
  );
};

export default Counter;
