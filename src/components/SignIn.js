
import { React, Component } from 'react';

class SignIn extends Component {
	constructor() {
		super()
		this.state = {
			email: '',
			password: ''
		}
	}

	onEmailChange = (event) => {
		this.setState({email: event.target.value});
	}

	onPasswordChange = (event) => {
		this.setState({password: event.target.value});
	}

	onSignInSubmit = () => {

		this.props.onChangeRoute('home');

		/*
		if (this.state.email.length > 0 && this.state.password.length > 0) {
			fetch('https://ai-robots-api.herokuapp.com/signin', {
				method: 'post',
				headers: {"Content-Type": "application/json"},
				body: JSON.stringify({
					email: this.state.email,
					password: this.state.password
				})
			})
			.then(response => response.json())
			.then(output => {

				if (output.id) {
					this.props.onloadUser(output);
					this.props.onChangeRoute('home');
				}

			})
		}
		*/

	}

	render() {

		const { onChangeRoute } = this.props;

		return <div>
				<main className="pa4 black-80">
				  <article className="measure center">

							{/*
					    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					      <legend className="f4 fw6 ph0 mh0">Sign In</legend>
					      <div className="mt3">
					        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
					        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        		type="email" 
					        		name="email-address"  
					        		id="email"
					        		onChange={this.onEmailChange}
					        />
					      </div>
					      <div className="mv3">
					        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
					        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        		type="password" 
					        		name="password"  
					        		id="pass"
					        		onChange={this.onPasswordChange} 
					        />
					      </div>
					    </fieldset>
							*/}


							<legend className="f4 fw6 ph0 mh0">Ready to let Artificial Intelligence to read your pictures and find robotic friends?</legend>
					    <div className="">
					      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
					      		type="submit" 
					      		value="Click To Enter"
					      		//use anonymous function when passing in variable
					      		//onClick={() => onChangeRoute('home')}
					      		onClick={this.onSignInSubmit} 
					      	 />
					    </div>

							{/*
					    <div className="">
					      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib mt3" 
					      		type="submit" 
					      		value="Register"
					      		//use anonymous function when passing in variable
					      		onClick={() => onChangeRoute('register')} 
					      	 />
					    </div>
						*/}

				  </article>
				</main>
	</div>;
	}
}

export default SignIn;