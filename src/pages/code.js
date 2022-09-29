import React from "react";
import Layout from "../components/layout"
import triangles from "../data/code/demo.gif"
import {linkContainer, githubImage, linkTitle, description, link, triangles, trianglesDescription} from "./code-css-modules.module.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default function Code({ data }) {
    return (
        <Layout pageHeader="Code">
            <div className={linkContainer}>                
                <a href="https://github.com/jjarz" className={link} target="_blank" rel="noreferrer">
                    <Img className={githubImage} fixed={data.file.childImageSharp.fixed} />
                    <div className={linkTitle}>See my github page</div>
                </a>
            </div>

            <div className={description}>I learned how to code while studying computer science at University of Wisconsin-Madison.
                I continued learning as a software engineer at vacation rentals marketplace HomeAway and 
                a startup, data.world. Since then, I have enjoyed creating projects in my free time and as part of teaching
                classes at American YouthWorks and workshops.  
                See my <a href="https://github.com/jjarz" className={link} target="_blank" rel="noreferrer">github </a> 
                for some of my projects, including this
                website, built with Gatsby.
            </div>

            <img src={triangles} alt="code-demo" className={triangles}/>
            <div className={trianglesDescription}>Here is 
                <a href="https://jjarz.github.io/triangles/" target="_blank" rel="noreferrer"> one example project </a> 
                I created: a fortune-teller graphic made with Vanilla JavaScript, CSS, and HTML.
                See the code <a href="https://github.com/jjarz/triangles" target="_blank" rel="noreferrer">here</a>.
            </div>
        </Layout>
    )
}

export const query = graphql`
    query {
        file(relativePath: { eq: "code/github.png" }) {
            childImageSharp {
              fixed(width: 30, height: 30) {
                ...GatsbyImageSharpFixed
              }
            }
          }        
    }
`