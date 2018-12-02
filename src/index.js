import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './Styled/GlobalStyle';
import { library } from '@fortawesome/fontawesome-svg-core';
<<<<<<< HEAD
import { faEnvelope, faMobileAlt, faDesktop, faGraduationCap, faComment, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { fab, faGithub, faLinkedinIn, faReact, faGitSquare } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faEnvelope, faGithub, faLinkedinIn, faGitSquare, faMobileAlt, faDesktop, faGraduationCap, faReact, faComment, faExclamationTriangle)
=======
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { fab, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faEnvelope, faGithub, faLinkedinIn, faMobileAlt )
>>>>>>> 5f8fc5f9d7f4e0ad39e197b5b5e4d8e7844b658b


ReactDOM.render(
		<div>
			<App />
			<GlobalStyle />
		</div>, 
		document.getElementById('root')
	);
