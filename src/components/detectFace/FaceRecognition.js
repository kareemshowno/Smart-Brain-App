import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Image} from 'react-bootstrap';
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, box }) => {
	return(
		<Container className='d-flex justify-content-center br' >
		<Row >
		<Col xs={12} md={10} className='mx-md-auto  mx-xs-auto'>
		<Image id='inputimage' className='shadow mb-2' width='400rem' height='auto' src={imageUrl} rounded fluid />
		<div className='bounding-box '
		 style={{top: box.topRow,left:box.leftCol, right: box.rightCol, bottom:box.bottomRow,}}></div>
		</Col>
		</Row>
		</Container>

		); 
}



export default FaceRecognition;