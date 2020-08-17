import React from 'react'
import PropTypes from 'prop-types'

/*
 * The Summary component represents a summary of a single recipe, communicating
 * the name of the recipe and the number of ingredients and steps.
 */
class Summary extends React.Component {

	static propTypes = {
		ingredients: PropTypes.number,
		steps: PropTypes.number,
		title: PropTypes.string
	}

	static defaultProps = {
		ingredients: 0,
		steps: 0,
		title: "[ RECIPE ]"
	}

	render() {
		let { title, numIngredients, numSteps } = this.props;
		return (
			<div className="summary">
				<h1>{title}</h1>
				<span>{numIngredients} Ingredients</span>
				<span> | </span>
				<span>{numSteps} Steps</span>
			</div>
		);
	}
}

export default Summary;
