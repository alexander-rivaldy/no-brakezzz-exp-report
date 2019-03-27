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
    Alex,
    Bryce,
    Holi,
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

const WEEKNUM = 5;

const Week5 = () => (

    <Layout>

        <WeekHeader weekNum={WEEKNUM}/>

        <Highlight>
            <Highlights weekNum={WEEKNUM}/>
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

    </Layout>


)



export default Week5;