import Intro from '@/components/Intro'
import About from '@/components/About'
import Skills from '@/components/Skills'
// import Contact from '@/components/Contact'
import Contact from '@/components/Contact2'
import Conveyer from '@/components/Conveyer'
// import Experience from '@/components/Experience'
// import Achievements from '@/components/Achievements'

export default function Home() {
  return (
    <div className="min-w-[100vw]">
      <Intro />
      <About />
      <Skills />
      {/* <Achievements /> */}
      {/* <Experience /> */}
      <Conveyer />
      <Contact />
    </div>
  )
}
