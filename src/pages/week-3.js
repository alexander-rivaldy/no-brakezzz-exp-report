import Layout from "../components/layout";
import React from "react"
import {
    FACILITATOR,
    Highlight,
    Highlights,
    OPERATOR,
    RETRO,
    SCRIBE,
    Showcase,
    ShowcaseGroup,
    SPEAKER,
    WeekHeader
} from "../components/week-template/week-layout"
import {
    Alex,
    Bryce,
    Jacob,
    Pamela,
    Rodney,
    Sarah,
    Spandan,
    Stivali,
    TeamMemberImage,
    Trystan
} from "../components/image";

const ShowcasePeopleClass = "showcase-people";

const WEEKNUM = 3;

const Week3 = () => (

    <Layout>

        <WeekHeader weekNum={WEEKNUM}/>

        <Highlight>
            <Highlights weekNum={WEEKNUM}/>
        </Highlight>

        <Showcase slideUrl="https://docs.google.com/presentation/d/e/2PACX-1vTtY0Si6JhzLA9F281QCNKTF7X1U1AKJZn-G4NeFsRiQQjubszv16CuRgHumJPlUJNtW_sQnlOsii2L/embed?start=false&loop=false&delayms=10000">
            <ShowcaseGroup name={FACILITATOR}>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Rodney}/>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Jacob}/>
            </ShowcaseGroup>
            <ShowcaseGroup name={SPEAKER}>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Bryce}/>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Stivali}/>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Alex}/>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Trystan}/>

            </ShowcaseGroup>
            <ShowcaseGroup name={SCRIBE}>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Sarah}/>
            </ShowcaseGroup>
            <ShowcaseGroup name={OPERATOR}>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Spandan}/>
            </ShowcaseGroup>
            <ShowcaseGroup name={RETRO}>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Sarah}/>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Pamela}/>
            </ShowcaseGroup>

        </Showcase>

    </Layout>


)



export default Week3;