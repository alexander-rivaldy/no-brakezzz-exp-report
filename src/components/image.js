import React from "react"
import PropTypes from "prop-types";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

// export const Image = () => (
//   <StaticQuery
//     query={graphql`
//       query {
//         placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
//           childImageSharp {
//             fluid(maxWidth: 300) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     `}
//     render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
//   />
// )

export const Alex = "1OvSZGipGhPrBkdwSGPnBWJAGsiDDbQb9";
export const Ann = "1q2P29hbN2N_oD3GVTogfuepRJ7PA511h";
export const Bryce = "1B3674Kbe6oVZTxSkLt39137IKYhkd_ox";
export const Daniel = "14jG1VTrgRlUzyiaK3Gk_CLNNCSZ-D4wJ";
export const Jacob = "1Hg1ZKtXstEBzRRCEWfJFeLU3JZJRHiFH";
export const Louise = "1x7QfsH2SrbUeuGBhcACPPoqwnU9GYcOX";
export const Pamela = "18i8ORbrf-_wLMLwdTxUr84XSfk9teQ_r";
export const Rodney = "1Ub6j_VhAebsvj505NwaBTdEuLtL8kLea";
export const Sarah = "1daAV62hHJLxFpftH8reiTkAm6z1bcKVL";
export const Spandan = "1WocZv5X9yveJ86NBJXBBjfFpkBMP7JFO";
export const Stivali = "1CbKi90FjruJhUAJ6NBnkRvlfRbYueDfk";
export const Trystan = "1_SwFdrr3LpCQ6L3fQEw42Q1CTI0QNtLS";
export const Zoey = "18oY3r8VMUGck1xbhfejyCA5F9jS5dDNY";

export const TeamPicture = "1hd4URizMI_YqLr5qebjtI_q9_mIAM-UM";

export const TeamMemberImage = ({classname, name}) => (
 <img className={classname} src={"https://drive.google.com/uc?export=view&id="+name}/>
)


export const GoCD = "https://miro.medium.com/max/480/0*M85246Uu7jE4CNp1.png";
export const ShowcaseIcon ="https://static.thenounproject.com/png/168681-200.png";
export const PO = "https://www.doitrecruitment.ro/wp-content/uploads/2018/05/product-owner.png";
export const Monitor = "https://cdn4.iconfinder.com/data/icons/48-bubbles/48/29.Mac-512.png";
export const Food = "http://cdn.onlinewebfonts.com/svg/img_174839.png";
export const Peacock = "https://img.pngio.com/peacock-acrylic-mirror-and-vinyl-decal-dezign-with-a-z-black-and-white-peacock-png-265_265.png";
export const Discussion = "https://pngimage.net/wp-content/uploads/2018/05/discussion-vector-png.png";
export const Development = "https://kr.seaicons.com/wp-content/uploads/2015/11/Transport-Under-Computer-icon.png";
export const Game = "https://vignette.wikia.nocookie.net/rhythmheaven/images/d/d0/Mr._G_%26_W_SSB4.png/revision/latest?cb=20150801074423";

const TeamPictureUrl = "https://tinyurl.com/no-brakezzz-team-picture";
const TeamBowling = "https://tinyurl.com/no-brakezzz-bowling";
const BusTakeover = "https://tinyurl.com/no-brakezzz-bus-takeover";
const BusTakeover2 = "https://tinyurl.com/no-brakezzz-bus-takeover2";
const TeamDinner = "https://tinyurl.com/no-brakezzz-team-dinner";
const Lonavala = "https://tinyurl.com/no-brakezzz-lonavala";
const TeamUploadImage = "https://tinyurl.com/no-brakezzz-how-many-dev";
const TeamTattoo = "https://tinyurl.com/no-brakezzz-tattoo";
const Holi = "https://tinyurl.com/no-brakezzz-holi";

