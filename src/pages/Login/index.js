import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo, Apresent, Beneficios,Contato,Rodape} from './styled';

import teste from './teste.png';
import teste3 from './teste3.png';
import fim from './fim2.jpg';

export default function Login() {
  
  return (
    <Container>
      <Apresent>
        <div>
          <Title isRed>
          </Title>

          <Paragrafo>Olá meu nome e João Ryan dos Santos, esté e meu site pessoal feito afim de
            falar mais sobre meus estudos e trabalho 
          </Paragrafo>
          
        </div>
         <div>
        <img align="right" alt="Joao-yoda" height="350px" width="350px" src="https://media.giphy.com/media/xUOxfg0ESyhKOv4Vva/giphy.gif"/>
          </div>
  

      </Apresent>

      <Beneficios>
        <Title></Title>
        
        <div>
        <img align="right" alt="Joao-yoda" height="490px" width="500px" src="https://media.giphy.com/media/EDSEUi2nW7jV8PyQiJ/giphy.gif"/>
          </div>
        <div>
          Atualmente estou cursando engenharia da computação
           no Instituto Nacional de Telecomunicaçoes(inatel) 
        </div>
        
        <div>
          
        <img align="right" alt="Joao-yoda" height="490px" width="500px" src="https://media.giphy.com/media/Cc9oTDAv3088mUwAxj/giphy.gif"/>
          </div>
        <div>
         Trabalho na Empresa Pratica klimaquip, onde sou desenvolvedor web na equipe develop digital
        
        </div>

        <div>
        <img align="right" alt="Joao-yoda" height="490px" width="500px" src="https://media.giphy.com/media/LxxGPgdzPbLLD7PDiF/giphy.gif"/>
          </div>
  
        <div>
         Alem de tudo costumo me aventurar no mundo da tecnologias para aprender mais e me aperfeiçoar 
        </div>

      </Beneficios>
     <Contato>
     <div>
          <Paragrafo>
            <h1>
            Contato
         </h1>
           
          <div><a href="https://www.instagram.com/joaoryansantos/" ><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"/> </a></div>
          <div><a href = "mailto:sjoaoryan@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"/></a></div>
          <div><a href="https://www.linkedin.com/in/joao-ryan/" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/></a></div>
          <div><a href="https://github.com/joaoryan" ><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/></a></div>
          
          
          </Paragrafo>
         
        </div>
        
     </Contato>

     <Rodape>
     <div>
          <img src={fim}/>
          </div>
     </Rodape>



    </Container>

  );

}