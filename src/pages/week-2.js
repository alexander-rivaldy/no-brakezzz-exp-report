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
    Ann,
    Daniel,
    Jacob,
    Louise,
    Pamela,
    Rodney,
    Sarah,
    Spandan,
    Stivali,
    TeamMemberImage,
    Trystan,
    Zoey
} from "../components/image";

const ShowcasePeopleClass = "showcase-people";

const WEEKNUM = 2;

const Week2 = () => (

    <Layout>

        <WeekHeader weekNum={WEEKNUM}/>

        <Highlight>
            <Highlights weekNum={WEEKNUM}/>
        </Highlight>

        <Showcase slideUrl="https://docs.google.com/a/thoughtworks.com/presentation/d/e/2PACX-1vQ-pstLMNLi3wlENy_p0F-MY2BQyT_F9ypFVbSg7TWRpgg9tPwCKzP4JDf-pLPMH_uGiiU01cLh9Xha/embed?start=false&loop=false&delayms=10000">
            <ShowcaseGroup name={FACILITATOR}>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Rodney}/>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Louise}/>
            </ShowcaseGroup>
            <ShowcaseGroup name={SPEAKER}>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Sarah}/>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Jacob}/>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Stivali}/>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Spandan}/>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Trystan}/>

            </ShowcaseGroup>
            <ShowcaseGroup name={SCRIBE}>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Pamela}/>
            </ShowcaseGroup>
            <ShowcaseGroup name={OPERATOR}>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Zoey}/>
            </ShowcaseGroup>
            <ShowcaseGroup name={RETRO}>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Ann}/>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Daniel}/>
            </ShowcaseGroup>


        </Showcase>

    </Layout>


)



export default Week2;