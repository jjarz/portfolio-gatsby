import React from "react"
import HomeLayout from "../components/home-layout"
import styles from "./home-css-modules.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default function Home({ data }) {
  return (
    <HomeLayout>
      <div className={styles.container}>
        <h1 className={styles.header}>
            Hi, I'm
            <AniLink paintDrip to="/about/" className={styles.about} hex="#4ecdc4"> Julie Jarzemsky</AniLink>.<br/> 
            I <AniLink paintDrip to="/design/" className={styles.design} hex="#4E57CD">design</AniLink>,
            <AniLink paintDrip to="/code/" className={styles.code} hex="#ff6b6b"> code</AniLink>, and 
            <AniLink paintDrip to="/teach/" className={styles.teach} hex="#ffe66d"> teach</AniLink>.
        </h1>
      </div>
    </HomeLayout>
  )
}