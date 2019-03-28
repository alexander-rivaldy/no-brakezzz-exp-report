import PropTypes from "prop-types";
import {TeamMemberImage} from "../image";
import React from "react";
import {NoBrakezzz, TRAINEE, TRAINER} from "./team-data";

export const AllMember = () => {
    const allMembers = [];
    const trainers = [];
    const trainees = [];

    trainers.push(getMembersOfTWURole(TRAINER));
    trainees.push(getMembersOfTWURole(TRAINEE));

    allMembers.push(
        <MemberGroup title={"Trainer"}>
            {trainers}
        </MemberGroup>
    );

    allMembers.push(
        <MemberGroup title={"Trainee"}>
            {trainees}
        </MemberGroup>
    );

    return allMembers;
}

function getMembersOfTWURole(role) {
    const members = [];

    members.push(Object.keys(NoBrakezzz).map((key) => (
        NoBrakezzz[key].twuRole === role
            ?
            <Member key={key} name={NoBrakezzz[key].name}
                    image={NoBrakezzz[key].image}
                    role={NoBrakezzz[key].role}/>
            : null
    )));

    return members;

}


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
