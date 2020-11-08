import React from 'react'
import { useHistory } from 'react-router-dom';
import Items from '../../components/Items/Items'
import BreadTop from '../BreadTop/BreadTop';
import BreadBottom from '../BreadBottom/BreadBottom';
import '../../Burger.css';

import { Wrapper, Info } from './Orders.styles';
const Orders = () => {


    return (

        <Wrapper>
            <div className="burgerOrder">
            <Info>Siparişiniz Başarılı bir şekilde oluşturuldu.</Info>
                <BreadTop />
                <Items />
                <BreadBottom />
                
            </div>
            
        </Wrapper>

    )
}

export default Orders
