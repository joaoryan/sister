import styled from "styled-components";

export const Title = styled.h1` 
display: flex;
align-items: center;
justify-content: center;
    font-size: 22px;
    color: red;
`;

export const Paragrafo = styled.p` 
font-size: 20px;
line-height: 1.5;
padding-left: 20px;
min-width: 180px;
//font-family: 'Courier New', Courier, monospace;
color: black
`;

export const Apresent = styled.section`
background: white;
padding: 0px 100px;
display: flex;
align-items: center;
justify-content: space-around;
div{
    display: flex;
    justify-content: center;
}
img{
  
}
`;

export const Beneficios = styled.section`
background: black;
color: yellow;
padding: 50px 0px ;
display: flex;
flex-flow: column nowrap;
justify-content: center;

img{
    display: flex;
    justify-content: center;
    width: 450px;
    height: 450px;
    border-radius: 100%;
}

div{
    display: flex;
    margin-bottom: 60px;
    justify-content: center;
    height: auto;
    font-size: 20px;
   // font-family: 'Courier New', Courier, monospace;
    padding: 0px 10px;
}

`;

export const Contato = styled.section`
display: flex;
align-items: center;
  justify-content: center;
background: yellow;
height: auto;
padding: 80px 0px;

h1{
    display: flex;
    justify-content: center;
    padding-bottom:50px;
   // font-family: 'Courier New', Courier, monospace;
}
div{
    display: flex;
    justify-content: center;
    align-items: center;
   
  
}
a{
  margin: 4px; 
}
img{
    width: 250px;
    height: 50px;
    border-radius: 60px;
}
`;

export const Rodape = styled.div`
background: black;
height: auto;
div{
    display: flex;
    justify-content: center;
}
img{
    width: 120px;
}
`;