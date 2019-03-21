import Layout from "../components/layout";
import React from "react"
import PropTypes from "prop-types"
import {
    Alex,
    Ann,
    Bryce,
    Daniel,
    Jacob,
    Louise,
    Pamela,
    Rodney, Sarah, Spandan, Stivali,
    TeamMemberImage, Trystan, Zoey
} from "../components/image";

import "../components/team.css"


const DEV = "Developer";
const XD = "Experience Designer";
const BA = "Business Analyst";

const Team = () => (

    <Layout>

        <div className="home-banner week-banner">
            <div className="team-title week-banner-title-container">
                <h2>Meet the team!</h2>
                <h1>No Brakezzz</h1>
            </div>
        </div>

        <div id="team-content">
            <MemberGroup title="Trainers">
                <Member name="Ann" image={Ann} role={DEV}/>
                <Member name="Daniel" image={Daniel} role={XD}/>
            </MemberGroup>
            <MemberGroup title="Trainees">
                <Member name="Alex" image={Alex} role={DEV}/>
                <Member name="Bryce" image={Bryce} role={DEV}/>
                <Member name="Jacob" image={Jacob} role={DEV}/>
                <Member name="Louise" image={Louise} role={XD}/>
                <Member name="Pamela" image={Pamela} role={DEV}/>
                <Member name="Rodney" image={Rodney} role={BA}/>
                <Member name="Sarah" image={Sarah} role={DEV}/>
                <Member name="Spandan" image={Spandan} role={DEV}/>
                <Member name="Stivali" image={Stivali} role={DEV}/>
                <Member name="Trystan" image={Trystan} role={DEV}/>
                <Member name="Zoey" image={Zoey} role={DEV}/>
            </MemberGroup>
        </div>

    </Layout>


)

const MemberGroup = ({ title, children }) => (
    <div className="member-group">
        <h1>{title}</h1>
        <div>
            {children}
        </div>
    </div>

)

MemberGroup.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
}

const Member = ({ name, image, role }) => (
    <div className="team-member">
        <TeamMemberImage name={image}/>
        <div>
            <h4>{name}</h4>
            <h6>{role}</h6>
        </div>
    </div>

)

Member.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    role: PropTypes.string,
}



export default Team;