import React, { useContext, useState, useEffect } from 'react'

import CountryCard from '../components/CountryCard'
import HeaderHome from '../components/Header'
import { ThemeContext } from '../context/theme'

import { Cards, InputContainer, Input } from '../styles/dashboard'

const DashBoardHome = () => {
  const { theme } = useContext(ThemeContext)
  document.body.style.backgroundColor = theme.colors.background

  const [countryData, setCountryData] = useState([])
  const [countries, setCountries] = useState()
  let countryCounter = 9
  let data = ''

  useEffect(async () => {
    setCountries(
      await (await fetch('https://api.covid19api.com/summary')).json()
    )
    data = await (await fetch('https://api.covid19api.com/summary')).json()
    const firstNineCountries = data.Countries.filter((item, index) => {
      if (index <= 7) return true
    })
    setCountryData(firstNineCountries)

    window.addEventListener('scroll', infiniteScroll)

    return () => window.removeEventListener('scroll', infiniteScroll)
  }, [])

  const infiniteScroll = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement

    if (scrollTop + clientHeight >= scrollHeight) {
      moreCountries()
    }
  }

  const handleChange = e => {
    const country = e.target.value.toUpperCase()

    const arrayCountries = countries.Countries.filter(item => {
      const arrayName = item.Country.split('')
      const arrayNameLength = arrayName.filter((item, index) => {
        if (index + 1 <= country.length) return true
      })
      const countryName = arrayNameLength.join('').toUpperCase()

      if (country === countryName) return true
    })

    setCountryData(arrayCountries)
  }

  const moreCountries = () => {
    if (document.getElementsByTagName('input')[1].value === '') {
      countryCounter += 9
      const nextCountries = data.Countries.filter((item, index) => {
        if (index <= countryCounter) return true
      })
      setCountryData(nextCountries)
    }
  }

  return (
    <div>
      <HeaderHome />
      <InputContainer>
        <Input
          placeholder="Type any country"
          type="text"
          onChange={handleChange}
        />
      </InputContainer>
      <Cards>
        {countryData.map(country => (
          <CountryCard key={country.ID} country={country} />
        ))}
      </Cards>
    </div>
  )
}

export default DashBoardHome
