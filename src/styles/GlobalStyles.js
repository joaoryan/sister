import styled,{ createGlobalStyle } from 'styled-components';
import * as color from '../config/color';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
*{

    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
}
body{
font-family: sans-serif;
background: ${color.primaryDarkColor};
color: ${color.primaryDarkColor};

}

html, border, #root {
    height: 100%;
   

}

button{
    cursor: pointer;
    background: ${color.primaryColor};
    border: none;
    color: #fff;
    padding:10px 20px ;
    border-radius: 4px;
    font-weight: 700;
}

`;

export const Container = styled.body`
width: 100%;
height: 100%;
min-height: 100%;
background: blue;
font-family: 'Courier New', Courier, monospace;

`;
