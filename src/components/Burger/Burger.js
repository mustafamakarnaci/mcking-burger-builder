import React, { useContext } from 'react';
import BreadBottom from '../BreadBottom/BreadBottom';
import BreadTop from '../BreadTop/BreadTop';
import Items from '../Items/Items';
import '../../Burger.css';
import { useHistory, Link } from 'react-router-dom';
import ItemsContext from '../../contexts/ItemsContext';
import { upsertProductToChart } from '../../utils/itemsUtils';
import Counter from '../Counter/Counter';
import Button from '../Button/Button';
import { Order } from './Burger.styles';

const Burger = () => {
    const history = useHistory();
    const { items, updateItems } = useContext(ItemsContext);

    const handleIncrement = (productId) => {
        updateItems((prevItems) => upsertProductToChart(prevItems, productId));
    };

    const handleDecrement = (productId) => {
        updateItems((prevItems) => upsertProductToChart(prevItems, productId, false));
    };

    const handleOrders= () => {
        history.push('/Orders');
    }

    const totalPrice = items.reduce((previousValue, currentItem) => {
        return previousValue + currentItem.price;
    }, 0);



    return (
        <>
            <div className="burger">
                <BreadTop />
                <Items />
                <BreadBottom />
            </div>
            <Order>
                <h4>Total Price: {totalPrice.toFixed(2)}</h4>
                <Counter
                    key={1}
                    text={'Salad ($0.50):'}
                    productId={1}
                    onIncrement={() => handleIncrement(1)}
                    onDecrement={() => handleDecrement(1)}
                />
                <Counter
                    key={2}
                    text={'Cheese ($0.40):'}
                    productId={2}
                    onIncrement={() => handleIncrement(2)}
                    onDecrement={() => handleDecrement(2)}
                />
                <Counter
                    key={3}
                    text={'Meat ($1.30):'}
                    productId={3}
                    onIncrement={() => handleIncrement(3)}
                    onDecrement={() => handleDecrement(3)}
                />
                
                <Button
                    text="Order"
                    color='brown'
                    bgColor={items.length ? 'gold' : 'grey'}
                    disabled={!items.length}
                    onClick={()=> handleOrders()}
                >Order</Button>
            </Order>
        </>
    )
};

export default Burger;
