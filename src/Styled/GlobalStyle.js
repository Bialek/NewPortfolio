import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: none;
	}
	svg {
		margin: 0 10px;
	}
	::-webkit-scrollbar {
        width: 12px;
    } 
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    } 
    ::-webkit-scrollbar-thumb {
       box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    }
`