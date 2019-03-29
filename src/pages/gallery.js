import React from "react"

import Layout from "../components/layout"
import PropTypes from "prop-types"
import {GalleryChant, GalleryInformationRadiators, GalleryNoBrakezzz} from "../components/image";
import "../components/gallery.css";



const Gallery = () => (
    <Layout>
        <GalleryBanner />

        <GalleryGroup name="No Brakezzz Chant">
            <GalleryChant/>
        </GalleryGroup>

        <GalleryGroup name="Team Picture">
            <GalleryNoBrakezzz/>
        </GalleryGroup>

        <GalleryGroup name="Information Radiators">
            <GalleryInformationRadiators/>
        </GalleryGroup>



    </Layout>
)

const GalleryBanner = () => (
    <div className="home-banner week-banner">
        <div className="week-banner-title-container">
            <h1>Gallery</h1>
            <h2>Visuals!</h2>
        </div>
    </div>
)

const GalleryGroup = ({name, children}) => (

    <div className="gallery-group">
        <h1>{name}</h1>
        {children}
    </div>

)

GalleryGroup.propTypes = {
    name: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default Gallery
