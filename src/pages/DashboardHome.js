import React, { useContext } from 'react'

import HeaderHome from '../components/HeaderHome'
import SearchCountries from '../components/SearchCountries'
import { ThemeContext } from '../context/theme'

const DashBoardHome = () => {
  const { theme } = useContext(ThemeContext)
  document.body.style.backgroundColor = theme.colors.background

  return (
    <div className="container-home">
      <HeaderHome />
      <SearchCountries />
    </div>
  )
}

export default DashBoardHome
