import React from "react";
import Layout from "../components/layout"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import {about, image} from "./about-css-modules.module.css"

export default function About({ data }) {
    return (
        <Layout pageHeader="Hi, I'm Julie">
            <div>
                <Img className={image} fixed={data.file.childImageSharp.fixed} />
                <div className={about}>
                    I’m a designer, coder, and teacher living in Austin, Texas. <br/><br/>
                    I love creative problem-solving, which led me to study computer science at 
                    University of Wisconsin-Madison and work as a software engineer for four years. 
                    Now I teach IT and media at a pre-apprenticeship program for low-income youth 
                    and moonlight as a product manager and designer.  
                    I also love doing linoleum block printing and graphic design outside of work.
                    <h3>
                        Connect with me!
                    </h3>
                    <div>
                        <a href="https://www.linkedin.com/in/julie-jarzemsky/" target="_blank" rel="noreferrer">LinkedIn</a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/julesjarz/" target="_blank" rel="noreferrer">Instagram @julesjarz</a>
                    </div>
                    <div>
                        <a href="https://github.com/jjarz" target="_blank" rel="noreferrer">Github @jjarz</a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query {
        file(relativePath: { eq: "about-me.jpg" }) {
            childImageSharp {
              fixed(width: 300, height: 300, quality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }        
    }
`