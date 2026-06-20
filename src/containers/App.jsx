import { useState } from 'react'
import ParticlesBg from 'particles-bg'
import Navigation from '../components/Navigation/Navigation'
import Logo from '../components/Logo/Logo'
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from '../components/FaceRecognition/FaceRecognition'
import FaceBoundary from '../components/FaceBoundary/FaceBoundary'
import './App.css'

const App = () => {
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [faces, setFaces] = useState([]);

  const onInputChange = (event) => {
    setInput(event.target.value);
  }
  const onButtonSubmit = () => {
    setImageUrl(input);
    getFaceData(input);
  }

  async function getFaceData(imageUrl) {
  try {
    const response = await fetch(
      'http://127.0.0.1:8000/detect-yolo',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          url: imageUrl
        })
      }
    );
    const data = await response.json();
    console.log(data);
    setFaces(data.detections);
  } catch (error) {
      console.error('Error fetching face data:', error);
    }
  }
  return (
    <>
    <ParticlesBg type="cobweb" bg={true} />
    <Navigation />
    <Logo />
    <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit} />
    <FaceBoundary faces={faces}>
      <FaceRecognition imageUrl={imageUrl} />
    </FaceBoundary>
    </>
  )
}

export default App
