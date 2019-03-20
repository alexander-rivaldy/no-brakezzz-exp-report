
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

export const Overview = ({content}) => (

    <div className="section">
        <div className="overview">
            <h1>Overview</h1>
            <p>{content}</p>
        </div>
    </div>

)

Overview.propTypes = {
    content: PropTypes.String,
}

export const Showcase = ({speaker, facilitator, scribe, operator}) => (

    <div className="section">
        <div className="showcase">
            <div id="slides">

            </div>
            <div id="showcase-participation">
                <div className="participants">
                    <h3>Facilitator</h3>
                    {facilitator}
                </div>
                <div className="participants">
                    <h3>Speakers</h3>
                    {speaker}
                </div>
                <div className="participants">
                    <h3>Scribe</h3>
                    {scribe}
                </div>
                <div className="participants">
                    <h3>Operator</h3>
                    {operator}
                </div>

            </div>

        </div>

    </div>

)




Showcase.propTypes = {
    speaker: PropTypes.node.isRequired,
    facilitator: PropTypes.node.isRequired,
    scribe: PropTypes.node.isRequired,
    operator: PropTypes.node.isRequired,
}
