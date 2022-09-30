import React from "react"
import {li, links, container, header, ul, contact, pageHeader} from './container.module.css'
import { Link } from 'gatsby'
import svgLogo from "../data/logo.svg"
import * as typeformEmbed from "@typeform/embed"
import '@typeform/embed/build/css/slider.css'
import SEO from "../components/seo"

const ListLink = props => (
  <li className={li}>
    <Link to={props.to} className={links}>{props.children}</Link>
  </li>
)

class Layout extends React.Component {

  // set up typeform
  componentDidMount() {
    const slider = typeformEmbed.createSlider(
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
        slider.toggle();
      })
  }

  render() {
    const children = this.props.children;

    return (
      <div className={container}>
        <SEO title="Julie Jarzemsky" description="designer, coder, teacher" />

        <header className={header}>
          <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <img src={svgLogo} style={{ display: `inline-block`, width: `50px`, margin: `0px`}} alt="logo"/>
          </Link>
          <ul className={ul}>
            <ListLink to="/design/">design</ListLink>
            <ListLink to="/code/">code</ListLink>
            <ListLink to="/teach/">teach</ListLink>
            <ListLink to="/cv/">CV</ListLink>
            <ListLink to="/about/">about</ListLink>
            <button id="bt-popup" className={contact}>contact</button>
          </ul>
        </header>

        <h1 className={pageHeader}>{this.props.pageHeader}</h1>
        
        {children}

      </div>
    )
  }
}

export default Layout;
