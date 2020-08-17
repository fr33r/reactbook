import React from 'react'
import AddColorForm from './AddColorForm.js'
import ColorList from './ColorList.js'
import { v4 } from 'uuid'

/*
 * App represents the root component, which contains the state
 * for the entire application.
 */
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			colors: []
		};
		this.addColor = this.addColor.bind(this);
		this.rateColor = this.rateColor.bind(this);
		this.removeColor = this.removeColor.bind(this);
	}

	/**
	 * Adds a new color with the provided title and hex color.
	 */
	addColor(title, color) {
		const colors = [
			...this.state.colors,
			{
				id: v4(),
				title,
				color,
				rating: 0
			}
		];
		this.setState({colors});
	}

	/**
	 * Rates the color with the provided ID to have the provided rating.
	 */
	rateColor(id, rating) {
		const colors = this.state.colors.map(color =>
			(color.id !== id) ? 
				color
				:
				{
					...color,
					rating,
				}
		);
		this.setState({colors});
	}

	/**
	 * Removes the color with the ID provided.
	 */
	removeColor(id) {
		const colors = this.state.colors.filter(
			color => color.id !== id 
		);
		this.setState({colors});
	}

	render() {
		let {colors} = this.state;
		return (
			<div className="app" >
				<AddColorForm onNewColor={this.addColor} />
				<ColorList
					colors={colors} 
					onRate={this.rateColor}
					onRemove={this.removeColor} />
			</div>
		);
	}
}

export default App;
