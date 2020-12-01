import React from "react";
import Layout from "../components/layout"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import styles from "./teach-css-modules.module.css"

export default function Teach({ data }) {
    return (
        <Layout pageHeader="Teaching">
            <div>
                <a href="https://www.americanyouthworks.org" target="_blank" rel="noreferrer">
                    <Img className={styles.ybLogo} fixed={data.ybLogo.childImageSharp.fixed} />
                </a>

                <div className={styles.description}>
                    I have been teaching IT and media job skills at American YouthWorks' YouthBuild program since 2018.
                    IT includes computer refurbishing, building computers, coding with JavaScript and basic computer
                    science.  I also teach graphic design using Adobe Illustrator and the design thinking process.
                </div>
            </div>

            <div>
                <a href="https://austin.chicktech.org/" target="_blank" rel="noreferrer">
                    <Img className={styles.ybLogo} fixed={data.chickTechLogo.childImageSharp.fixed} />
                </a>

                <div className={styles.chicktechDescription}>
                    I have also volunteered a workshop instructor for ChickTech Austin's Advancing Careers in Technology for Women
                    conference.  I taught a crash course on React.  
                    See the code we went over <a href="https://github.com/jjarz/grow-plant" target="_blank" rel="noreferrer">here</a>.
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query {
        ybLogo: file(relativePath: { eq: "teach/mc-round-red-line.png" }) {
            childImageSharp {
              fixed(width: 150, height: 150, quality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
        },
        chickTechLogo: file(relativePath: { eq: "teach/ChickTech.jpg" }) {
            childImageSharp {
              fixed(width: 150, height: 150, quality: 90) {
                ...GatsbyImageSharpFixed
              }
            }
        }
    }
`