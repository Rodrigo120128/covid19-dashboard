import React, { memo, useContext } from 'react'

import { ThemeContext } from 'styled-components'

import { Card, Name, Data, Section, SectionTitle, Amount } from './styles'

const CountryCard = ({ country }) => {
  const theme = useContext(ThemeContext)

  return (
    <Card>
      <Name>{country.Country}</Name>
      <Data>
        <Section>
          <SectionTitle>Confirmed</SectionTitle>
          <Amount color={theme.current.colors.text.yellow}>
            {country.TotalConfirmed}
          </Amount>
        </Section>
        <Section>
          <SectionTitle>Recovered</SectionTitle>
          <Amount color={theme.current.colors.text.green}>
            {country.TotalRecovered}
          </Amount>
        </Section>
        <Section>
          <SectionTitle>Deaths</SectionTitle>
          <Amount color={theme.current.colors.text.red}>
            {country.TotalDeaths}
          </Amount>
        </Section>
      </Data>
    </Card>
  )
}

export default memo(CountryCard)
