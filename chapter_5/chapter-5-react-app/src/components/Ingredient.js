import React from 'react'

/*
 * The Ingredient component is responsible for representing a single
 * ingredient within a recipe.
 */
class Ingredient extends React.Component {
	render () {
		let { amount, measurement, name } = this.props;
		return (
			<li>
				<span className="amount">{amount}</span>
				<span className="measurement">{measurement}</span>
				<span className="name">{name}</span>
			</li>
		);
	}
}

export default Ingredient;
