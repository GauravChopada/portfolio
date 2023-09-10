import React from "react"
import styles from '../styles/intro.module.css'
import ScrollIcon from "./ScrollIcon"

const Intro = () => {
    return <section id="intro" className='min-h-[80vh] px-16 flex flex-col items-center justify-center gap-2'>
        <div className={styles.Intro__Title}>
            Gaurav Chopda
        </div>
        <div className={styles.Intro__Subtitle}>
            Full Stack Developer   |   AWS Solution Architect   |   Mobile App Developer
        </div>
        <div className=''>
            <ScrollIcon />
        </div>
    </section>
}

export default Intro