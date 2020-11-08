import React from 'react';
import { Wrapper } from './Button.styles';
const Button = ({ color, bgColor, text, width,...restProps }) => {

  const mystyle = {
    color: color,
    backgroundColor: bgColor,
    width:width,
  };

  return (

    <Wrapper style={mystyle} {...restProps}>
      {text}
    </Wrapper>
  );
};

export default Button;
