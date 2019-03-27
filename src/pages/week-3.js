import Layout from "../components/layout";
import React from "react"
import {AllShowcase, Highlight, Highlights, WeekHeader} from "../components/week-template/week-layout"

const WEEKNUM = 3;

const Week3 = () => (

    <Layout>

        <WeekHeader weekNum={WEEKNUM}/>

        <Highlight>
            <Highlights weekNum={WEEKNUM}/>
        </Highlight>


        <AllShowcase weekNum={WEEKNUM}/>

    </Layout>


)



export default Week3;