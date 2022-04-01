import { React } from 'react';

const Rank = ({ setName, setEntries }) => {
	return <div>
				<div className='white f3'>
					Hi, {setName}! 
				</div>
				<div className='white f3'>
					Usage counter: {setEntries}
				</div>
		   </div>;
}

export default Rank;