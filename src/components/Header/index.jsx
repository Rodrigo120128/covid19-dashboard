import React, { useContext } from 'react'
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

const Header = ({ data }) => {
  const { theme, setTheme } = useContext(ThemeContext)

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
          <Amount>{data && data.Global.TotalConfirmed}</Amount>
        </Section>
        <Section color="FD333F">
          <SectionTitle>Deaths</SectionTitle>
          <Amount>{data && data.Global.TotalDeaths}</Amount>
        </Section>
        <Section color="4CEA49">
          <SectionTitle>Recovered</SectionTitle>
          <Amount>{data && data.Global.TotalRecovered}</Amount>
        </Section>
      </Data>
    </Container>
  )
}

export default Header
