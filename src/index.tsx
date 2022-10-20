import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { Chat } from './pages/Chat'
import reportWebVitals from './reportWebVitals'
import { defaultTheme } from './themes/defaultTheme'
import { ThemeProvider } from '@mui/material/styles'
import './App.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <Router>
        <Routes>
          <Route path = "/login" element = { <Login /> } />
          <Route path = "/chat" element = { <Chat /> } />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
)

reportWebVitals()
