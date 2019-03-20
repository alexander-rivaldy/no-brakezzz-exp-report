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
            <WeekPanel weekNum={"0"} weekDescription={"I just haven't met you yet"}/>
            <WeekPanel weekNum={"1"} weekDescription={"No Brakerzzz Assemble!"}/>
            <WeekPanel weekNum={"2"} weekDescription={"Accelerate all day erry day"}/>
            <WeekPanel weekNum={"3"} weekDescription={"Oh no, Hump week!"}/>
            <WeekPanel weekNum={"4"} weekDescription={"The uh-oh moment"}/>
            <WeekPanel weekNum={"5"} weekDescription={"Final acceleration"}/>
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


const WeekPanel = ({weekNum, weekDescription}) => (
    <div className="week-panel">
        <h1>Week {weekNum}</h1>
        <h2>{weekDescription}</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>

)


WeekPanel.propTypes = {
    weekNum: PropTypes.string,
    weekDescription: PropTypes.string,
}

export default IndexPage
