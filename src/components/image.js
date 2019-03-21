import React from "react"
import PropTypes from "prop-types";
import {StaticQuery, graphql} from "gatsby";
import Img from "gatsby-image";

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

 const TeamMember = ({name}) => (

    <div className="team-member">
        src/images/team/Alex+dev.jpg
      <img src={"team/" + name +".jpg"} />
    </div>

)

TeamMember.propTypes = {
  name: PropTypes.string,
}

export default TeamMember


 export const Alex = () => (
     <StaticQuery
         query={graphql`
          query {
            fileName: file(relativePath: { eq: "team/Alex.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
         render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} /> }
     />
 )