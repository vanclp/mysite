import React from 'react'
import { render, hydrate } from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter } from 'react-router-dom'
import 'normalize.css'
import 'font-awesome/css/font-awesome.min.css'
import './index.css'

const rootElement = document.getElementById("root");

function MainApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}


if (rootElement.hasChildNodes()) {
  hydrate(<MainApp />, rootElement);
} else {
  render(<MainApp />, rootElement);
}

registerServiceWorker()
