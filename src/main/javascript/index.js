import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import '../styles/index.css';
import App from './components/App';

import store from './store'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('react')
)