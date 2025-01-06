import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AppWrapper from './AppWrapper.jsx'



ReactDOM.createRoot(document.getElementById('root')).render
  (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>

  )
