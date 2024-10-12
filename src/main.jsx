import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { EmailProvider } from './contexts/EmailContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <EmailProvider>
        <App />
      </EmailProvider>
    </Router>
  </StrictMode>,
)
