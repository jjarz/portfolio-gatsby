import React from "react";
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styles from "./design-css-modules.module.css"
import Img from "gatsby-image"

export default function Design({ data }) {
    return (
        <Layout pageHeader="Design Work">
            <div className={styles.description}>
                I have experience with graphic design, magazine layout, logo design, illustration and linoleum block printing.  
                <br/><br/>See some of my work below or view on my Instagram
                <a href="https://www.instagram.com/julesjarz/" target="_blank" rel="noreferrer"> @julesjarz</a>
            </div>
            <div className={styles.masonry}>
                {data.allFile.edges.map(({ node }, index) => (
                    <div className={styles.masonryItem}>
                        <Img key={index} fluid={node.childImageSharp.fluid} />
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export const query = graphql`{
    allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq: "photos"}}) {
        edges {
            node {
            childImageSharp {
                fluid(maxWidth: 400, quality: 100) {
                originalName
                ...GatsbyImageSharpFluid
                }
            }
            }
        }
    }
  }
`