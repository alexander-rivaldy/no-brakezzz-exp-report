import Layout from "../components/layout";
import React from "react"
import {
    FACILITATOR,
    Highlight,
    HighlightItem,
    Lesson,
    LessonsLearned,
    OPERATOR,
    Overview, RETRO,
    SCRIBE,
    Showcase,
    ShowcaseGroup,
    ShowcaseList,
    ShowcaseListItem,
    ShowcaseReflection,
    SPEAKER,
    WeekBanner
} from "../components/week-template/week-layout"
import {
    Alex, Bowling,
    Bryce,
    GoCD,
    Jacob,
    Monitor, Pamela,
    PO,
    Rodney,
    Sarah,
    ShowcaseIcon,
    Spandan,
    Stivali,
    TeamMemberImage,
    Trystan
} from "../components/image";

const ShowcasePeopleClass = "showcase-people";

const Week3 = () => (

    <Layout>

        <WeekBanner weekNum={"3"} weekTitle ={"Guess what week it is? Hump week!"} />
        <Overview
            content="Our PO was out of the office for a business trip and we had her coworker as our new PO for this
            week. We had to learn how to adapt to this new PO because her style and requirements were vastly different
            from our original PO. This week also featured our team outing to Chang’s plus bowling in Phoenix Mall.
            After that we got our build monitor working just in time for Jacob to break the build right before the Lonavala Trip.
"
        />

        <Highlight>
            <HighlightItem name="Build Monitor" imageUrl={Monitor} />
            <HighlightItem name="PO delegate another person to fill in" imageUrl={PO} />
            <HighlightItem name="Showcase 2" imageUrl={ShowcaseIcon}/>
            <HighlightItem name="Team Outing" imageUrl={Bowling}/>
            <HighlightItem name="PO surprise visit" imageUrl={PO} />
            <HighlightItem name="Lonavala weekend broken build" imageUrl={GoCD}/>
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

        <ShowcaseReflection>

            <ShowcaseList name="What went well">
                <ShowcaseListItem item="Country story got deployed to production"/>
                <ShowcaseListItem item="This thing went well"/>
                <ShowcaseListItem item="This thing went well"/>
                <ShowcaseListItem item="This thing went well"/>
            </ShowcaseList>

            <ShowcaseList name="Possible Improvements">
                <ShowcaseListItem item="Communications with PO was minimal up until the showcase"/>
                <ShowcaseListItem item="This is possible improvement"/>
                <ShowcaseListItem item="This is possible improvement"/>
                <ShowcaseListItem item="This is possible improvement"/>
            </ShowcaseList>

        </ShowcaseReflection>

        <LessonsLearned>

            <Lesson name="LESSON 1"/>
            <Lesson name="LESSON 1"/>
            <Lesson name="LESSON 1"/>

        </LessonsLearned>



    </Layout>


)



export default Week3;