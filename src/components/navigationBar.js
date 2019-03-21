import PropTypes from "prop-types"
import React from "react"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavigationBar = ({ siteTitle }) => (

    <Navbar pullRight bg="gray" expand="lg">
        <Navbar.Brand href="/">{siteTitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto justify-content-end">
                <Nav.Link href="/">Home</Nav.Link>
                <NavigationWeek weekNum={"0"}/>
                <NavigationWeek weekNum={"1"}/>
                <NavigationWeek weekNum={"2"}/>
                <NavigationWeek weekNum={"3"}/>
                <NavigationWeek weekNum={"4"}/>
                <NavigationWeek weekNum={"5"}/>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export const NavigationWeek = ({weekNum}) => (
    <Nav.Link href={"/week-" + weekNum}>Week {weekNum}</Nav.Link>
)

NavigationWeek.propTypes ={
    weekNum: PropTypes.string,
}

NavigationBar.propTypes = {
    siteTitle: PropTypes.string,
}

NavigationBar.defaultProps = {
    siteTitle: ``,
}

export default NavigationBar
