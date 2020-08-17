import React from 'react'
import StarRating from './StarRating.js'

class Color extends React.Component {
	componentDidMount() {
		alert("we mounted...");
		this.style = {
			backgroundColor: "#999"
		};
	}
	/*
	getSnapshotBeforeUpdate() {
		this.style = null;
	}
	*/
	render() {
		let {title, color, rating, onRate, onRemove} = this.props;
		let style = this.style
		return (
			<section className="color" style={{style}}>
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
