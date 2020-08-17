import React from 'react'
import { Menu, NewColor, Colors } from './containers/containers'

/*
 * App represents the root component for the applicaiton.
 */
class App extends React.Component {
	render() {
		return (
			<div className="app" >
				<Menu />
				<NewColor />
				<Colors />
			</div>
		);
	}
}

export default App;
