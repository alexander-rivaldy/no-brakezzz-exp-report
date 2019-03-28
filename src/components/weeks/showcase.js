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
    const showcase = [];
    const facilitators = Weeks[weekNum].showcaseFacilitator;
    const speakers = Weeks[weekNum].showcaseSpeaker;
    const scribe = Weeks[weekNum].showcaseScribe;
    const operators = Weeks[weekNum].showcaseOperator;
    const retro = Weeks[weekNum].showcaseRetro;

    showcase.push(showcaseGroupContructor(FACILITATOR, facilitators));
    showcase.push(showcaseGroupContructor(SPEAKER, speakers));
    showcase.push(showcaseGroupContructor(SCRIBE, scribe));
    showcase.push(showcaseGroupContructor(OPERATOR, operators));
    showcase.push(showcaseGroupContructor(RETRO, retro));

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

function showcaseGroupContructor(title, items) {
    const element = [];
    const people = [];

    people.push(items.map((item, key) =>
        item.image
            ?
            <TeamMemberImage key={key} classname={ShowcasePeopleClass} name={item.image}/>
            :
            <TeamMemberImage key={key} classname={ShowcasePeopleClass} name={item}/>

    ));

    element.push(
        <ShowcaseGroup name={title}>
            {people}
        </ShowcaseGroup>
    );

    return element;

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
