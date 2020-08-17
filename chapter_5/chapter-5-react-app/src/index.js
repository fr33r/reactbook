import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/Menu.js'
import Data from './data/data.js'

ReactDOM.render(
	<React.StrictMode>
		<Menu recipes={Data} title="Delicious Recipes"/>
	</React.StrictMode>,
	document.getElementById('root')
);
