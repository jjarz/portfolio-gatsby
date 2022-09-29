
import React from "react"
import {container} from './container.module.css'

export default function HomeLayout({ children }) {
  return (
    <div className={container}>
      {children}
    </div>
  )
}