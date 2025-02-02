import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Routes>
						<Route path="/signup" element={<App />} />
						<Route path="/login" element={<App />} />
						<Route path="private" element={<App />} />
						<Route path="*" element={<h1>Not found!</h1>} />
				</Routes>
  </StrictMode>,
  
)
