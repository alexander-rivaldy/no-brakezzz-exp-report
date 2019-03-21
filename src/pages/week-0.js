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
    Alex,
    Bryce, Food,
    GoCD,
    Jacob,
    Louise, Monitor,
    Pamela, PO,
    Rodney,
    Sarah, ShowcaseIcon,
    Spandan,
    Stivali,
    TeamMemberImage,
    Trystan,
    Zoey
} from "../components/image";

const ShowcasePeopleClass = "showcase-people";

const Week2 = () => (

    <Layout>

        <WeekBanner weekNum={"0"} weekTitle ={"I just haven't met you yet"} />
        <Overview
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum."
        />

        <Highlight>
            <HighlightItem name="Plenty of presentations" imageUrl={ShowcaseIcon} />
            <HighlightItem name="First interaction: Dinner" imageUrl={Food} />
        </Highlight>

    </Layout>


)



export default Week2;