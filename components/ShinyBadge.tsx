import React from "react"
import PropTypes from 'prop-types'
import styles from '../styles/styles.module.css'

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

type Props = {
  children: JSX.Element | JSX.Element[],
  className: string
}

const ShinyBadge = ({ children, className }) => {
  return <div className={`relative ${className}`}>
    {/* <div className={styles.container}> */}
    <div className="absolute top-1/2 left-1/2 h-28 w-28 transform -translate-x-1/2 -translate-y-1/2">
      <div className={styles.shine_badge}>
        {children}
      </div>
    </div>
    {/* </div> */}
  </div>
}

ShinyBadge.propTypes = propTypes

export default ShinyBadge