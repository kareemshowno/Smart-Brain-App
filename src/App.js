import React from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imageform/ImageLinkForm';
import Rank from './components/therank/Rank';
import Particles from 'react-particles-js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Clarifai from 'clarifai';
import FaceRecognition from './components/detectFace/FaceRecognition';
import SignIn from './components/signform/SignIn'
import Register from './components/newUser/Register';

const app = new Clarifai.App({
 apiKey: '9749da0dd5354ce986a2d32b99432bb5'
});
const particlesOptions = {
            		particles: {
            			number:{value:50,
            				density:{
            					enable: true,
            					value_area: 600
            				}}
            				}
            	}
class App extends React.Component {
	constructor() {
		super()
		this.state = {
			input:'',
			 imageUrl:'',
			 box:{},
			 route:'signin',
			 isSignedIn:false
		}
	}
	onInputChange = (event) => {
this.setState({input: event.target.value})
	}
	calculateFaceLocation = (data) =>{
	const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
	const image = document.getElementById('inputimage');
	const width = Number(image.width);
	const height = Number(image.height);
	return{
		leftCol: clarifaiFace.left_col * width,
		topRow:clarifaiFace.top_row * height,
		rightCol: width - (clarifaiFace.right_col *width),
		bottomRow: height - (clarifaiFace.bottom_row * height),
	}
	}
	displayFaceBox = (box) => {
		this.setState({box: box});
	}
	onButtonSubmit = () => {
	this.setState({imageUrl: this.state.input});
		app.models.predict(
	Clarifai.FACE_DETECT_MODEL, this.state.input)
		.then(response => this.displayFaceBox(
    this.calculateFaceLocation(response)))
		.catch(err => console.log(err));
	

	}
	onRouteChange = (route) => {
		if(route === 'signout'){
			this.setState({isSignedIn:false})
		}else if (route === 'home') {
			this.setState({isSignedIn:true})
		}
		this.setState({route: route});
	}  
  render() {
    return (<React.Fragment>

    	      <Particles 
              params={particlesOptions}
            	className='particles'
            />
          <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
          { this.state.route === 'home' ?
          <div> 
          <Logo />
       
          <ImageLinkForm 
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
          />
          <Rank />
          <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
          </div>


            : (
            	this.state.route === 'signin' ? <SignIn onRouteChange={this.onRouteChange} />
            	:<React.Fragment> <Register  onRouteChange={this.onRouteChange}/>
            	</React.Fragment> ) 
        
         }
      </React.Fragment>);
  }
}

export default App;
