import React from 'react'
import ReactDOM from 'react-dom/client' //É integração do REACT para o DOM 
import { App } from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
