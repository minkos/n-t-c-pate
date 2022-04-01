import { React, Component } from 'react';

class RegistrationForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			email: '',
			password: ''
			}
	}

	onNameChange = (event) => {
		this.setState({name: event.target.value});
	}

	onEmailChange = (event) => {
		this.setState({email: event.target.value});
	}

	onPasswordChange = (event) => {
		this.setState({password: event.target.value});
	}

	onRegistrationSubmit = (event) => {

		if (this.state.name.length > 0 && this.state.email.length > 0 && this.state.password.length > 0) {

			fetch('http://localhost:3001/register', {
					method: "post",
					headers: {"Content-Type": "application/json"},
					body: JSON.stringify({
						name: this.state.name,
						email: this.state.email,
						password: this.state.password
					})
				})
				.then(response => response.json())
				.then(output => {
					console.log(output);
					if (output) {
						this.props.onloadUser(output);
						this.props.onChangeRoute('home');
					}
				})

		}
	}

	render() {

		const { onChangeRoute } = this.props;

		return <div>
				<article className="pa4 black-80">
				  <div action="sign-up_submit" method="get" acceptCharset="utf-8">
					    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					      <legend className="ph0 mh0 fw6 clip">Registration Form</legend>
					      <div className="mt3">
					        <label className="db fw4 lh-copy f6" htmlFor="name">Name</label>
					        <input className="pa2 input-reset ba bg-transparent w-100 measure" 
					        		type="name" 
					        		name="name"  
					        		id="email-address"
					        		onChange={this.onNameChange} 
					        />
					      </div>
					      <div className="mt3">
					        <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
					        <input className="pa2 input-reset ba bg-transparent w-100 measure" 
					        		type="email" 
					        		name="email-address"  
					        		id="email-address"
					        		onChange={this.onEmailChange} 
					        />
					      </div>
					      <div className="mt3">
					        <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
					        <input className="b pa2 input-reset ba bg-transparent" 
					        		type="password" 
					        		name="password"  
					        		id="password"
					        		onChange={this.onPasswordChange} 
					        />
					      </div>
					    </fieldset>
					    <div className="mt3">
					    	<input 
						    	className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" 
						    	type="submit" 
						    	value="Register"
						    	onClick={this.onRegistrationSubmit}
						    	//onClick={() => onChangeRoute('home')} 
					    	/>
					    </div>
					    <div className="mt3">
					    	<input 
						    	className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" 
						    	type="submit" 
						    	value="Back"
						    	onClick={() => onChangeRoute('signin')} 
					    	/>
					    </div>
				  </div>
				</article>
			</div>;
	}
}

export default RegistrationForm;