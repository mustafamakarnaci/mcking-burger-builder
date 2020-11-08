import styled from 'styled-components';

export const Wrapper = styled.div`
    display:absolute;
    top:100px;
`;

export const Content = styled.div`
position:absolute;
top:300px;
    display: flex;
padding: 10px;
width: 500px;
border: 1px solid #d3d3d3;
margin-left:auto;
margin-right:auto;
align-items:center;
background: #fff;

flex-direction: column;
`;

export const Info = styled.p`
    font-size:20px;
    color:#000;
    font-weight:bold;
    letter-spacing:1.5px;
`;
