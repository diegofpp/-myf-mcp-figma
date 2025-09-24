import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import Frontpage1 from './Frontpage1'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Frontpage1 />
  </React.StrictMode>
)


