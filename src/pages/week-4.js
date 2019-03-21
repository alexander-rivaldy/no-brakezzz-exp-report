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
    Alex,
    Bryce, Development,
    Jacob,
    Pamela,
    PO,
    Sarah,
    Spandan,
    Stivali,
    TeamMemberImage,
    Trystan,
    Zoey
} from "../components/image";

const ShowcasePeopleClass = "showcase-people";

const Week4 = () => (

    <Layout>

        <WeekBanner weekNum={"4"} weekTitle ={"The uh-oh moment"} />
        <Overview
            content="At this stage of Client Engagement, we thought that everything has been going well based on the
            PO’s reacting during showcases. We also had good internal team communication, enforcing our initial
            thinking even more. That vision was quickly shattered by an email from the PO on Friday mentioning that
            she wanted all features to be finished by the next showcase. At that point, we haven’t kicked off the See
            Product Images story yet, and our email reply wasn’t the best too. Uh-oh."
        />

        <Highlight>
            <HighlightItem name="PO demanding all features to be finished" imageUrl={PO} />
            <HighlightItem name="Resolving high effort high pain Tech Debt" imageUrl={Development} />
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