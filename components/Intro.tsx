import React from "react"
import styles from '../styles/intro.module.css'
import ScrollIcon from "./ScrollIcon"
import { globals } from "@/utils/data/strings"
// import AuroraBox from "./AuroraBox"

const Intro = () => {
    return <section id="intro" className='min-h-[133vh] lg:min-h-[80vh] w-full px-10 xl:px-16 flex flex-col items-center justify-center gap-2'>
        {/* <AuroraBox /> */}
        <div className={styles.Intro__Title}>
            {globals.developerName}
        </div>
        <div className={styles.Intro__Subtitle}>
            {globals.jobTitles}
        </div>
        <div className='relative z-50'>
            <ScrollIcon />
        </div>
    </section>
}

export default Intro