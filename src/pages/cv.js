import React from "react";
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby"

export default function CV({data}) {
    return (
      <Layout>
        <div>
          <a href="https://drive.google.com/file/d/1FhZ88PNPMoLsjl-GGQGltgKsf728bc0t/view?usp=sharing" rel="noreferrer">Download a PDF copy</a>
          <GatsbyImage image={data.cv1.childImageSharp.gatsbyImageData}/>
          <GatsbyImage image={data.cv2.childImageSharp.gatsbyImageData}/>
          <GatsbyImage image={data.cv3.childImageSharp.gatsbyImageData}/>
          <GatsbyImage image={data.cv4.childImageSharp.gatsbyImageData}/>
        </div>
      </Layout>
    );
}

export const query = graphql`{
  cv1: file(relativePath: {eq: "cv/cv_image_Page_1.jpg"}) {
    childImageSharp {
      gatsbyImageData
    }
  }
  cv2: file(relativePath: {eq: "cv/cv_image_Page_2.jpg"}) {
    childImageSharp {
      gatsbyImageData
    }
  }
  cv3: file(relativePath: {eq: "cv/cv_image_Page_3.jpg"}) {
    childImageSharp {
      gatsbyImageData
    }
  }
  cv4: file(relativePath: {eq: "cv/cv_image_Page_4.jpg"}) {
    childImageSharp {
      gatsbyImageData
    }
  }
}
`