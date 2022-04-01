import { React } from 'react';

const SignOut = ({ onChangeRoute }) => {
	return <div>
				<div className=''>
						<input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib mt3 bg-light-green" 
					      		type="submit" 
					      		value="Sign Out"
					      		//use anonymous function when passing in variable
					      		 onClick={() => onChangeRoute('signin')}
					    />
				</div>
			</div>;
}

export default SignOut;