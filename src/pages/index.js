import React from "react"
import HomeLayout from "../components/home-layout"
import { about, design, code, teach, container, header } from "./home-css-modules.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default function Home({ data }) {
  return (
    <HomeLayout>
      <div className={container}>
        <h1 className={header}>
            Hi, I'm
            <AniLink paintDrip to="/about/" className={about} hex="#4ecdc4"> Julie Jarzemsky</AniLink>.<br/> 
            I <AniLink paintDrip to="/design/" className={design} hex="#4E57CD">design</AniLink>,
            <AniLink paintDrip to="/code/" className={code} hex="#ff6b6b"> code</AniLink>, and 
            <AniLink paintDrip to="/teach/" className={teach} hex="#ffe66d"> teach</AniLink>.
        </h1>
      </div>
    </HomeLayout>
  )
}