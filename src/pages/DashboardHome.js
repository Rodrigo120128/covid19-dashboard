import React from "react"  
import HeaderHome from "../components/HeaderHome"
import SearchCountries from "../components/SearchCountries"

const DashBoardHome = () => {
    return(
        <div className="container-home">
            <HeaderHome/>
            <SearchCountries/>
        </div>
    )
}

export default DashBoardHome