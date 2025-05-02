import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './index.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
