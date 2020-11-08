import styled from 'styled-components';


export const Wrapper = styled.div`
  
  background-color: #6E3C0F;
  margin:0;
    padding:0.5em 2em ;
`;

export const InlineContainer = styled.div`
  display: flex;
  margin:0;
  padding:0;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Menu = styled.ul`
  list-style-type: none;
  margin:0;
    padding:0;
  
  & > li {
    display: inline;
  }

  & > li a {
    margin:0;
    padding:0;
    text-decoration:none;
    color:white;
  }
  & > li a:focus {
    padding:0 5px;
    padding-bottom:11px;
    border-bottom:10px solid  #60ABC0;
    
    
  }
`;

export const Title = styled.h1`
  color:white;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
`;
