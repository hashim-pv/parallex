import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Header } from './Header.jsx'
import App from './App.jsx'
import './index.css'
import Imgsl from './Imgsl.jsx'
import Footer from './Footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Header/>
    <App />
    <Imgsl/>
    <Footer/>
  </StrictMode>,
)
