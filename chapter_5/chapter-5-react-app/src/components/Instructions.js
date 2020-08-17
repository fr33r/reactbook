import React from 'react'

class Instructions extends React.Component {
	render () {
		let { title, steps } = this.props;
		return (
			<section className="instructions">
				<h2>{title}</h2>
				{steps.map((step, idx) =>
					<p key={idx}>{step}</p>
				)}
			</section>
		);
	}
}

export default Instructions;
