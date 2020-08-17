import React from 'react'
import Ingredient from './Ingredient'

/*
 * The IngredientList component is responsible for representing a 
 * list of ingredients for a recipe.
 */
class IngredientList extends React.Component {
	render () {
		let { ingredients } = this.props;
		return (
			<ul className="ingredients">
				{ingredients.map((ingredient, idx) =>
					<Ingredient
						key={idx}
						amount={ingredient.amount}
						measurement={ingredient.measurement}
						name={ingredient.name} />
				)}
			</ul>
		);
	}
}

export default IngredientList;
