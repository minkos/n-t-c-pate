import { React, Component } from 'react';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

	//This will Catch Error if error arises after initial Mount as error is parse in here
	componentDidCatch(error, info) {
		this.setState({hasError: true});
	}

	render() {
		const { hasError } = this.state;

		return hasError ?
		<h1>Error In Loading</h1>
		:
		this.props.children
		}
}

export default ErrorBoundary;