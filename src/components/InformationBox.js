import { React } from 'react';
import BoxItems from './BoxItems';

const InformationBox = ({ infoBox }) => {
	return <div>
				<h1 className='f3 red'>CONCEPTS</h1>
				<div className='flex flex-wrap'>
				{
					infoBox.map((item, i) => {
						return <BoxItems key={i} concept={item} />;
					})
				}
				</div>
		</div>;
}

export default InformationBox;