import React, { memo } from 'react'

import { Card, Name, Data, Section, SectionTitle, Amount } from './styles'

const CountryCard = ({ country }) => {
  return (
    <Card>
      <Name>{country.Country}</Name>
      <Data>
        <Section>
          <SectionTitle>Confirmed</SectionTitle>
          <Amount color="D5E14E">{country.TotalConfirmed}</Amount>
        </Section>
        <Section>
          <SectionTitle>Recovered</SectionTitle>
          <Amount color="4CEA49">{country.TotalRecovered}</Amount>
        </Section>
        <Section>
          <SectionTitle>Deaths</SectionTitle>
          <Amount color="FD333F">{country.TotalDeaths}</Amount>
        </Section>
      </Data>
    </Card>
  )
}

export default memo(CountryCard)
