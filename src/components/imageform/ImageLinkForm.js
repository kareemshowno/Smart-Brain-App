import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Container, Row , Col,InputGroup} from 'react-bootstrap';
import './ImageLinkForm.css'
const ImageLinkForm = ({onInputChange,onButtonSubmit}) => {
	return (
	<Container  className=' container_detect'>
		<Row>
			<Col md={12}><p className='text-light pb-4 h4 text-center text-capitalize pp'>
			this magical brain will detect faces in your pictures, try it</p></Col>
		</Row>
		
		<Row >
		<Col xs={10} md={8} className='mx-auto'>
   <InputGroup className="mb-3 w-70 shadow">
    <Form.Control
      placeholder=" Ex: http://img123.jpg"
      onChange={onInputChange}
    />
    <InputGroup.Append>
      <Button className='detect'   onClick={onButtonSubmit}>Detect</Button>
    </InputGroup.Append>
  </InputGroup>
  </Col>
  </Row>
	</Container>
		);
}





export default ImageLinkForm;