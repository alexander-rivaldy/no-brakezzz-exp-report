import React from "react"
import PropTypes from "prop-types"
import "../week.css"
import {TeamMemberImage} from "../image";
import {Weeks} from "./week-data";

const section = "section";

export const FACILITATOR = "Facilitator";
export const SPEAKER = "Speaker";
export const SCRIBE = "Scribe";
export const OPERATOR = "Operator";
export const RETRO = "Retro Lead";

const ShowcasePeopleClass = "showcase-people";

export const AllShowcase = ({weekNum}) => {
    let showcase = [];
    let people = [];
    let facilitators = Weeks[weekNum].showcaseFacilitator;
    let speakers = Weeks[weekNum].showcaseSpeaker;
    let scribe = Weeks[weekNum].showcaseScribe;
    let operators = Weeks[weekNum].showcaseOperator;
    let retro = Weeks[weekNum].showcaseRetro;

    people.push(facilitators.map((item, key) =>
        <TeamMemberImage key={key} classname={ShowcasePeopleClass} name={item}/>
    ))
    showcase.push(
        <ShowcaseGroup name={FACILITATOR}>
            {people}
        </ShowcaseGroup>
    )

    people = [];

    people.push(speakers.map((item, key) =>
        <TeamMemberImage key={key} classname={ShowcasePeopleClass} name={item}/>
    ))
    showcase.push(
        <ShowcaseGroup name={SPEAKER}>
            {people}
        </ShowcaseGroup>
    )

    showcase.push(
        <ShowcaseGroup name={SCRIBE}>
            <TeamMemberImage classname={ShowcasePeopleClass} name={scribe}/>
        </ShowcaseGroup>
    )

    people = [];

    people.push(operators.map((item, key) =>
        <TeamMemberImage key={key} classname={ShowcasePeopleClass} name={item}/>
    ))
    showcase.push(
        <ShowcaseGroup name={OPERATOR}>
            {people}
        </ShowcaseGroup>
    )

    people = [];

    people.push(retro.map((item, key) =>
        <TeamMemberImage key={key} classname={ShowcasePeopleClass} name={item}/>
    ))
    showcase.push(
        <ShowcaseGroup name={RETRO}>
            {people}
        </ShowcaseGroup>
    )

    return <ShowcaseLayout slideUrl={Weeks[weekNum].slideUrl}>{showcase}</ShowcaseLayout>;
}

AllShowcase.propTypes = {
    weekNum: PropTypes.integers,
}

const ShowcaseLayout = ({slideUrl, children}) => (
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

ShowcaseLayout.propTypes = {
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
