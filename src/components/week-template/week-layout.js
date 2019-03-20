
import React from "react"
import PropTypes from "prop-types"
import "../week.css"

export const WeekBanner = ({ weekNum, weekTitle }) => (

    <div className="home-banner week-banner">
        <div className="week-banner-title-container">
            <h1>Week {weekNum}</h1>
            <h2>{weekTitle}</h2>
        </div>
    </div>

)

WeekBanner.propTypes = {
    weekNum: PropTypes.String,
    weekTitle: PropTypes.String,
}

export const Overview = ({content}) => {

    return(
        <div className="section">
            <div className="overview">
                <h1>Overview</h1>
                <p>{content}</p>
            </div>
        </div>
    );

}

Overview.propTypes = {
    content: PropTypes.String,
}

