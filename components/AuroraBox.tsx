import React from "react"
import styles from '../styles/styles.module.css'

type auroraBoxProps = {
    children: React.ReactNode
}
const AuroraBox = ({children} :  auroraBoxProps) => {
    return <div className={styles.outerDiv}>
        <section className={styles.section1}></section>
        <section className={styles.section2}></section>
        <section className={styles.section3}></section>
        <section className={styles.section4}></section>
        {children}</div>
}

export default AuroraBox