import Layout from "../components/layout";
import React from "react"

import "../components/team/team.css"
import {AllMember} from "../components/team/team-component";

const Team = () => (

    <Layout>

        <div className="home-banner week-banner" id="team-banner">
            <div className="team-title week-banner-title-container">
                <h2>Meet the team!</h2>
                <h1>No Brakezzz</h1>
            </div>
        </div>




        <div id="team-content">
            <AllMember />
        </div>

    </Layout>


)



export default Team;