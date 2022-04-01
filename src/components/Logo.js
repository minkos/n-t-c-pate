import { React } from 'react';
import next from './next_move.png';
import Tilty from 'react-tilty';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilty className='Tilt br2 shadow-2' options={{ max: 55 }} style={{height: 125, width: 125}} >
				<div className='Tilt-inner pa3'>
					<img alt='Logo' src={next} />
				</div>
			</Tilty>
		</div>
		);
}

export default Logo;