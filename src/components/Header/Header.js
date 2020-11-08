import React from 'react'
import { Link } from "react-router-dom";

import { InlineContainer, Menu, Title, Wrapper } from './Header.styles';
const Header = () => {
    return (
        <Wrapper>
            <InlineContainer>
                <Title>Burger</Title>
                <Menu>
                    <li>
                        <Title>
                            <Link to='/'>Home</Link>
                        </Title>
                    </li>
                </Menu>
            </InlineContainer>

        </Wrapper>
    )
};

export default Header;
