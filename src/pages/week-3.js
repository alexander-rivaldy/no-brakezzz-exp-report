import Layout from "../components/layout";
import React from "react"
import {AllShowcase} from "../components/weeks/showcase"
import {WeekHeader} from "../components/weeks/week-header";
import {Highlight, Highlights} from "../components/weeks/highlight";

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