import Image from 'next/image';
import locationSVG from '../utils/svgs/location.svg'
import NamasteImage from '../utils/images/Namste.png'
import studySVG from '../utils/svgs/study.svg'
import jobSVG from '../utils/svgs/job.svg'
import { aboutMe, globals } from '@/utils/data/strings';
import styles from '../styles/styles.module.css'

const About = () => {
    return <section id="about" className="min-h-[133vh] lg:min-h-[100vh] w-full p-5 border-8 border-black flex flex-col items-center lg:flex-row lg:items-center justify-center gap-20 xl:gap-40">
        <div className='w-[80vw] min-w-[300px] max-w-[450px] lg:w-1/3 xl:ml-16 z-40' data-aos="fade-up" data-aos-delay="200">
            <img className={styles.image_border} src={globals.photoLink} alt='Gaurav Chopda' />
        </div>
        <div className='flex flex-col items-start justify-center gap-5 lg:w-2/3'>
            <div className='text-3xl lg:text-5xl font-black flex flex-row items-center gap-4' data-aos="fade-up" data-aos-delay="100">
                Namaste
                <Image className='h-7 w-7 lg:h-12 lg:w-12' src={NamasteImage} alt='greetings' />
            </div>
            <div className='text-3xl lg:text-6xl font-extralight' data-aos="fade-up" data-aos-delay="200">
                {`MySelf ${globals.developerName}`}
            </div>
            <div className='flex flex-col sm:flex-row gap-5 sm:gap-8' data-aos="fade-up" data-aos-delay="300">
                <div className='flex flex-row gap-3 items-center'>
                    <Image src={locationSVG} alt='location' />
                    <a target='_blank' className="hover:text-teal-300 hover:underline" href={aboutMe.locationLink}>{aboutMe.location}</a>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <Image src={studySVG} alt='location' />
                    {aboutMe.education}
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <Image src={jobSVG} alt='location' />
                   {aboutMe.jobTitle}
                </div>
            </div>
            <div className='tracking-wide font-extralight' data-aos="fade-up" data-aos-delay="400">
                {aboutMe.aboutMe}
            </div>
        </div>
    </section>
}

export default About