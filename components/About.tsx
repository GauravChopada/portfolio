import Image from 'next/image';
import locationSVG from '../utils/svgs/location.svg'
import NamasteImage from '../utils/images/Namste.png'
import studySVG from '../utils/svgs/study.svg'
import jobSVG from '../utils/svgs/job.svg'
import { aboutMe, globals } from '@/utils/data/strings';

const About = () => {
    return <section id="about" className="min-h-[133vh] lg:min-h-[100vh] w-full px-10 xl:px-16 flex flex-col items-center md:flex-row md:items-center justify-center gap-20 xl:gap-40">
        <div className='w-[80vw] min-w-[300px] max-w-[450px] md:w-1/3'>
            <img className='rounded-[30px] filter brightness-75' src={globals.photoLink} alt='Gaurav Chopda' />
        </div>
        <div className='flex flex-col items-start justify-center gap-5 md:w-2/3'>
            <div className='text-3xl lg:text-5xl font-black flex flex-row items-center gap-4'>
                Namaste
                <Image className='h-7 w-7 lg:h-12 lg:w-12' src={NamasteImage} alt='greetings' />
            </div>
            <div className='text-3xl lg:text-6xl font-extralight'>
                {`MySelf ${globals.developerName}`}
            </div>
            <div className='flex flex-col sm:flex-row gap-5 sm:gap-8'>
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
            <div className='tracking-wide font-extralight'>
                {aboutMe.aboutMe}
            </div>
            <a href={globals.resumeLink} target='_blank' className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none shadow-lg shadow-blue-800/80 font-medium rounded-lg text-xs lg:text-sm px-5 py-2.5 text-center mr-2 mb-2 ">RESUME</a>
        </div>
    </section>
}

export default About