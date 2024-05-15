import { React } from 'react';

const SearchForm = ({ onInputChange, onButtonSubmit }) => {
	return <div>
				<p className='f4'>
					Know Your Next Move
				</p>
				<p className='f4'>
					The image link MUST end with .jpeg or .jpg! For example, https://www.online-tech-tips.com/wp-content/uploads/2022/02/faces.jpeg or https://fileinfo.com/img/ss/xl/jpg_44-2.jpg
				</p>
				<div className='form center pa2 br3 shadow-5'>
					<input className='f4 pa2 w-70 center mt2' 
							type='search' 
							placeholder='Enter image link with JPEG format'
							onChange={onInputChange}
							>
					</input>
					<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
							onClick={onButtonSubmit}
						>
						DETECT
					</button>
				</div>
		</div>; 
}

export default SearchForm;