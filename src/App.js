import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from './context/theme'
import DashBoardHome from './pages/DashboardHome'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <ThemeProvider>
          <Route path="/" component={DashBoardHome} />
        </ThemeProvider>
      </Switch>
    </BrowserRouter>
  )
}

export default App
