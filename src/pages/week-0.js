import Layout from "../components/layout";
import React from "react"
import {Highlight, Highlights, WeekHeader} from "../components/week-template/week-layout"


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