import * as React from "react"
/*  GatsbyImage is used when the image is passed into the 
component as a prop, or otherwise changes.
The getImage() helper takes a File and returns file.childImageSharp.gatsbyImageData, 
which can be passed to the GatsbyImage component.  */
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Bio = ({ author }) => {
  let featuredImg = getImage(author.picture?.childImageSharp?.gatsbyImageData)

  return (
     <div className="bio">
       <GatsbyImage
         className="bio-avatar"
         layout="fixed"
         formats={["auto", "webp", "avif"]}
         image={featuredImg}
         width={50}
         height={50}
         quality={95}
         alt="Profile picture"
       />
       {author?.name && (
         <p>
           <strong>{author.name}</strong> {author?.bio || null}
         </p>
       )}
     </div>
   )
 }
 
 export default Bio
 