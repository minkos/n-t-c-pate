import { React } from 'react';

const Image = ({ url }) => {
	return (<div>
				<div>
					<img alt='' src={url} width='400vh' height='auto' />
				</div>
		</div>);
}

export default Image;