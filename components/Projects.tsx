import Image from 'next/image';
import tlynt from '../utils/images/TLYNT.png';

const Projects = () => {
  return <>
    <section id='projects' className="w-full px-10 xl:px-16 pt-40 flex flex-col items-start justify-start">
      <div className="font-black mb-3 text-4xl text-zinc-200">Projects</div>
      <div className='flex flex-row mb-32'>
        <div className="text-xl font-light text-gray-500 mr-1">Below are some of my favourite projects I have worked on. Explore more projects on my </div>
        <a className='text-xl font-light text-gray-500 hover:text-teal-300 hover:underline' href="https://github.com/GauravChopada/portfolio" target="_blank">Github.</a>
      </div>
      <div className='py-10'>
        {/* First Project */}
        <div className='flex flex-row items-center mb-28'>
          {/* Image */}
          <div className='w-1/2'>
            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
              <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
                {/* <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png" className="dark:hidden h-[156px] md:h-[278px] w-full rounded-xl" alt="" /> */}
                <Image src={tlynt} className="hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg" alt="" />
              </div>
            </div>
            <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
            </div>
          </div>
          {/* Project Description */}
          <div className='w-1/2'>
            <div className='text-6xl font-black mb-3'>TLYNT</div>
            <div className='text-lg font-extralight mb-4 text-gray-400'>Wolfwin is a successful Open-Source project And Play Skill Based Games With full compliance to the laws and regulations, WolfWin operates legally, backed by expert opinions from top industry-leading lawyers.</div>
            <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none shadow-lg shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">CASE STUDY</button>
          </div>
        </div>
        {/* Second Project */}
        <div className='flex flex-row items-center mb-28'>
          {/* Project Description */}
          <div className='w-1/2 pl-28'>
            <div className='text-6xl font-black mb-3'>T.O.Y.R.</div>
            <div className='text-lg font-extralight mb-4 text-gray-400'>TOYR app is used to create personalized packages on users requirements. This app is aimed towards people who wants to go on trip but do not have proper direction or guidance. This app make user’s tour experience more easy and reliable. </div>
            <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none shadow-lg shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">CASE STUDY</button>
          </div>
          {/* Image */}
          <div className='w-1/2'>
            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
              <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
              <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                {/* <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png" className="dark:hidden w-[272px] h-[572px]" alt="" /> */}
                <img src='https://grootportfolio.s3.us-west-2.amazonaws.com/assets/TOYR.jpg' className="hidden dark:block w-[272px] h-[572px]" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* Third Project */}
        <div className='flex flex-row items-center mb-28'>
          {/* Image */}
          <div className='w-1/2'>
            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
              <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
                <Image fill src='https://grootportfolio.s3.us-west-2.amazonaws.com/assets/Red+Carpet.png' className="hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg" alt="" />
                {/* <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png" className="hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg" alt="" /> */}
              </div>
            </div>
            <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
            </div>
          </div>
          {/* Project Description */}
          <div className='w-1/2'>
            <div className='text-6xl font-black mb-3'>Red Carpet</div>
            <div className='text-lg font-extralight mb-4 text-gray-400'>Wolfwin is a successful Open-Source project And Play Skill Based Games With full compliance to the laws and regulations, WolfWin operates legally, backed by expert opinions from top industry-leading lawyers.</div>
            <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none shadow-lg shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">CASE STUDY</button>
          </div>
        </div>
      </div>
    </section>
  </>;
}

export default Projects