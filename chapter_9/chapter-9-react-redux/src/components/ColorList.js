import React from 'react'
import Color from './Color.js'

/*
 * ColorList represents a component that contains a list of colors.
 */
class ColorList extends React.Component {
	render() {
		let {colors, onRate, onRemove} = this.props;
		return (
			<div className="color-list">
				{(colors.length === 0) ?
					<p>No colors listed. (Add a color)</p>
					:
					colors.map(color =>
						<Color 
							key={color.id}
							{...color}
							onRate={(rating) => onRate(color.id, rating)}
							onRemove={() => onRemove(color.id)} />
					)}
			</div>
		);
	}
}

export default ColorList;
