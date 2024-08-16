import React from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'

const areactElement = React.createElement(
  'a',
  {href:'https://www.google.co.in',target:'_blank'},
  'click to visit google'
)

createRoot(document.getElementById('root')).render(
  
  
  areactElement
  
    
  
)
