import React from "react"
import styles from '../styles/styles.module.css'

const AuroraBox = () => {
    return <div className="absolute flex flex-col min-h-[133vh] lg:min-h-[80vh] min-w-[100vw] items-center justify-center bg-black transition-bg z-10">
        <div className={styles.jumbo}></div>
    </div>
}

export default AuroraBox