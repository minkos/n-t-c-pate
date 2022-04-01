import { React } from 'react';

const SearchField = ({ searchChange }) => {
	return (<div>
				<input className='pa3 ba b--green bg-lightest-blue mb3' 
	             type='search' 
	             placeholder='search robots'
	             onChange={searchChange} />
			</div>);
}

export default SearchField;