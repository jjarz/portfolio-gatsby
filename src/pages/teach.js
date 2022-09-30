import React from "react";
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby"
import {ybLogo, description, chicktechDescription} from "./teach-css-modules.module.css"

export default function Teach({ data }) {
    return (
        <Layout pageHeader="Teaching">
            <div>
                <a href="https://www.colorado.edu/cs/" target="_blank" rel="noreferrer">
                    <GatsbyImage image={data.cuLogo.childImageSharp.gatsbyImageData} className={ybLogo} />
                </a>

                <div className={description}>
                    I am a Teaching Assistant in the department of Computer Science and University of Colorado Boulder.
                    <br/>
                    <br/>
                    I have TA'd for CSCI-3002: Fundamentals of Human-Computer Interaction and CSCI-1200: Introduction for Computational Thinking.
                    <br/>
                    <br/>
                    Teaching is a craft that I iterate on, driven by specific goals and an evolving philosophy. My overarching goal is to spark intrinsic motivation and curiosity in my students. 
                    I use hands-on projects and real-world examples in my teaching and involve students in curriculum development to create engaging course content.
                    Read more on my teaching philosophy <a href="https://drive.google.com/file/d/111XNDfFfckq4tIgdsQFFdE0uLZSXS3zf/view?usp=sharing" target="_blank" rel="noreferrer">here</a>.
                </div>
            </div>

            <div>
                <a href="https://www.americanyouthworks.org" target="_blank" rel="noreferrer">
                    <GatsbyImage image={data.ybLogo.childImageSharp.gatsbyImageData} className={ybLogo} />
                </a>

                <div className={description}>
                    I have been teaching IT and media job skills at American YouthWorks' YouthBuild program since 2018.
                    IT includes computer refurbishing, building computers, coding with JavaScript and basic computer
                    science.  I also teach graphic design using Adobe Illustrator and the design thinking process.
                </div>
            </div>

            <div>
                <a href="https://austin.chicktech.org/" target="_blank" rel="noreferrer">
                    <GatsbyImage
                        image={data.chickTechLogo.childImageSharp.gatsbyImageData}
                        className={ybLogo} />
                </a>

                <div className={chicktechDescription}>
                    I have also volunteered a workshop instructor for ChickTech Austin's Advancing Careers in Technology for Women
                    conference.  I taught a crash course on React.  
                    See the code we went over <a href="https://github.com/jjarz/grow-plant" target="_blank" rel="noreferrer">here</a>.
                </div>
            </div>
        </Layout>
    );
}

export const query = graphql`{
  ybLogo: file(relativePath: {eq: "teach/mc-round-red-line.png"}) {
    childImageSharp {
      gatsbyImageData(width: 150, height: 150, quality: 100, layout: FIXED)
    }
  }
  chickTechLogo: file(relativePath: {eq: "teach/ChickTech.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 150, height: 150, quality: 90, layout: FIXED)
    }
  }
  cuLogo: file(relativePath: {eq: "teach/cu_logo.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 150)
    }
  }
}
`