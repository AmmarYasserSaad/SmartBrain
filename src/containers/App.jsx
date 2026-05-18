import { useState } from 'react'
import ParticlesBg from 'particles-bg'
import Navigation from '../components/Navigation/Navigation'
import Logo from '../components/Logo/Logo'
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm'
// import FaceRecognition from '../components/FaceRecognition/FaceRecognition'
import './App.css'

const App = () => {
  return (
    <>
    <ParticlesBg type="cobweb" bg={true} />
    <Navigation />
    <Logo />
    <ImageLinkForm />
    {/* <FaceRecognition /> */}
    </>
  )
}

export default App
