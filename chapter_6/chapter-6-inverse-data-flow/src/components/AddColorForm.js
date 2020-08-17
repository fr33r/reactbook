import React from 'react'
import PropTypes from 'prop-types'

class AddColorForm extends React.Component {
	constructor(props) {
		super(props);
		this.submit = this.submit.bind(this);
	}
	submit (e) {
		e.preventDefault(); //ensure the form doesn't issue GET request.
		const {_title, _color} = this.refs; //extract the values of the inputs.
		this.props.onNewColor(_title.value, _color.value); //invoke the provided event handler.

		//reset the form.
		_title.value = '';
		_color.value = '#000000';
		_title.focus();
	}
	static propTypes = {
		onNewColor: PropTypes.func
	}
	render () {
		return (
			<form onSubmit={this.submit}>
				<input ref="_title" type="text" placeholder="color title..." required />
				<input ref="_color" type="color" required />
				<button>ADD</button>
			</form>
		);
	}
}

export default AddColorForm;
