import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.tsx'
import './clases/arrays.ts'
import './clases/objetos_literales.ts'
import "./clases/funciones.ts"
import "./clases/funciones_mutil_retorno.ts"
import "./clases/destructuring.ts"
import "./clases/destructuring_arrays.ts"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
