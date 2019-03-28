import Layout from "../components/layout";
import React from "react"
import {
    Alex,
    Ann,
    Bryce,
    Daniel,
    Jacob,
    Louise,
    Pamela,
    Rodney,
    Sarah,
    Spandan,
    Stivali,
    Trystan,
    Zoey
} from "../components/image";

import "../components/team/team.css"
import {AllMember, Member, MemberGroup} from "../components/team/team-component";


const DEV = "Developer";
const XD = "Experience Designer";
const BA = "Business Analyst";

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