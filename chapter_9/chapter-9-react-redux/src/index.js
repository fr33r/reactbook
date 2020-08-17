import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js'
import './styles/styles.css'
import { Provider } from 'react-redux'
import { newStore } from './stores/stores'

// constructs the Redux store to be passed into the Redux provider.
const store = newStore();

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
