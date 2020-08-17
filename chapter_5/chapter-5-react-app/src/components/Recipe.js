import React from 'react'
import IngredientList from './IngredientList.js'
import Instructions from './Instructions.js'

/*
 * The Recipe component is responsible for representing a recipe, including
 * the ingredients, and cooking instructions.
 */
class Recipe extends React.Component {
	render() {
		let { name, ingredients, steps } = this.props
		return (
			<section id={name.toLowerCase().replace(/ /g, "-")}>
				<h1>{name}</h1>
				<IngredientList ingredients={ingredients} />
				<Instructions title="Cooking Instructions" steps={steps} />
			</section>
		);
	}
}

export default Recipe
