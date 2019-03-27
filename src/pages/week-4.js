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
import {Alex, Bryce, Jacob, Pamela, Sarah, Spandan, Stivali, TeamMemberImage, Trystan, Zoey} from "../components/image";

const ShowcasePeopleClass = "showcase-people";

const WEEKNUM = 4;

const Week4 = () => (

    <Layout>

        <WeekHeader weekNum={WEEKNUM}/>

        <Highlight>
            <Highlights weekNum={WEEKNUM}/>
        </Highlight>

        <Showcase slideUrl="https://docs.google.com/presentation/d/e/2PACX-1vS95JUd2MeFxITq-uHpMCojRR-0emuuzbQFh09FF31Gzgt553XVys5Bqi1_YRkJ8qJgCTTVcHWdSWrc/embed?start=false&loop=false&delayms=10000">
            <ShowcaseGroup name={FACILITATOR}>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Bryce}/>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Alex}/>
            </ShowcaseGroup>
            <ShowcaseGroup name={SPEAKER}>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Sarah}/>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Bryce}/>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Pamela}/>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Zoey}/>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Spandan}/>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Trystan}/>

            </ShowcaseGroup>
            <ShowcaseGroup name={SCRIBE}>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Stivali}/>
            </ShowcaseGroup>
            <ShowcaseGroup name={OPERATOR}>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Jacob}/>
            </ShowcaseGroup>
            <ShowcaseGroup name={RETRO}>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Trystan}/>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Stivali}/>
            </ShowcaseGroup>

        </Showcase>

    </Layout>


)



export default Week4;