import React from "react";
import Layout from "../components/layout"
import {linkContainer, githubImage, linkTitle, description, link } from "./code-css-modules.module.css"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

export default function Code({ data }) {
    return (
        <Layout pageHeader="Code">
            <div className={linkContainer}>                
                <a href="https://github.com/jjarz" className={link} target="_blank" rel="noreferrer">
                    <GatsbyImage image={data.githubLogo.childImageSharp.gatsbyImageData} className={githubImage} />
                    <div className={linkTitle}>See my github page</div>
                </a>
            </div>

            <div className={description}>See my <a href="https://github.com/jjarz" className={link} target="_blank" rel="noreferrer">github </a> 
                for some of my projects, including this website, built with Gatsby.
                <br/>
                <br/>
                As a Master's student at CU Boulder, I have worked on coding projects like creating 
                my own NFT web app using <a href="https://ethereumboilerplate.com/" target="_blank" rel="noreferrer">ethereum-boilerplate</a> for a blockchain technologies course, and programming a Java 
                application using object-oriented design patterns.
                <br/>
                <br/>
                I learned how to code while studying computer science at University of Wisconsin-Madison.
                I continued learning as a software engineer at vacation rentals marketplace HomeAway and 
                a startup, data.world. Since then, I have enjoyed creating projects in my free time and as part of teaching
                classes at American YouthWorks and workshops.  
            </div>
        </Layout>
    );
}

export const query = graphql`{
  githubLogo: file(relativePath: {eq: "code/github.png"}) {
    childImageSharp {
      gatsbyImageData(width: 30, height: 30, layout: FIXED)
    }
  }
}
`