import React from "react"
import styles from './container.module.css'
import { Link } from 'gatsby'
import svgLogo from "../data/logo.svg"
import * as typeformEmbed from "@typeform/embed"

const ListLink = props => (
  <li className={styles.li}>
    <Link to={props.to} className={styles.links}>{props.children}</Link>
  </li>
)

class Layout extends React.Component {

  // set up typeform
  componentDidMount() {
    const popup = typeformEmbed.makePopup(
      'https://form.typeform.com/to/QHc7YiZ8',
      {
        mode: 'drawer_right',
        hideHeaders: true,
        hideFooter: true,
        autoClose: true
      }
    )
    document.getElementById('bt-popup')
      .addEventListener('click', function() {
        popup.open();
      })
  }

  render() {
    const children = this.props.children;

    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <img src={svgLogo} style={{ display: `inline-block`, width: `50px`, margin: `0px`}} alt="logo"/>
          </Link>
          <ul className={styles.ul}>
            <ListLink to="/design/">design</ListLink>
            <ListLink to="/code/">code</ListLink>
            <ListLink to="/teach/">teach</ListLink>
            <ListLink to="/about/">about</ListLink>
            <button id="bt-popup" className={styles.contact}>contact</button>
          </ul>
        </header>

        <h1 className={styles.pageHeader}>{this.props.pageHeader}</h1>
        
        {children}

      </div>
    )
  }
}

export default Layout;
