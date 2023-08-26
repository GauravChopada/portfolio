import Image from 'next/image';
import gauravChopadaImage from '../utils/images/Gaurav Chopda.jpg'
import locationSVG from '../utils/svgs/location.svg'
import studySVG from '../utils/svgs/study.svg'
import jobSVG from '../utils/svgs/job.svg'

const About = () => {
    return <div className="h-screen w-screen px-16 flex flex-row items-center justify-center gap-40">
        <div className='w-1/3'>
            <Image src={gauravChopadaImage} alt='Gaurav Chopda'/>
        </div>
        <div className='flex flex-col items-start justify-center gap-5 w-2/3'>
            <div className='text-5xl font-black'>
                Namaste 🙏🏻
            </div>
            <div className='text-6xl font-extralight'>
                MySelf Gaurav Chopda
            </div>
            <div className='flex flex-row gap-8'>
                <div className='flex flex-row gap-3'>
                    <Image src={locationSVG} alt='location'/>
                    From Surat, India
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
    </div>
}

export default About