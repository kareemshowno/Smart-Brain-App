import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from 'react-bootstrap';

const Navigation = ({onRouteChange, isSignedIn}) => {
	return (isSignedIn ?  		<Nav style={{display:'flex', justifyContent:'flex-end', overflowX:'hidden'}}>
		<Nav.Item>
		<Nav.Link onClick={() => onRouteChange('signout')} className='text-white text-uppercase p-3 h5'>Sign Out</Nav.Link>
		</Nav.Item>
	</Nav>  :
		<Nav style={{display:'flex', justifyContent:'flex-end'}}>
		<Nav.Item>
		<Nav.Link onClick={() => onRouteChange('signin')} className='text-white text-uppercase p-3 h5'>Sign in</Nav.Link>
		</Nav.Item><Nav.Item>
		<Nav.Link onClick={() => onRouteChange('register')} className='text-white text-uppercase p-3 h5'>Register</Nav.Link>
		</Nav.Item>
	</Nav>
		);
}




	export default Navigation;