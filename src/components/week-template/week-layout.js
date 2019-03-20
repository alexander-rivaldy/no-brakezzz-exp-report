
import React from "react"
import PropTypes from "prop-types"
import "../week.css"

const BannerLayout = ({ weekNum, weekTitle }) => (

    <div className="home-banner week-banner">
        <div className="week-banner-title-container">
            <h1>Week {weekNum}</h1>
            <h2>{weekTitle}</h2>
        </div>
    </div>

)

BannerLayout.propTypes = {
    weekNum: PropTypes.String,
    weekTitle: PropTypes.String,
}

export default BannerLayout
