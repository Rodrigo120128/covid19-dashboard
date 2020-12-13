import React, { useEffect, useState } from "react"
import "./style.css"
import CountryCard from "../CountryCard"

const SearchCountries = () => {
    const [countryData,setCountryData] = useState([])
    const [countries,setCountries] = useState()
    let countryCounter = 8
    let data = ""

    useEffect( async () => {
        setCountries(await (await fetch("https://api.covid19api.com/summary")).json())
        data = await (await fetch("https://api.covid19api.com/summary")).json()
        const firstNineCountries = data.Countries.filter((item,index) => {
            if(index <= 8) return true
        })

        setCountryData(firstNineCountries)

        window.addEventListener("scroll",infiniteScroll)

        return () => window.removeEventListener("scroll",infiniteScroll)
    },[])

    const infiniteScroll = () => {
        const {scrollHeight,scrollTop,clientHeight} = document.documentElement

        if(scrollTop + clientHeight >= scrollHeight){
            moreCountries()
        }
    }

    const handleChange = (e) => {
        const country = e.target.value.toUpperCase()
        
        const arrayCountries = countries.Countries.filter((item) => {
            const arrayName = item.Country.split("")
            const arrayNameLength = arrayName.filter((item,index) => {
                if(index+1 <= country.length) return true
            })
            const countryName = arrayNameLength.join("").toUpperCase()
            
            if(country === countryName) return true
        })

        setCountryData(arrayCountries)
    }

    const moreCountries = ()  => {
        if(document.getElementsByTagName("input")[0].value  === ""){
            countryCounter+=9
            const nextCountries = data.Countries.filter((item,index) => {
                if(index <= countryCounter) return true
            })

            setCountryData(nextCountries)
        }
    }

    return(
        <>
            <div className="home-searchCountries">
                <input placeholder="Type any country" type="text" onChange={handleChange}/>
            </div>
            <CountryCard countries={countryData}/>
        </>
    )
}

export default SearchCountries