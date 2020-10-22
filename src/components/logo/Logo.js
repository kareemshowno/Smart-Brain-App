import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Logo.css';

const Logo = () => {
	return (<div className='mx-3 pb-5 pt-0 '>
		<Tilt className="Tilt rounded shadow " options={{ max : 35 }} 
		style={{ height: 150, width: 150, 
			overflowX:'hidden', overflowY:'hidden' }} >
 <div className="Tilt-inner p-4">
 <img style={{paddingTop: '1px'}} src={brain} alt='brain-logo' /> 
 </div>
</Tilt>
	</div>
		);
}




	export default Logo;