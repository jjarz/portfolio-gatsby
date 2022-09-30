import React from "react";
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import {about, image} from "./about-css-modules.module.css"

export default function About({ data }) {
    return (
        <Layout pageHeader="Hi, I'm Julie">
            <div>
                <GatsbyImage className={image} image={data.file.childImageSharp.gatsbyImageData} />
                <div className={about}>
                    I’m a designer, coder, and teacher living in Boulder, Colorado. <br/><br/>
                    I am currently a Master's student at University of Colorado Boulder. I TA for undergraduate Computer Science courses
                    and do research creating and evaluating ethics-based CS curriculum in the <a href="https://www.internetruleslab.com">Internet Rules Lab</a>.<br/><br/>
                    I love creative problem-solving, which led me to earn a Bachelor's in Computer Science at 
                    University of Wisconsin-Madison and work as a software engineer for four years. 
                    I taught IT and media at a pre-apprenticeship program for 16-24 year-olds at American YouthWorks
                    while moonlighting as a product manager and designer.  
                    <br/><br/>
                    See more about my background on my <a href="/cv" rel="noreferrer">CV</a>.
                    <br/><br/>
                    I also love doing linoleum block printing and graphic design outside of work.
                    <h3>
                        Connect with me!
                    </h3>
                    <div>
                        <a href="mailto:jjarzem@gmail.com">Email me</a>
                    </div>
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
                gatsbyImageData(layout: FIXED, width: 400)
            }
          }        
    }
`