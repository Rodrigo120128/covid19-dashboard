import React, { createContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

const themes = [
  {
    name: 'dark',
    colors: {
      background: 'rgb(27,27,29)',
      backgroundCard: 'rgb(38,43,48)',
      color: 'white'
    }
  },
  {
    name: 'light',
    colors: {
      background: 'rgb(236,233,233)',
      backgroundCard: 'rgb(248,247,247)',
      color: 'black'
    }
  }
]

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes[0])

  useEffect(() => {
    if (localStorage.getItem('@theme') === 'dark') setTheme(themes[0])
    else if (localStorage.getItem('@theme') === 'light') setTheme(themes[1])
  })

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider, themes }
