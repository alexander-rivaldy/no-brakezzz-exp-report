import Layout from "../components/layout";
import React from "react"
import {
    WeekBanner,
    Overview,
    Showcase,
    ShowcasePeople,
    ShowcaseGroup,
    FACILITATOR,
    SPEAKER,
    SCRIBE,
    OPERATOR,
    ShowcaseReflection,
    ShowcaseList,
    ShowcaseListItem,
    Highlight,
    HighlightItem,
    LessonsLearned, Lesson
} from "../components/week-template/week-layout"
import {
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


const Week2 = () => (

    <Layout>

        <WeekBanner weekNum={"2"} weekTitle ={"Accelerate all day every day"} />
        <Overview
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum."
        />

        <Highlight>
            <HighlightItem name="First Showcase!"/>
            <HighlightItem name="CI ENV broke for the first time"/>

        </Highlight>

        <Showcase slideUrl="https://docs.google.com/a/thoughtworks.com/presentation/d/e/2PACX-1vQ-pstLMNLi3wlENy_p0F-MY2BQyT_F9ypFVbSg7TWRpgg9tPwCKzP4JDf-pLPMH_uGiiU01cLh9Xha/embed?start=false&loop=false&delayms=10000">
            <ShowcaseGroup name={FACILITATOR}>
                <TeamMemberImage name={<Rodney />}/>
                <TeamMemberImage name={<Louise />}/>
            </ShowcaseGroup>
            <ShowcaseGroup name={SPEAKER}>
                <TeamMemberImage name={<Sarah />}/>
                <TeamMemberImage name={<Jacob />}/>
                <TeamMemberImage name={<Stivali />}/>
                <TeamMemberImage name={<Spandan />}/>
                <TeamMemberImage name={<Trystan />}/>

            </ShowcaseGroup>
            <ShowcaseGroup name={SCRIBE}>
                <TeamMemberImage name={<Pamela />}/>
            </ShowcaseGroup>
            <ShowcaseGroup name={OPERATOR}>
                <TeamMemberImage name={<Zoey />}/>
            </ShowcaseGroup>

        </Showcase>

        <ShowcaseReflection>

            <ShowcaseList name="What went well">
                <ShowcaseListItem item="This thing went well"/>
                <ShowcaseListItem item="This thing went well"/>
                <ShowcaseListItem item="This thing went well"/>
                <ShowcaseListItem item="This thing went well"/>
            </ShowcaseList>

            <ShowcaseList name="Possible Improvements">
                <ShowcaseListItem item="This is possible improvement"/>
                <ShowcaseListItem item="This is possible improvement"/>
                <ShowcaseListItem item="This is possible improvement"/>
                <ShowcaseListItem item="This is possible improvement"/>
            </ShowcaseList>

        </ShowcaseReflection>

        <LessonsLearned>

            <Lesson name="LESSON 1"/>
            <Lesson name="LESSON 1"/>
            <Lesson name="LESSON 1"/>
            <Lesson name="LESSON 1"/>

        </LessonsLearned>



    </Layout>


)



export default Week2;