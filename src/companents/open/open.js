import React from 'react'
import "./open.css"
const Open = ({open}) => {
  return (
    <div className={open? "open show" : "open"}></div>
  )
}

export default Open