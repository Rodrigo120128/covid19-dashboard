import React, { useEffect, useState } from "react"
import "./style.css"

const HeaderHome = () => {
     const [globalData,setGlobalData] = useState()

    useEffect(async () => {
        setGlobalData(await (await fetch("https://api.covid19api.com/summary")).json())
    },[])

    return(
        <>
            <div className="home-title">
                <span className="title-covid-19">Covid-19</span>
                <span className="title-onWorld">On World</span>
            </div>
            <div className="home-worldData">
                <div className="home-worldData-card-confirmed">
                    <span style={{fontSize:"15px"}}>Confirmed</span>
                    <span style={{fontSize:"30px"}}>{globalData && globalData.Global.TotalConfirmed}</span>
                </div>
                <div className="home-worldData-card-deaths">
                    <span style={{fontSize:"15px"}}>Deaths</span>
                    <span style={{fontSize:"30px"}}>{globalData && globalData.Global.TotalDeaths}</span>
                </div>
                <div className="home-worldData-card-recovered">
                    <span style={{fontSize:"15px"}}>Recovered</span>
                    <span style={{fontSize:"30px"}}>{globalData && globalData.Global.TotalRecovered}</span>
                </div>
            </div> 
        </>
    )
}

export default HeaderHome