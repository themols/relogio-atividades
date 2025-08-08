import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Core } from './Core'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Core />
  </StrictMode>,
)
