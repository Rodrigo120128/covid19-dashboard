import React, { useEffect, useState, useContext } from 'react'
import Switch from 'react-switch'

import { ThemeContext, themes } from '../../context/theme'
import {
  Container,
  ThemeButton,
  Title,
  Text,
  Strong,
  Data,
  Section,
  SectionTitle,
  Amount
} from './styles'

const HeaderHome = () => {
  const [globalData, setGlobalData] = useState()
  const { theme, setTheme } = useContext(ThemeContext)

  useEffect(async () => {
    setGlobalData(
      await (await fetch('https://api.covid19api.com/summary')).json()
    )
  }, [])

  const toggleTheme = () => {
    if (theme.name === 'dark') {
      localStorage.setItem('@theme', 'light')
      return themes[1]
    } else {
      localStorage.setItem('@theme', 'dark')
      return themes[0]
    }
  }

  return (
    <Container>
      <Title>
        <Text>Covid-19</Text>
        <Strong>On World</Strong>
      </Title>
      <ThemeButton>
        <Switch
          onChange={() => {
            setTheme(toggleTheme())
          }}
          checked={theme.name === 'dark' ? true : false}
          checkedIcon={false}
          uncheckedIcon={false}
          height={20}
          handleDiameter={10}
          width={40}
        />
      </ThemeButton>
      <Data>
        <Section color="D5E14E">
          <SectionTitle>Confirmed</SectionTitle>
          <Amount>{globalData && globalData.Global.TotalConfirmed}</Amount>
        </Section>
        <Section color="FD333F">
          <SectionTitle>Deaths</SectionTitle>
          <Amount>{globalData && globalData.Global.TotalDeaths}</Amount>
        </Section>
        <Section color="4CEA49">
          <SectionTitle>Recovered</SectionTitle>
          <Amount>{globalData && globalData.Global.TotalRecovered}</Amount>
        </Section>
      </Data>
    </Container>
  )
}

export default HeaderHome
