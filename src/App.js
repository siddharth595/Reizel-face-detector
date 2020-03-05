import React, { Component } from 'react';
import './App.css';
import Snowfall from 'react-snowfall';
import TypeAnimation from './components/TypeAnimation/TypeAnimation';
import Clarifai from 'clarifai';
import Logo from './components/Logo/Logo';
import Face from './components/Face/Face';
import In from './components/Input/Input';
import ReactLoading from 'react-loading';
import StickyFooter from 'react-sticky-footer';


const app = new Clarifai.App({
  apiKey: 'b9a8cbfba5564428971b91d1f419f338'
});


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
    }
  }

  claculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  showFaceBorder = (box) => {
    console.log(box);
    this.setState({ box: box });
  }
  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }
  onSubmitButton = () => {

    this.setState({ imageUrl: this.state.input });
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then(response => this.showFaceBorder(this.claculateFaceLocation(response)))
      .catch(err => console.log(err));
  }
  
  render() {
    return (
      <div className='tc'>
        <Snowfall className='particles' />
        <Logo />
        <TypeAnimation />
        <In onInputChange={this.onInputChange} onSubmitButton={this.onSubmitButton} />
        <Face box={this.state.box} imageUrl={this.state.imageUrl} />
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
