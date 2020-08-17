import React from 'react'

class SortMenu extends React.Component{
	render(){
		let sortables = this.props.sortables ? this.props.sortables : ["TITLE", "RATING"];
		let { onClick } = this.props;
		return (
			<div className="sort-menu">
				<span>Sort by: </span>
				{sortables.map((s, idx) =>
					<span key={idx} onClick={onClick}>{s}</span>
				)}
			</div>
		);
	}
}

export default SortMenu;
