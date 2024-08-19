import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { Hooksapp } from './Hooksapp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hooksapp />
  </StrictMode>,
)
