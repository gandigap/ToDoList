import { createGlobalStyle } from 'styled-components';
import { colors } from '@/constant';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }
   
  html,body{
    height: 100%;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    color:${colors.white};
  }

   #root {
    height: 100%;    
  }
  
`;

export default GlobalStyle;
