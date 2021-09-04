import React, { useContext } from 'react'

import './style.css'

import { ThemeContext } from '../../context/theme'

const CountryCard = ({ countries }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className="home-container-countriesCard">
      {countries.map((item, index) => {
        return (
          <div key={index} className="home-card-padding">
            <div
              style={{ background: theme.colors.backgroundCard }}
              className="home-countryCard"
            >
              <h2 style={{ color: theme.colors.color }}>{item.Country}</h2>
              <div className="home-countryCard-data">
                <span style={{ color: theme.colors.color }}>Confirmed</span>
                <span
                  style={{
                    fontSize: '26px',
                    color: '#d5e14e'
                  }}
                >
                  {item.TotalConfirmed}
                </span>
              </div>
              <div className="home-countryCard-data">
                <span style={{ color: theme.colors.color }}>Recovered</span>
                <span
                  style={{
                    fontSize: '26px',
                    color: '#4Cea49'
                  }}
                >
                  {item.TotalRecovered}
                </span>
              </div>
              <div className="home-countryCard-data">
                <span style={{ color: theme.colors.color }}>Deaths</span>
                <span
                  style={{
                    fontSize: '26px',
                    color: '#fd333f'
                  }}
                >
                  {item.TotalDeaths}
                </span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CountryCard
