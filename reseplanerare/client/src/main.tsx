import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <div id="modal-root"><p>JAG ÄR EN DATAHJÄRNA!</p></div>
  </StrictMode>,
)
