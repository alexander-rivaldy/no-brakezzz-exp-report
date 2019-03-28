import PropTypes from "prop-types";
import React from "react";
import {Weeks} from "./week-data";

export const AllWeekPanels = () => {
    const elements = [];

    elements.push(Weeks.map((item, key) =>
        <WeekPanel key={key} week={item} />
    ))

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
