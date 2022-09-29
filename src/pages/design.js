import React from "react";
import Layout from "../components/layout"
import { graphql } from "gatsby"
import {description, masonry, masonryItem} from "./design-css-modules.module.css"
import { GatsbyImage } from "gatsby-plugin-image";

export default function Design({ data }) {
    return (
        <Layout pageHeader="Design Work">
            <div className={description}>
                I have experience with graphic design, magazine layout, logo design, illustration and linoleum block printing.  
                <br/><br/>See some of my work below or view on my Instagram
                <a href="https://www.instagram.com/julesjarz/" target="_blank" rel="noreferrer"> @julesjarz</a>
            </div>
            <div className={masonry}>
                {data.allFile.edges.map(({ node }, index) => (
                    <div className={masonryItem}>
                        <GatsbyImage image={node.childImageSharp.gatsbyImageData} key={index} />
                    </div>
                ))}
            </div>
        </Layout>
    );
}

export const query = graphql`{
  allFile(
    filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq: "photos"}}
  ) {
    edges {
      node {
        childImageSharp {
          gatsbyImageData(
            width: 400
            quality: 100
            placeholder: BLURRED
            layout: CONSTRAINED
          )
        }
      }
    }
  }
}
`