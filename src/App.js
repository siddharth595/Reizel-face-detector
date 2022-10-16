import React, { Component } from 'react';
import './App.css';
import Snowfall from 'react-snowfall';
import TypeAnimation from './components/TypeAnimation/TypeAnimation';
import Clarifai from 'clarifai';
import Logo from './components/Logo/Logo';
import Faces from './components/Faces/Faces';
import In from './components/Input/Input';
import ReactLoading from 'react-loading';
import StickyFooter from 'react-sticky-footer';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';


const app = new Clarifai.App({
  apiKey: 'b9a8cbfba5564428971b91d1f419f338'
});


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: [],
      errorMessage:''
    }
  }

  claculateFaceLocation =  (data) => {

    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);

    let dataPoints = [];

    data.outputs[0].data.regions.forEach( eachFaceData=> {

      const clarifaiFace = eachFaceData.region_info.bounding_box;
      let eachFaceAttribute = {
            leftCol: clarifaiFace.left_col * width,
            topRow: clarifaiFace.top_row * height,
            rightCol: width - (clarifaiFace.right_col * width),
            bottomRow: height - (clarifaiFace.bottom_row * height)
        }
        dataPoints.push(eachFaceAttribute);
    });
    
    return dataPoints;
  }

  showFaceBorder = (box) => {
    console.log(box);
    this.setState({ box: box });
  }
  onInputChange = async (event) => {
    
    await this.setState({input: event.target.value});
    console.log('OnInoutChange:  ',this.state);
  }
  onSubmitButton = async () => {

    await this.setState({ imageUrl: this.state.input });
    
    await app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then(response => this.showFaceBorder(this.claculateFaceLocation(response)))
      .catch(async err =>{
        console.log(err);
        await this.setState({errorMessage:'Image URL is incorrect'});
      });
  }
  
  render() {
    return (
      <div className='tc'>
        <Snowfall className='particles' />
        <Logo />
        <TypeAnimation />
        <In onInputChange={this.onInputChange} onSubmitButton={this.onSubmitButton} />
        <Faces box={this.state.box} imageUrl={this.state.imageUrl} />
        <ErrorMessage message={this.state.errorMessage}/>
        <ReactLoading className='loading' type={'bubbles'} color='pink' height={40} width={150} delay={10} />
       <div id='sa'>

        <StickyFooter
    normalStyles={{
    backgroundColor: "#9999",
    padding: "2rem"
    }}

>
Hi i am <a href='#'> Reizel</a> made with Love by Muhammad Suheer. In this SPA(Single Page Application) you can paste the link of any image and this app can detect face in that image and i am sure you will love it.
   All Rights Reserved... Credit Goes to Muhammad Suheer.

</StickyFooter>
</div>
      </div>    
    );
  }
}
export default App;
