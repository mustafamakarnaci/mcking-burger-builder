import React from 'react'
import { Route, Switch } from "react-router-dom";
import Burger from "../Burger/Burger";
import Orders from "../Orders/Orders";
const Content = () => {
    return (
        <div>
            <Switch>
                <Route path='/' exact component={Burger}/>
                <Route path='/Orders' component={Orders}/>
            </Switch>
        </div>
    )
}

export default Content
