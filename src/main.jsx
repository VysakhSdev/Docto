import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
    <LinkedInOAuthProvider clientId="YOUR_LINKEDIN_CLIENT_ID">
      <App />
    </LinkedInOAuthProvider>
  </GoogleOAuthProvider>,
  </BrowserRouter>,
)
