import React from "react"
import styles from '../styles/intro.module.css'
import ScrollIcon from "./ScrollIcon"
import { globals } from "@/utils/data/strings"

const Intro = () => {
    return <section id="intro" className='min-h-[100vh] lg:min-h-[80vh] w-full px-10 xl:px-16 flex flex-col items-center justify-center gap-2'>
        <div className={styles.Intro__Title} data-aos='zoom-in-up' data-aos-delay='50'>
            {globals.developerName}
        </div>
        <div className={styles.Intro__Subtitle} data-aos='zoom-in-up' data-aos-delay='100'>
            {globals.jobTitles}
        </div>
        <div className='relative z-40'>
            <ScrollIcon />
        </div>
    </section>
}

export default Intro