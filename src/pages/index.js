import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PropTypes from "prop-types"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>

        <Banner />

        <div className="week-panels-container">
            <WeekPanel weekNum={"0"} weekTitle={"I just haven't met you yet"}
                weekDescription="
                    The week No Brakerzzz arrived in Pune. We all had no idea what TWU will bring, what will hit us hard
                    (Spring, I'm looking at you) and just how much fun it would be.
                "

            />

            <WeekPanel weekNum={"1"} weekTitle={"No Brakerzzz Assemble!"}
               weekDescription="
                    At this very week, No Brakezzz was born!
                "
            />
            <WeekPanel weekNum={"2"} weekTitle={"Accelerate all day every day"}
               weekDescription="
                   TEXT
               "
            />
            <WeekPanel weekNum={"3"} weekTitle={"Guess what week it is? Hump week!"}
               weekDescription="
                   TEXT
               "
            />
            <WeekPanel weekNum={"4"} weekTitle={"The uh-oh moment"}
               weekDescription="
                    Nope. Just, Nope.
                "
            />
            <WeekPanel weekNum={"5"} weekTitle={"Final acceleration"}
               weekDescription="
                   TEXT
               "
            />
        </div>


        <Link to="/page-2/">Go to page 2</Link>
    </Layout>
)

const Banner = () => (
    <div className="home-banner">
        <h1>NO BRAKEZZZ</h1>
        <h3>Experience Report</h3>
    </div>
)


const WeekPanel = ({weekNum, weekTitle, weekDescription}) => (
    <div className="week-panel">
        <h1>Week {weekNum}</h1>
        <h4>{weekTitle}</h4>
        <p>{weekDescription}</p>
    </div>

)


WeekPanel.propTypes = {
    weekNum: PropTypes.string,
    weekTitle: PropTypes.string,
    weekDescription: PropTypes.string,
}

export default IndexPage
