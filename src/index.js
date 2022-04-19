/*---------------------------
| IE 11 Support
---------------------------*/
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

/*---------------------------
| React and 3rd Party Libraries
---------------------------*/
import React from 'react';
import { createRoot } from 'react-dom/client';

/*---------------------------
| Components
---------------------------*/
import App from './UI/App.jsx';

/*---------------------------
| Render to DOM
---------------------------*/
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);