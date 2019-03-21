import Layout from "../components/layout";
import React from "react"
import {
    FACILITATOR,
    Highlight,
    HighlightItem,
    OPERATOR,
    Overview,
    RETRO,
    SCRIBE,
    Showcase,
    ShowcaseGroup,
    SPEAKER,
    WeekBanner
} from "../components/week-template/week-layout"
import {
    Ann,
    Daniel,
    GoCD,
    Jacob,
    Louise,
    Pamela,
    Rodney,
    Sarah,
    ShowcaseIcon,
    Spandan,
    Stivali,
    TeamMemberImage,
    Trystan,
    Zoey
} from "../components/image";

const ShowcasePeopleClass = "showcase-people";

const Week2 = () => (

    <Layout>

        <WeekBanner weekNum={"2"} weekTitle ={"Accelerate all day every day"} />
        <Overview
            content="After our showcase we found out our CI environment was broken. After looking into it, we found out
            it was broken because it was out of disk space and we fixed it by extending the pipeline script to delete
            old artifacts. When we finally got this fixed we were able to push our first code to production which was
            very exciting. Then we found out we had to back up the production DB and we finally found out how and implemented it.
"
        />

        <Highlight>
            <HighlightItem name="First Showcase!" imageUrl={ShowcaseIcon} />
            <HighlightItem name="CI ENV broke for the first time" imageUrl={GoCD}/>
            <HighlightItem name="First production deploy (Friday night)" imageUrl={GoCD}/>
            <HighlightItem name="Backup production DB" imageUrl={GoCD}/>
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

        {/*<ShowcaseReflection>*/}

            {/*<ShowcaseList name="What went well">*/}
                {/*<ShowcaseListItem item="Country story got deployed to production"/>*/}
            {/*</ShowcaseList>*/}

            {/*<ShowcaseList name="Possible Improvements">*/}
                {/*<ShowcaseListItem item="Communications with PO was minimal up until the showcase"/>*/}
            {/*</ShowcaseList>*/}

        {/*</ShowcaseReflection>*/}

        {/*<LessonsLearned>*/}
            {/*<Lesson name="Build monitor is essential"/>*/}
        {/*</LessonsLearned>*/}



    </Layout>


)



export default Week2;