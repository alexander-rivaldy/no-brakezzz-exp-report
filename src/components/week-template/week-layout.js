
import React from "react"
import PropTypes from "prop-types"
import "../week.css"

const section = "section";

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

    <div className={section}>
        <div className="overview">
            <h1>Overview</h1>
            <p>{content}</p>
        </div>
    </div>

)

Overview.propTypes = {
    content: PropTypes.String,
}

export const Showcase = ({slideUrl, children}) => (

    <div className={section}>
        <h1>Showcase</h1>
        <div className="showcase">
            <div id="slides">
                <iframe
                    src={slideUrl}
                    frameBorder="0" width="100%" height="60%" allowFullScreen="true" mozallowfullscreen="true"
                    webkitallowfullscreen="true"/>
            </div>
            <div id="showcase-participation">
                {children}
            </div>

        </div>

    </div>

)
Showcase.propTypes = {
    slideUrl: PropTypes.String,
    children: PropTypes.node.isRequired,
}

export const ShowcaseGroup = ({name, children}) => (
    <div className="showcase-group">
        <h3>{name}</h3>
        {children}
    </div>

)

ShowcaseGroup.propTypes = {
    name: PropTypes.String,
    children: PropTypes.node.isRequired,
}


export const ShowcasePeople = ({name}) => (
    <img className="showcase-people" src={"images/team/" + name + ".jpg"}/>
)

ShowcasePeople.propTypes = {
    name: PropTypes.String,
}

export const ShowcaseReflection = ({children}) => (

    <div className={section}>

        {children}

    </div>

)

ShowcaseReflection.propTypes = {
    children: PropTypes.node.isRequired,
}

const listContainer = "list-container";
export const ShowcaseList = ({name, children}) => (

    <div className={listContainer}>
        <h2>{name}</h2>
        <ul>
            {children}
        </ul>
    </div>

)

ShowcaseList.propTypes = {
    name: PropTypes.String,
    children: PropTypes.node.isRequired,
}

export const ShowcaseListItem = ({item}) => (

    <li>
        {item}
    </li>

)

ShowcaseListItem.propTypes = {
    item: PropTypes.String,
}


export const FACILITATOR = "Facilitator";
export const SPEAKER = "Speaker";
export const SCRIBE = "Scribe";
export const OPERATOR = "Operator";
export const RETRO = "Retro Lead";