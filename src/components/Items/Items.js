import React, { useContext } from 'react';
import ItemsContext from '../../contexts/ItemsContext';
import Salad from '../Salad/Salad';
import Cheese from '../Cheese/Cheese';
import Meat from '../Meat/Meat';
import { Wrapper, CartContent } from './Items.styles';


const Cart = () => {

  const { items } = useContext(ItemsContext);

  const fillArray = (value, len) => {
    var arr = [];
    for (var i = 0; i < len; i++) {
      arr.push(value);
    }
    return arr;
  }


  return (
    <Wrapper>
      <CartContent>

        {!items.length && <p> Please start adding ingredients! </p>}
        {items.map((item) => {
          for (let i = 0; i < item.qty; i++) {
            if (item.product.pId === 1)
              return fillArray(<Salad />, item.qty)
            if (item.product.pId === 2)
              return fillArray(<Cheese />, item.qty)
            if (item.product.pId === 3)
              return fillArray(<Meat />, item.qty)
          }
        })}


      </CartContent>
    </Wrapper>
  );
};

export default Cart;
