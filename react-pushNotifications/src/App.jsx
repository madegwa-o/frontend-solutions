import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LocationFetcher from "./components/LocationFetcher.jsx";


function App() {

  return (
    <>
        <h1>My PWA with Geolocation</h1>
        <LocationFetcher />

    </>
  )
}

export default App
