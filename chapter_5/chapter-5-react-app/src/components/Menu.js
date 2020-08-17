import React from 'react'
import Recipe from './/Recipe.js'

/*
 * The Menu component is responsible for representing a wholistic menu,
 * including various recipes.
 */
class Menu extends React.Component {
	render() {
		let { title, recipes } = this.props
		return (
			<article>
				<header>
					<h1>{title}</h1>
				</header>
				<div className="recipes">
					{recipes.map((recipe, idx) => 
						<Recipe 
							key={idx}
							name={recipe.name}
							ingredients={recipe.ingredients}
							steps={recipe.steps}/>
					)}
				</div>
			</article>
		)
	}
}

export default Menu
