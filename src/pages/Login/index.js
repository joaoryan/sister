import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import {Title, Paragrafo,Apresent,Video} from './styled';
import * as exampleActions from '../../store/modules/example/actions'


export default function Login() {
const dispatch = useDispatch();

   function handleClick(e){
    e.preventDefault();
    
    dispatch(exampleActions.clicaBotaoRequest());

   }

    return (
        <Container>
            <Apresent>
            <div>
            <Title isRed>
                Login 42
                <small> Olá terraqueos </small>
            </Title>

            <Paragrafo>pao de queijo</Paragrafo>

            <button type="button" onClick={handleClick}>Enviar</button>
            </div>
            </Apresent>
          
          <Video>
            
            <>Video</>

          </Video>





        </Container>
        
    );

}