const NoBrakezzzChant = "https://drive.google.com/uc?export=view&id=1LK_AJE0OPGj1SCv1AowBLqV_70YTDKSt";

const ProfileBoard = "https://tinyurl.com/no-brakezzz-profile-board";
const UserJourneyBoard = "https://tinyurl.com/no-brakezzz-user-journey";
const PrioritizationBoard = "https://tinyurl.com/no-brakezzz-prioritization-boa";
const ClientCommBoard = "https://tinyurl.com/no-brakezzz-client-comm";
const TechDebtWall = "https://tinyurl.com/no-brakezzz-tech-debt";
const IterationWall = "https://tinyurl.com/no-brakezzz-iteration-wall";
const KanbanBoard = "https://tinyurl.com/no-brakezzz-kanban-board";
const SecurityThreatWall = "https://tinyurl.com/no-brakezzz-security-threats";
const InformativeWall = "https://tinyurl.com/no-brakezzz-informative-wall";
const BugWall = "https://tinyurl.com/no-brakezzz-bug-wall";
const PairingMatrix = "https://tinyurl.com/no-brakezzz-pairing-matrix";

export const ImageWithClass = ({classname, url}) => (
    <img className={classname} src={url} />
)

ImageWithClass.propTypes = {
    classname: PropTypes.string,
    url: PropTypes.string,
}

TeamMemberImage.propTypes = {
    classname: PropTypes.string,
    name: PropTypes.string,
}

export const GalleryInformationRadiators = () => (
    <div>
        <GalleryItem name={ProfileBoard} desc="Profile Board" />
        <GalleryItem name={UserJourneyBoard} desc="User Journey Board" />
        <GalleryItem name={PrioritizationBoard} desc="Prioritization Board" />
        <GalleryItem name={ClientCommBoard} desc="Client Communication Board" />
        <GalleryItem name={TechDebtWall} desc="Tech Debt Wall" />
        <GalleryItem name={IterationWall} desc="Iteration Wall" />
        <GalleryItem name={KanbanBoard} desc="Kanban Board" />
        <GalleryItem name={SecurityThreatWall} desc="Security Threats" />
        <GalleryItem name={InformativeWall} desc="Informative Wall" />
        <GalleryItem name={BugWall} desc="Bug Wall" />
        <GalleryItem name={PairingMatrix} desc="Pairing Matrix" />
    </div>
)

export const GalleryNoBrakezzz = () => (
    <div>
        <GalleryItem name={TeamPictureUrl} desc="Final Showcase" />
        <GalleryItem name={TeamDinner} desc="Team Outing: Dinner" />
        <GalleryItem name={BusTakeover} desc="Taking over a bus" />
        <GalleryItem name={BusTakeover2} desc="Taking over a bus, again." />
        <GalleryItem name={Lonavala} desc="Weekend trip at Lonavala" />
        <GalleryItem name={TeamUploadImage} desc="How many devs do we need to upload an image?" />
        <GalleryItem name={TeamTattoo} desc="#TeamTattoo" />
        <GalleryItem name={Holi} desc="Holi + last day in office" />
        <GalleryItem name={TeamBowling} desc="Team Bowling" />
    </div>
)

const GalleryItem = ({name, desc}) => (

    <div className="gallery-item">
        <ImageWithClass url={name} />
        <h6>{desc}</h6>
    </div>

)

GalleryItem.propTypes = {
    name: PropTypes.string,
    desc: PropTypes.string,
}

export const GalleryChant = () => (
    <GalleryItemVideo name={NoBrakezzzChant} desc="No Brakezzz chant"/>
)

const GalleryItemVideo = ({name, desc}) => (

    <div className="gallery-item with-video">
        <video width="400" controls>
            <source src={name} type="video/mp4"/>
        </video>
        <h6>{desc}</h6>
    </div>

)

GalleryItemVideo.propTypes = {
    name: PropTypes.string,
    desc: PropTypes.string,
}
