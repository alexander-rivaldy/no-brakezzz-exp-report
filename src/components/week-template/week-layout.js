
import React from "react"
import PropTypes from "prop-types"
import "../week.css"
import {Development, Discussion, Game, ImageWithClass, Peacock} from "../image";

const section = "section";

export const Weeks = [
    {
        weekNum: 0,
        path: "/week-0",
        weekTitle: "I just haven't met you yet",
        weekSummary: "The week No Brakerzzz arrived in Pune.",
        highlights: [
            {
                name: "Team assemble: Peacock!",
                imageUrl: Peacock
            },
            {
                name: "Coming up with team name",
                imageUrl: Discussion
            },
            {
                name: "Gaming Night",
                imageUrl: Game
            },
            {
                name: "First feature development",
                imageUrl: Development
            }
        ]
    },
    {
        weekNum: 1,
        path: "/week-1",
        weekTitle: "No Brakerzzz Assemble",
        weekSummary: "At this very week, No Brakezzz was born!"
    },
    {
        weekNum: 2,
        path: "/week-2",
        weekTitle: "Accelerate all day every day",
        weekSummary: "Time to break the pipeline I guess?"
    },
    {
        weekNum: 3,
        path: "/week-3",
        weekTitle: "The Halfway checkpoint",
        weekSummary: "For some reason we have so many things happening this week"
    },
    {
        weekNum: 4,
        path: "/week-4",
        weekTitle: "The uh-oh moment",
        weekSummary: "Nope. Just, Nope."
    },
    {
        weekNum: 5,
        path: "/week-5",
        weekTitle: "Final acceleration",
        weekSummary: "The bitter-sweet end of ThoughtWorks University 64"
    }
];

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



export const Highlight = ({children}) => (
    <div className={section}>
        <div className="highlight">
            <h1>Highlights</h1>
            <div>
                {children}
            </div>
        </div>

    </div>

)

Highlight.propTypes = {
    children: PropTypes.node.isRequired,
}


export const HighlightItem = ({name, imageUrl, className}) => (

    <div className="highlight-item">
        <ImageWithClass classname={className} url={imageUrl}/>
        <h3>{name}</h3>
    </div>

)

HighlightItem.propTypes = {
    name: PropTypes.String,
    imageUrl: PropTypes.String,
    className: PropTypes.String,
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
        <div id="showcase-reflection">
            {children}
        </div>

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

export const LessonsLearned = ({children}) => (

    <div className={section}>
        <h1>Lessons Learned</h1>
        <div id="lessons-learned">
            {children}
        </div>
    </div>

)

LessonsLearned.propTypes = {
    children: PropTypes.node.isRequired,
}

export const Lesson = ({name}) => (

    <div className="lesson">
        <h5>{name}</h5>
    </div>

)

Lesson.propTypes = {
    name: PropTypes.String,
}

export const FACILITATOR = "Facilitator";
export const SPEAKER = "Speaker";
export const SCRIBE = "Scribe";
export const OPERATOR = "Operator";
export const RETRO = "Retro Lead";