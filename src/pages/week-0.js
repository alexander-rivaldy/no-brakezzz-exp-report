import Layout from "../components/layout";
import React from "react"
import {Highlight, HighlightItem, Overview, WeekBanner} from "../components/week-template/week-layout"
import {Food, ShowcaseIcon} from "../components/image";


const Week0 = () => (

    <Layout>

        <WeekBanner weekNum={"0"} weekTitle ={"I just haven't met you yet"} />
        <Overview
            content="Flying over to Pune from all around the world, we all arrived with eyes full of hope, high determination
            and the willingness to learn. Then day 0 of TWU64 came and we all interacted with each other without knowing
            we would be in the same team. Little did we know, during dinner time the table arrangement was based on our
            future team! Except that Sarah wasn't there, but Mahsa instead."
        />

        <Highlight>
            <HighlightItem name="Plenty of presentations" imageUrl={ShowcaseIcon} />
            <HighlightItem name="First interaction: Dinner" imageUrl={Food} />
        </Highlight>

    </Layout>


)



export default Week0;