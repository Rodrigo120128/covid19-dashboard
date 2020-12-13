import React from "react"
import "./style.css"

const CountryCard = ({countries}) => {

    return(
        <div className="home-container-countriesCard">
            {
                countries.map((item,index) => {
                    return(
                        <div key={index} className="home-card-padding">
                            <div className="home-countryCard">
                                <h2>{item.Country}</h2>
                                <div className="home-countryCard-data">
                                    <span>Confirmed</span>
                                    <span style={{
                                        fontSize:"26px",
                                        color:"#d5e14e"
                                        }} >{item.TotalConfirmed}</span>
                                </div>
                                <div className="home-countryCard-data">
                                    <span>Recovered</span>
                                    <span style={{
                                        fontSize:"26px",
                                        color:"#4Cea49"
                                        }}>{item.TotalRecovered}</span>
                                </div>
                                <div className="home-countryCard-data">
                                    <span>Deaths</span>
                                    <span style={{
                                        fontSize:"26px",
                                        color:"#fd333f"
                                        }}>{item.TotalDeaths}</span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CountryCard