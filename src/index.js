import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './Styled/GlobalStyle';
import { library } from '@fortawesome/fontawesome-svg-core';


import { faEnvelope, faMobileAlt, faDesktop, faGraduationCap, faComment, faExclamationTriangle, faHome, faChartBar, faLaptopCode, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { fab, faGithub, faLinkedinIn, faReact, faGitSquare } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faHome, faEnvelope, faGithub, faLinkedinIn, faGitSquare, faMobileAlt, faChartBar, faDesktop, faFilePdf, faLaptopCode, faGraduationCap, faReact, faComment, faExclamationTriangle)

ReactDOM.render(
		<div>
			<App />
			<GlobalStyle />
		</div>, 
		document.getElementById('root')
	);
