import Image from 'next/image';
import gauravChopadaImage from '../utils/images/Gaurav Chopda.jpg'
import locationSVG from '../utils/svgs/location.svg'
import NamasteImage from '../utils/images/Namste.png'
import studySVG from '../utils/svgs/study.svg'
import jobSVG from '../utils/svgs/job.svg'

const About = () => {
    return <section id="about" className="min-h-screen w-screen px-16 flex flex-row items-center justify-center gap-40">
        <div className='w-1/3'>
            <Image src={gauravChopadaImage} alt='Gaurav Chopda'/>
        </div>
        <div className='flex flex-col items-start justify-center gap-5 w-2/3'>
            <div className='text-5xl font-black flex flex-row items-center gap-4'>
                Namaste
                <Image className='h-12 w-12' src={NamasteImage} alt='greetings'/>
            </div>
            <div className='text-6xl font-extralight'>
                MySelf Gaurav Chopda
            </div>
            <div className='flex flex-row gap-8'>
                <div className='flex flex-row gap-3'>
                    <Image src={locationSVG} alt='location'/>
                    <a target='_blank' className="hover:text-teal-300 hover:underline" href="https://www.google.com/maps/place/21%C2%B014'11.2%22N+72%C2%B054'36.0%22E/@21.2356,72.9083042,18.18z/data=!4m4!3m3!8m2!3d21.236446!4d72.909989?authuser=1&entry=ttu">From Surat, India</a>
                </div>
                <div className='flex flex-row gap-3'>
                    <Image src={studySVG} alt='location'/>
                    B.tech from D.D.U.
                </div>
                <div className='flex flex-row gap-3'>
                    <Image src={jobSVG} alt='location'/>
                    Full Stack Developer
                </div>
            </div>
            <div className='tracking-wide font-extralight'>
                I am a software developer with a passion for building cutting-edge and advanced applications. I have extensive knowledge in ReactJS, Flutter, and AWS Cloud. In addition to these, I am proficient in several other programming languages and technologies, and I possess excellent problem-solving skills. I thrive in a team environment and enjoy exploring new technologies on a daily basis.
            </div>
        </div>
    </section>
}

export default About