import Layout from "../components/layout";
import React from "react"
import {
    WeekBanner,
    Overview,
    Showcase,
    ShowcasePeople,
    ShowcaseGroup,
    FACILITATOR,
    SPEAKER, SCRIBE, OPERATOR
} from "../components/week-template/week-layout"


const Week1 = () => (

    <Layout>

        <WeekBanner weekNum={"1"} weekTitle ={"No Brakerzzz Assemble!"} />
        <Overview
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum."
        />

        <Showcase>
            <ShowcaseGroup name={FACILITATOR}>
                <ShowcasePeople name="Rodney"/>
                <ShowcasePeople name="Louise"/>
            </ShowcaseGroup>
            <ShowcaseGroup name={SPEAKER}>
                <ShowcasePeople name="Sarah"/>
                <ShowcasePeople name="Jacob"/>
                <ShowcasePeople name="Stivali"/>
                <ShowcasePeople name="Spandan"/>
                <ShowcasePeople name="Trystan"/>
            </ShowcaseGroup>
            <ShowcaseGroup name={SCRIBE}>
                <ShowcasePeople name="Pamela"/>
            </ShowcaseGroup>
            <ShowcaseGroup name={OPERATOR}>
                <ShowcasePeople name="Zoey"/>
            </ShowcaseGroup>

        </Showcase>



    </Layout>


)



export default Week1;