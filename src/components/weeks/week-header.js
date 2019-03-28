import PropTypes from "prop-types";
import React from "react";
import {Weeks} from "./week-data";

const section = "section";

export const WeekHeader = ({weekNum}) => {
    const header = [];
    const week = Weeks[weekNum];

    header.push( <NewBanner week={week}/> )
    header.push( <NewOverview week={week}/> )

    return header;

}

WeekHeader.propTypes = {
    weekNum: PropTypes.integers,
}

const NewBanner = ({week}) => (
    <div className="home-banner week-banner">
        <div className="week-banner-title-container">
            <h1>Week {week.weekNum}</h1>
            <h2>{week.weekTitle}</h2>
        </div>
    </div>
)


NewBanner.propTypes = {
    week: PropTypes.node,
}

const NewOverview = ({week}) => (

    <div className={section}>
        <div className="overview">
            <h1>Overview</h1>
            <p>{week.weekDescription}</p>
        </div>
    </div>

)

NewOverview.propTypes = {
    week: PropTypes.node,
}
