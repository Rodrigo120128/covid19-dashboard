import React, { useEffect, useState ,useContext} from "react"
import "./style.css"
import Switch from "react-switch"
import {ThemeContext,themes} from "../../context/theme"
const HeaderHome = () => {
     const [globalData,setGlobalData] = useState()
     const {theme,setTheme} = useContext(ThemeContext)

    useEffect(async () => {
        setGlobalData(await (await fetch("https://api.covid19api.com/summary")).json())
    },[])

    const toggleTheme = () => {
        if(theme.name === "dark"){
            localStorage.setItem("@theme","light")
            return themes[1]
        }else{
            localStorage.setItem("@theme","dark")
            return themes[0]
        }
    }

    return(
        <>
            <div className="home-title">
                <span style={{color:theme.colors.color}} className="title-covid-19">Covid-19</span>
                <span style={{color:theme.colors.color}} className="title-onWorld">On World</span>
                <Switch 
                    onChange={() => {
                        setTheme(toggleTheme())
                    }}
                    checked={theme.name === "dark" ? true : false}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={20}
                    handleDiameter={10}
                    width={40}
                />
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