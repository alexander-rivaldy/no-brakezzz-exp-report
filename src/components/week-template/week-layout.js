
import React from "react"
import PropTypes from "prop-types"
import "../week.css"
import {
    Bowling,
    DanielUrl,
    Development,
    Discussion, Food,
    Game,
    GoCD, HandoverIcon, HoliIcon,
    ImageWithClass,
    Monitor, PamelaUrl,
    Peacock,
    PO, Poison,
    ShowcaseIcon,
    Toggle
} from "../image";

const section = "section";

export const Weeks = [
    {
        weekNum: 0,
        path: "/week-0",
        weekTitle: "I just haven't met you yet",
        weekSummary: "The week No Brakerzzz arrived in Pune.",
        weekDescription: "Flying over to Pune from all around the world, we all arrived with eyes full of hope, high determination" +
            " and the willingness to learn. Then day 0 of TWU64 came and we all interacted with each other without knowing" +
            " we would be in the same team. Little did we know, during dinner time the table arrangement was based on our" +
            " future team! Except that Sarah wasn't there, but Mahsa instead.",
        highlights: [
            {
                name: "Plenty of Presentations",
                imageUrl: ShowcaseIcon
            },
            {
                name: "First interaction: Dinner",
                imageUrl: Food
            }

        ]
    },
    {
        weekNum: 1,
        path: "/week-1",
        weekTitle: "No Brakerzzz Assemble",
        weekSummary: "At this very week, No Brakezzz was born!",
        weekDescription: "The first thing we did after we assembled as a team, and huddled to come up with a name, was to " +
            "meet the Product Owner. That was the moment we were introduced to FreeWheelers as well as our focus for " +
            "the first iteration, Country story.",
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
        weekNum: 2,
        path: "/week-2",
        weekTitle: "Accelerate all day every day",
        weekSummary: "Time to break the pipeline I guess?",
        weekDescription: "After our showcase we found out our CI environment was broken. After looking into it, we found out" +
            " it was broken because it was out of disk space and we fixed it by extending the pipeline script to delete" +
            " old artifacts. When we finally got this fixed we were able to push our first code to production which was" +
            " very exciting. Then we found out we had to back up the production DB and we finally found out how and implemented it.",
        highlights: [
            {
                name: "First Showcase!",
                imageUrl: ShowcaseIcon
            },
            {
                name: "CI ENV broke for the first time",
                imageUrl: GoCD
            },
            {
                name: "First production deploy (Friday night)",
                imageUrl: GoCD
            },
            {
                name: "Backup production DB",
                imageUrl: GoCD
            }
        ]
    },
    {
        weekNum: 3,
        path: "/week-3",
        weekTitle: "The Halfway checkpoint",
        weekSummary: "For some reason we have so many things happening this week",
        weekDescription: "Our PO was out of the office for a business trip and we had her coworker as our new PO for this" +
            " week. We had to learn how to adapt to this new PO because her style and requirements were vastly different" +
            " from our original PO. This week also featured our team outing to Chang’s plus bowling in Phoenix Mall." +
            " After that we got our build monitor working just in time for Jacob to break the build right before the Lonavala Trip.",
        highlights: [
            {
                name: "Build Monitor",
                imageUrl: Monitor
            },
            {
                name: "PO delegate another person to fill in",
                imageUrl: PO
            },
            {
                name: "Showcase 2",
                imageUrl: ShowcaseIcon
            },
            {
                name: "Feature Togglz",
                imageUrl: Toggle
            },
            {
                name: "Daniel's Birthday!",
                imageUrl: DanielUrl
            },
            {
                name: "Team Outing",
                imageUrl: Bowling
            },
            {
                name: "PO surprise visit",
                imageUrl: PO
            },
            {
                name: "Lonavala weekend broken build",
                imageUrl: GoCD
            }
        ]
    },
    {
        weekNum: 4,
        path: "/week-4",
        weekTitle: "The uh-oh moment",
        weekSummary: "Nope. Just, Nope.",
        weekDescription: "At this stage of Client Engagement, we thought that everything has been going well based on the" +
            " PO’s reacting during showcases. We also had good internal team communication, enforcing our initial" +
            " thinking even more. That vision was quickly shattered by an email from the PO on Friday mentioning that" +
            " she wanted all features to be finished by the next showcase. At that point, we haven’t kicked off the See" +
            " Product Images story yet, and our email reply wasn’t the best too. Uh-oh.",
        highlights: [
            {
                name: "PO demanding all features to be finished",
                imageUrl: PO
            },
            {
                name: "Resolving high effort high pain Tech Debt",
                imageUrl: Development
            }
        ]
    },
    {
        weekNum: 5,
        path: "/week-5",
        weekTitle: "Final acceleration",
        weekSummary: "The bitter-sweet end of ThoughtWorks University 64",
        weekDescription: "The final week of our Client Engagement. We had a lot to deliver because the PO expected us to" +
            " have all of the stories finished that were promised in the inception. Even with all of our hard work we" +
            " couldn’t manage to finish adding multiple items to the shopping cart and product images. We went into" +
            " showcase not knowing how the PO would react and at the very end of the showcase the PO received a call" +
            " from her bosses. We were told we had 5 mins to prepare for a 15 minute demo of our work and as we were" +
            " scrambling to prepare the demo, the PO surprised us all with cake and told us we didn’t actually have to" +
            " demo anything. We all had a good laugh about it and celebrated the end of our project.",
        highlights: [
            {
                name: "Staging ENV broke right before showcase",
                imageUrl: GoCD
            },
            {
                name: "Final Showcase",
                imageUrl: ShowcaseIcon
            },
            {
                name: "Handover document",
                imageUrl: HandoverIcon
            },
            {
                name: "Pamela's Birthday!",
                imageUrl: PamelaUrl
            },
            {
                name: "Happy Holi!",
                imageUrl: HoliIcon
            },
            {
                name: "Mass Food Poisoning",
                imageUrl: Poison
            }
        ]
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

export const WeekHeader = ({weekNum}) => {
    let header = [];
    let week = Weeks[weekNum];

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


export const Highlights = ({weekNum}) => {
    let items = [];
    let highlights = Weeks[weekNum].highlights;
    let className = "";

    for(let index = 0; index < highlights.length; index++) {
        items.push( <OneHighlightItem className={className} item={highlights[index]} /> );
    }

    return items;
}

Highlights.propTypes = {
    weekNum: PropTypes.integers,
}

const OneHighlightItem = ({item}) => {
    let className = "";
    if(item.imageUrl === DanielUrl || item.imageUrl === PamelaUrl) {
        className = "circle";
    }
    return (
    <div className="highlight-item">
        <ImageWithClass classname={className} url={item.imageUrl}/>
        <h3>{item.name}</h3>
    </div>
    );
}

OneHighlightItem.propTypes = {
    item: PropTypes.node,
    className: PropTypes.String,
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