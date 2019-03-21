import Layout from "../components/layout";
import React from "react"
import {
    Highlight,
    HighlightItem,
    Lesson,
    LessonsLearned,
    Overview,
    ShowcaseList,
    ShowcaseListItem,
    ShowcaseReflection,
    WeekBanner
} from "../components/week-template/week-layout"
import {Development, Discussion, Game, GoCD, Monitor, Peacock} from "../components/image";

const Week2 = () => (

    <Layout>

        <WeekBanner weekNum={"1"} weekTitle ={"No Brakerz Assemble!"} />
        <Overview
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum."
        />

        <Highlight>
            <HighlightItem name="Team assemble: Peacock!" imageUrl={Peacock}/>
            <HighlightItem name="Coming up with team name" imageUrl={Discussion}/>
            <HighlightItem name="Gaming Night" imageUrl={Game}/>
            <HighlightItem name="First feature development" imageUrl={Development}/>
        </Highlight>

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

            <Lesson name="Build monitor is essential"/>
            <Lesson name="LESSON 1"/>
            <Lesson name="LESSON 1"/>
            <Lesson name="LESSON 1"/>

        </LessonsLearned>



    </Layout>


)



export default Week2;