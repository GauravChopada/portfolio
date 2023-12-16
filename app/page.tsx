import Intro from '@/components/Intro'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Projects from '@/components/Projects'
// import Achievements from '@/components/Achievements'

export default function Home() {
  return (
    <div className="min-w-[133vw] xl:min-w-0">
      <Intro />
      <About />
      <Skills />
      {/* <Achievements /> */}
      {/* <Projects /> */}
      <Contact />
    </div>

    // <AuroraBox >
    // <h1>
    // GROOT
    // </h1>
    // </AuroraBox>
  )
}
