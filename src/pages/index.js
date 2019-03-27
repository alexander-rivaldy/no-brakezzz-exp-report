import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PropTypes from "prop-types"
import ReactGA from 'react-ga';

const IndexPage = () => (
    <Layout>
        {ReactGA.pageview('/')}
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>

        <Banner />

        <div className="week-panels-container">
            <WeekPanel weekNum={"0"} weekTitle={"I just haven't met you yet"}
                weekDescription="
                    The week No Brakerzzz arrived in Pune.
                "

            />

            <WeekPanel weekNum={"1"} weekTitle={"No Brakerzzz Assemble!"}
               weekDescription="
                    At this very week, No Brakezzz was born!
                "
            />
            <WeekPanel weekNum={"2"} weekTitle={"Accelerate all day every day"}
               weekDescription="
                   Time to break the pipeline I guess?
               "
            />
            <WeekPanel weekNum={"3"} weekTitle={"The Halfway checkpoint"}
               weekDescription="
                   For some reason we have so many things happening this week.
               "
            />
            <WeekPanel weekNum={"4"} weekTitle={"The uh-oh moment"}
               weekDescription="
                    Nope. Just, Nope.
                "
            />
            <WeekPanel weekNum={"5"} weekTitle={"Final acceleration"}
               weekDescription="
                   The bitter-sweet end of ThoughtWorks University 64.
               "
            />
        </div>

    </Layout>
)

const Banner = () => (
    <div className="home-banner">
        <h1>NO BRAKEZZZ</h1>
        <h3>Experience Report</h3>
    </div>
)


const WeekPanel = ({weekNum, weekTitle, weekDescription}) => (
    <a href={"/week-" + weekNum}>
        <div className="week-panel">
            <h1>Week {weekNum}</h1>
            <h4>{weekTitle}</h4>
            <p>{weekDescription}</p>
        </div>
    </a>

)


WeekPanel.propTypes = {
    weekNum: PropTypes.string,
    weekTitle: PropTypes.string,
    weekDescription: PropTypes.string,
}

export default IndexPage
