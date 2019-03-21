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
    Alex,
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
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum."
        />

        <Highlight>
            <HighlightItem name="Build Monitor" imageUrl={Monitor} />
            <HighlightItem name="PO delegate another person to fill in" imageUrl={PO} />
            <HighlightItem name="Second showcase" imageUrl={ShowcaseIcon}/>
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