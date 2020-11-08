import React, { useContext } from 'react'
import { useHistory,Link } from 'react-router-dom';
import ItemsContext from '../../contexts/ItemsContext';
import { upsertProductToChart } from '../../utils/itemsUtils';
import Counter from '../Counter/Counter';
import Button from '../Button/Button';
import {Wrapper} from './Footer.styles';
const Footer = () => {

  const history = useHistory();
  const { items, updateItems } = useContext(ItemsContext);

  const handleIncrement = (item) => {
    updateItems((prevItems) => upsertProductToChart(prevItems, item));
  };

  const handleDecrement = (item) => {
    updateItems((prevItems) =>
      upsertProductToChart(prevItems, item, false)
    );
  };


  const totalPrice = items.reduce((previousValue, currentItem) => {
    return previousValue + currentItem.price * currentItem.qty;
  }, 0);

  return (
    <Wrapper>
      <h4>{totalPrice.toFixed(2)}</h4>
      <Counter
        text={'Salad'}
        onIncrement={() => handleIncrement('Salad')}
        onDecrement={() => handleDecrement('Salad')}
      />
      <Counter
        text={'Cheese'}
        onIncrement={() => handleIncrement('Cheese')}
        onDecrement={() => handleDecrement('Cheese')}
      />
      <Counter
        text={'Meat'}
        onIncrement={() => handleIncrement('Meat')}
        onDecrement={() => handleDecrement('Meat')}
      />
      <Button
          text="Order"
          color="orange"
          onClick={() => {
            <Link to='/Orders'> Order</Link>;
          }}
        />
    </Wrapper>
  )
}

export default Footer
