import React from 'react'
import PropTypes from 'prop-types'

class Star extends React.Component {
	static propTypes = {
		onClick: PropTypes.func,
		selected: PropTypes.bool
	}
	render() {
		let {onClick, selected} = this.props;
		let className = selected ? "star selected" : "star";
		return (
			<div className={className} onClick={onClick}></div>
		);
	}
}

export default Star;
