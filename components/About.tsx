import Image from 'next/image';
import locationSVG from '../utils/svgs/location.svg'
import NamasteImage from '../utils/images/Namste.png'
import studySVG from '../utils/svgs/study.svg'
import jobSVG from '../utils/svgs/job.svg'

const About = () => {
    return <section id="about" className="min-h-[133vh] lg:min-h-[100vh] w-full px-10 xl:px-16 flex flex-col items-center md:flex-row md:items-center justify-center gap-20 xl:gap-40">
        <div className='w-[80vw] min-w-[300px] max-w-[450px] md:w-1/3'>
            <img src={'https://grootportfolio.s3.us-west-2.amazonaws.com/assets/Gaurav+Chopda.jpg'} alt='Gaurav Chopda'/>
        </div>
        <div className='flex flex-col items-start justify-center gap-5 md:w-2/3'>
            <div className='text-3xl lg:text-5xl font-black flex flex-row items-center gap-4'>
                Namaste
                <Image className='h-7 w-7 lg:h-12 lg:w-12' src={NamasteImage} alt='greetings'/>
            </div>
            <div className='text-3xl lg:text-6xl font-extralight'>
                MySelf Gaurav Chopda
            </div>
            <div className='flex flex-col sm:flex-row gap-5 sm:gap-8'>
                <div className='flex flex-row gap-3 items-center'>
                    <Image src={locationSVG} alt='location'/>
                    <a target='_blank' className="hover:text-teal-300 hover:underline" href="https://www.google.com/maps/place/21%C2%B014'11.2%22N+72%C2%B054'36.0%22E/@21.2356,72.9083042,18.18z/data=!4m4!3m3!8m2!3d21.236446!4d72.909989?authuser=1&entry=ttu">Surat, India</a>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <Image src={studySVG} alt='location'/>
                    B.tech from D.D.U.
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <Image src={jobSVG} alt='location'/>
                    Software Engineer
                </div>
            </div>
            <div className='tracking-wide font-extralight'>
                I am a software developer with a passion for building cutting-edge and advanced applications. I have extensive knowledge in ReactJS, Flutter, and AWS Cloud. In addition to these, I am proficient in several other programming languages and technologies, and I possess excellent problem-solving skills. I thrive in a team environment and enjoy exploring new technologies on a daily basis.
            </div>
        </div>
    </section>
}

export default About