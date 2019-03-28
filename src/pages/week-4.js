import Layout from "../components/layout";
import React from "react"
import {AllShowcase} from "../components/weeks/showcase"
import {Highlight, Highlights} from "../components/weeks/highlight";
import {WeekHeader} from "../components/weeks/week-header";

const WEEKNUM = 4;

const Week4 = () => (

    <Layout>

        <WeekHeader weekNum={WEEKNUM}/>

        <Highlight>
            <Highlights weekNum={WEEKNUM}/>
        </Highlight>


        <AllShowcase weekNum={WEEKNUM}/>

    </Layout>


)



export default Week4;