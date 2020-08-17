import React from 'react'
import PropTypes from 'prop-types'
import Star from './Star.js'

class StarRating extends React.Component{
	static getDefaultProps = {
		selectedStars: 0,
		totalStars: 5,
		onRate: (f)=>f // does nothing.
	}
	static propTypes = {
		selectedStars: PropTypes.number,
		totalStars: PropTypes.number,
		onRate: PropTypes.func
	}
	render(){
		let {selectedStars, totalStars, onRate} = this.props;
		return (
			<div className="star-rating">
				{[...Array(totalStars)].map((n, idx) =>
					<Star 
						key={idx}
						selected={idx<selectedStars}
						onClick={() => onRate(idx+1)} />
				)}
				<p>{selectedStars} of {totalStars} stars</p>
			</div>
		);
	}
}

export default StarRating;
