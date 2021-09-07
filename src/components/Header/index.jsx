import React, { useContext } from 'react'
import Switch from 'react-switch'

import { ThemeContext } from 'styled-components'

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
  const theme = useContext(ThemeContext)

  return (
    <Container>
      <Title>
        <Text>Covid-19</Text>
        <Strong>On World</Strong>
      </Title>
      <ThemeButton>
        <Switch
          onChange={theme.setTheme}
          checked={theme.current.title == 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={20}
          handleDiameter={10}
          width={40}
        />
      </ThemeButton>
      <Data>
        <Section color={theme.current.colors.text.yellow}>
          <SectionTitle>Confirmed</SectionTitle>
          <Amount>{data && data.Global.TotalConfirmed}</Amount>
        </Section>
        <Section color={theme.current.colors.text.red}>
          <SectionTitle>Deaths</SectionTitle>
          <Amount>{data && data.Global.TotalDeaths}</Amount>
        </Section>
        <Section color={theme.current.colors.text.green}>
          <SectionTitle>Recovered</SectionTitle>
          <Amount>{data && data.Global.TotalRecovered}</Amount>
        </Section>
      </Data>
    </Container>
  )
}

export default Header
