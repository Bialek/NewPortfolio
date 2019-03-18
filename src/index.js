import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './Styled/GlobalStyle';
import { library } from '@fortawesome/fontawesome-svg-core';


import { faEnvelope, faMobileAlt, faDesktop, faGraduationCap, faAngleLeft, faAngleRight, faComment, faExclamationTriangle, faTimes, faHome, faChartBar, faLaptopCode, faFilePdf, faSpinner, faFileCode } from '@fortawesome/free-solid-svg-icons';
import { fab, faGithub, faLinkedinIn, faReact, faGitSquare, faWpforms } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faHome, faEnvelope, faGithub, faLinkedinIn, faWpforms, faAngleLeft, faAngleRight, faGitSquare, faMobileAlt, faChartBar, faTimes, faDesktop, faFilePdf, faSpinner, faFileCode,  faLaptopCode, faGraduationCap, faReact, faComment, faExclamationTriangle)

ReactDOM.render(
		<div>
			<App />
			<GlobalStyle />
		</div>, 
		document.getElementById('root')
	);
