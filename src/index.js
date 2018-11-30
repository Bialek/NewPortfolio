import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './Styled/GlobalStyle';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { fab, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faEnvelope, faGithub, faLinkedinIn, faMobileAlt )


ReactDOM.render(
		<div>
			<App />
			<GlobalStyle />
		</div>, 
		document.getElementById('root')
	);

