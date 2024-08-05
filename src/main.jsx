import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Loader from './components/ui/Loader.jsx'
<script defer src="https://cloud.umami.is/script.js" data-website-id="2ce6ea76-cb24-41c3-b94e-dc67c6cbbbc1"></script>
// Just to show you my loading screen 😁
const App = lazy(() =>
  new Promise(
    resolve => setTimeout(
      () => resolve(import('./App.jsx')), 1000
    ))
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
)
