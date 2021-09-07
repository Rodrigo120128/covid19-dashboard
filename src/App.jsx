import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import usePersistedState from './hooks/usePersistedState'
import Dashboard from './pages/Dashboard'
import { GlobalStyle } from './styles/global'
import darkTheme from './styles/themes/dark'
import lightTheme from './styles/themes/light'

function App() {
  const [theme, setTheme] = usePersistedState('@theme', darkTheme)

  return (
    <ThemeProvider
      theme={{
        current: theme,
        setTheme:
          theme.title == 'dark'
            ? () => setTheme(lightTheme)
            : () => setTheme(darkTheme)
      }}
    >
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
