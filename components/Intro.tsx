import React from "react"
import styles from '../styles/styles.module.css'

const Intro = () => {
    return <div className='h-screen w-screen px-16 flex flex-col items-start justify-center gap-2'>
            <div className="text-7xl font-thin ">
                Hi There 👋🏻
            </div>
            <div className="text-9xl font-bold">
                I am Gaurav Chopda
            </div>
            <div className="text-8xl font-semibold">
                Full Stack Developer
            </div>
            <div className="text-2xl font-extralight">
                this is a very long caption and it is going to explain above point.
            </div>
            <button className="border-2 rounded-xl border-white border-solid p-3 mt-3">
                CONTACT NOW
            </button>
        </div>
}

export default Intro