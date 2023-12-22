import React from "react"
import { allSkills } from "@/utils/data/strings"
import styles from "@/styles/styles.module.css"

const Conveyer = () => {
  const conveyerString = allSkills.join(' • ')
  return <section id="conveyer" className='w-full bg-[#2c2c2c] py-5 mt-16 overflow-x-hidden'>
    <div className={styles.conveyer_container}>
      <p className={styles.conveyer_item} data-aos='fade' data-aos-delay='100'>{conveyerString}</p>
    </div>
  </section>
}

export default Conveyer