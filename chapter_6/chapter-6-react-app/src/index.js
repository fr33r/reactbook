import React from 'react';
import ReactDOM from 'react-dom';
import Data from './data/data.js'
import Summary from './components/Summary.js'

ReactDOM.render(
	<React.StrictMode>
		{Data.map((recipe, idx) =>
			<Summary 
				key={idx}
				//title={recipe.name}
				numIngredients={recipe.ingredients.length}
				numSteps={recipe.steps.length} />)}
	</React.StrictMode>,
	document.getElementById('root')
);
