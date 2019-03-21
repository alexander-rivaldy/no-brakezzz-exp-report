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

export const TeamMember = ({name}) => (

    <div className="team-member">
        src/images/team/Alex+dev.jpg
      <img src={"team/" + name +".jpg"} />
    </div>

)

TeamMember.propTypes = {
  name: PropTypes.string,
}

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

export const TeamMemberImage = ({classname, name}) => (
 <img className={classname} src={"https://drive.google.com/uc?export=view&id="+name}/>
)


export const GoCD = "https://miro.medium.com/max/480/0*M85246Uu7jE4CNp1.png";

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

