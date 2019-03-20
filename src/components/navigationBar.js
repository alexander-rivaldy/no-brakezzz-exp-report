import PropTypes from "prop-types"
import React from "react"
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";

const NavigationBar = ({ siteTitle }) => (

    <Navbar pullRight bg="gray" expand="lg">
        <Navbar.Brand href="#home">{siteTitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto justify-content-end">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Week 0</Nav.Link>
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
    <NavDropdown title={"Week " + weekNum} id="basic-nav-dropdown">
        <NavDropdown.Item href={"week-" + weekNum}>Overview</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Highlight</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Showcase</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Lesson Learned</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    </NavDropdown>
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
