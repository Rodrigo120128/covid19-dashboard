import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from './context/theme'
import Dashboard from './pages/Dashboard'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <ThemeProvider>
          <GlobalStyle />
          <Route path="/" component={Dashboard} />
        </ThemeProvider>
      </Switch>
    </BrowserRouter>
  )
}

export default App
