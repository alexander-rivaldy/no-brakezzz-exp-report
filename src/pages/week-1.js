import Layout from "../components/layout";
import React from "react"
import {Highlight, HighlightItem, Overview, WeekBanner} from "../components/week-template/week-layout"
import {Development, Discussion, Game, Peacock} from "../components/image";

const Week2 = () => (

    <Layout>

        <WeekBanner weekNum={"1"} weekTitle ={"No Brakerz Assemble!"} />
        <Overview
            content="The first thing we did after we assembled as a team, and huddled to come up with a name, was to
                meet the Product Owner. That was the moment we were introduced to FreeWheelers as well as our focus for
                the first iteration, Country story.
            "
        />

        <Highlight>
            <HighlightItem name="Team assemble: Peacock!" imageUrl={Peacock}/>
            <HighlightItem name="Coming up with team name" imageUrl={Discussion}/>
            <HighlightItem name="Gaming Night" imageUrl={Game}/>
            <HighlightItem name="First feature development" imageUrl={Development}/>
        </Highlight>


    </Layout>


)



export default Week2;