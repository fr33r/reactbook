import React from 'react';
import ReactDOM from 'react-dom';
import AddColorForm from './components/AddColorForm.js'

ReactDOM.render(
	<React.StrictMode>
		<AddColorForm onNewColor={(t, c) => {
			console.log(`TODO: add new ${t} and ${c} to the list.`);
			console.log(`TODO: render UI with the new color.`);
		}}/>
	</React.StrictMode>,
	document.getElementById('root')
);
