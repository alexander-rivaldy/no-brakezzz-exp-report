import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {AllWeekPanels} from "../components/week-template/week-layout";




const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>

        <Banner />

        <div className="week-panels-container">
            <AllWeekPanels/>
        </div>

    </Layout>
)

const Banner = () => (
    <div className="home-banner">
        <h1>NO BRAKEZZZ</h1>
        <h3>Experience Report</h3>
    </div>
)






export default IndexPage
