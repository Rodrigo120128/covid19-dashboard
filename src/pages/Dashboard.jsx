import React, { useContext, useState, useEffect } from 'react'

import CountryCard from '../components/CountryCard'
import HeaderHome from '../components/Header'
import { ThemeContext } from '../context/theme'

import api from '../services/api'
import { Cards, InputContainer, Input } from '../styles/dashboard'

const DashBoardHome = () => {
  const { theme } = useContext(ThemeContext)
  document.body.style.backgroundColor = theme.colors.background

  const [countriesData, setCountriesData] = useState({})
  const [countriesCounter, setCountriesCounter] = useState(9)
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get('/summary')

        setCountriesData(response.data)
      } catch (err) {
        setCountriesData({
          Global: {
            TotalConfirmed: '?',
            TotalDeaths: '?',
            TotalRecovered: '?'
          }
        })
      }
    }

    getData()

    window.addEventListener('scroll', checkScroll)

    return () => window.removeEventListener('scroll', checkScroll)
  }, [])

  const checkScroll = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement

    if (scrollTop + clientHeight >= scrollHeight) loadMoreCountries()
  }

  const loadMoreCountries = () => setCountriesCounter(oldValue => oldValue + 9)

  return (
    <div>
      <HeaderHome data={countriesData.Global && countriesData} />
      <InputContainer>
        <Input
          onChange={e => setInputValue(e.target.value)}
          placeholder="Type any country"
          type="text"
        />
      </InputContainer>
      <Cards>
        {countriesData.Countries &&
          countriesData.Countries.filter(
            country =>
              inputValue == '' ||
              inputValue.toUpperCase() ==
                country.Country.substr(0, inputValue.length).toUpperCase()
          )
            .filter((country, index) => index < countriesCounter)
            .map(country => <CountryCard key={country.ID} country={country} />)}
      </Cards>
    </div>
  )
}

export default DashBoardHome
