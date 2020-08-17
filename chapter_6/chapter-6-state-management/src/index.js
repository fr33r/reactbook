import React from 'react';
import ReactDOM from 'react-dom';
import StarRating from './components/StarRating.js'
import IndexCSS from './styles/styles.css'

ReactDOM.render(
	<React.StrictMode>
		<StarRating totalStars={10} />
	</React.StrictMode>,
	document.getElementById('root')
);
