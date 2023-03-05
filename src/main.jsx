import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp'
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> {/*el modo estricto ayuda a identificar problemas en componentes, en producción no es necesario utilizarlo, solo se debería aplicar en desarrollo*/}
    <GifExpertApp />
  </React.StrictMode>,
)
