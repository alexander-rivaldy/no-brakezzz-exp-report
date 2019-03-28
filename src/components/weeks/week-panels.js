import PropTypes from "prop-types";
import React from "react";
import {Weeks} from "./week-data";

export const AllWeekPanels = () => {
    let elements = [];

    for(let weekNum = 0; weekNum < Weeks.length; weekNum++) {
        elements.push( <WeekPanel week={Weeks[weekNum]}/> );
    }

    return elements;
}


const WeekPanel = ({week}) => (
    <a href={"/week-" + week.weekNum}>
        <div className="week-panel">
            <h1>Week {week.weekNum}</h1>
            <h4>{week.weekTitle}</h4>
            <p>{week.weekSummary}</p>
        </div>
    </a>
)

WeekPanel.propTypes = {
    week: PropTypes.node,
}
