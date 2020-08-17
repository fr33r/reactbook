import React from 'react'
import PropTypes from 'prop-types'
import Star from './Star.js'

class StarRating extends React.Component{
	constructor (props) {
		super(props);
		this.state = {
			selectedStars: 0
		}
		this.change = this.change.bind(this);
	}
	static getDefaultProps = {
		totalStars: 5
	}
	static propTypes = {
		totalStars: PropTypes.number
	}
	change (selectedStars) {
		this.setState({
			selectedStars: selectedStars
		});
	}
	render(){
		let {totalStars} = this.props;
		let {selectedStars} = this.state;
		return (
			<div className="star-rating">
				{[...Array(totalStars)].map((n, idx) =>
					<Star 
						key={idx}
						selected={idx<selectedStars}
						onClick={() => this.change(idx+1)} />
				)}
				<p>{selectedStars} of {totalStars} stars</p>
			</div>
		);
	}
}

export default StarRating;
