import React from 'react'
import ReactDOM from 'react-dom/client' //É integração do REACT para o DOM document object modal que é a representação do html em js 
import { App } from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
