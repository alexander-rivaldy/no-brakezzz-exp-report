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
    GoCD, Holi, HoliIcon,
    Jacob, Louise,
    Monitor, Pamela,
    PO,
    Rodney,
    Sarah,
    ShowcaseIcon,
    Spandan,
    Stivali,
    TeamMemberImage,
    Trystan, Zoey
} from "../components/image";

const ShowcasePeopleClass = "showcase-people";

const Week5 = () => (

    <Layout>

        <WeekBanner weekNum={"5"} weekTitle ={"Final (git) push"} />
        <Overview
            content="The final week of our Client Engagement. We had a lot to deliver because the PO expected us to
            have all of the stories finished that were promised in the inception. Even with all of our hard work we
            couldn’t manage to finish adding multiple items to the shopping cart and product images. We went into
            showcase not knowing how the PO would react and at the very end of the showcase the PO received a call
            from her bosses. We were told we had 5 mins to prepare for a 15 minute demo of our work and as we were
            scrambling to prepare the demo, the PO surprised us all with cake and told us we didn’t actually have to
             demo anything. We all had a good laugh about it and celebrated the end of our project.
"
        />

        <Highlight>
            <HighlightItem name="Staging ENV broke right before showcase" imageUrl={GoCD} />
            <HighlightItem name="Final Showcase" imageUrl={ShowcaseIcon} />
            <HighlightItem name="Happy Holi!" imageUrl={HoliIcon} />
        </Highlight>

        <Showcase slideUrl="https://docs.google.com/presentation/d/e/2PACX-1vQ2tHI_iwSoVdoU_p_DlE8I_3Qp4-t6LMCAFmeL-7wbTs8EBqHRe329aS8ho6f--S2X5DpTlVLL89uH/embed?start=false&loop=false&delayms=10000">
            <ShowcaseGroup name={FACILITATOR}>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Rodney}/>
            </ShowcaseGroup>
            <ShowcaseGroup name={SPEAKER}>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Alex}/>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Bryce}/>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Jacob}/>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Louise}/>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Pamela}/>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Sarah}/>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Spandan}/>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Stivali}/>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Trystan}/>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Zoey}/>
            </ShowcaseGroup>
            <ShowcaseGroup name={SCRIBE}>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Rodney}/>
            </ShowcaseGroup>
            <ShowcaseGroup name={OPERATOR}>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Spandan}/>
                <TeamMemberImage classname={ShowcasePeopleClass} name={Stivali}/>
            </ShowcaseGroup>
            <ShowcaseGroup name={RETRO}>
                <h5>Tito</h5>
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



export default Week5;