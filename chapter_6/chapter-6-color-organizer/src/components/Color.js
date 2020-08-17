import React from 'react'
import StarRating from './StarRating.js'

class Color extends React.Component {
	render() {
		let {title, color, rating, onRate, onRemove} = this.props;
		return (
			<section className="color">
				<h1>{title}</h1>
				<button onClick={onRemove}>X</button>
				<div className="preview" style={{backgroundColor: color}}></div>
				<div>
					<StarRating selectedStars={rating} totalStars={5} onRate={onRate} />
				</div>
			</section>
		);
	}
}

export default Color;
