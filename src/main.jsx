import React from 'react'
import ReactDOm from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from 'react-hot-toast';

ReactDOm.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Toaster
    position='top-right'
    reverseOrder={false}
    />
  </React.StrictMode>,
)
