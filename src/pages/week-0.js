import Layout from "../components/layout";
import React from "react"
import {WeekHeader} from "../components/weeks/week-header";
import {Highlight, Highlights} from "../components/weeks/highlight";


const WEEKNUM = 0;

const Week0 = () => (

    <Layout>

        <WeekHeader weekNum={WEEKNUM}/>

        <Highlight>
            <Highlights weekNum={WEEKNUM}/>
        </Highlight>

    </Layout>


)



export default Week0;