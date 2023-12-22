import Image from 'next/image';
import tlynt from '../utils/images/TLYNT.png';
import { projectsDetails } from '@/utils/data/strings';

const Experience = () => {
  return <>
    <section id='experience' className="w-full mt-10 p-5 border-8 border-black flex flex-col items-start justify-start">
      <div className="font-black mb-3 text-4xl text-zinc-200">Experience</div>
      <div className='flex flex-row mb-12 sm:mb-32'>
        <div className="text-md sm:text-xl font-light text-gray-500 mr-1">Below are some of my favourite projects I have worked on. Explore more projects on my <a className='hover:text-teal-300 hover:underline' href="https://github.com/GauravChopada/portfolio" target="_blank">Github.</a> </div>
      </div>
      <div className='pt-10'>
        {/* First Project */}
        <div className='flex flex-col gap-8 sm:gap-0 sm:flex-row items-center mb-28'>
          {/* Image */}
          <div className='w-full sm:w-1/2'>
            <div className="relative mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] lg:h-[294px] lg:max-w-[512px]">
              <div className="rounded-lg overflow-hidden h-[156px] lg:h-[278px] bg-white dark:bg-gray-800">
                <Image fill src={projectsDetails.mainProjects.tlynt.image} className="h-[156px] lg:h-[278px] w-full rounded-lg" alt="" />
              </div>
            </div>
            <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] lg:h-[21px] lg:max-w-[597px]">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] lg:w-[96px] lg:h-[8px] bg-gray-800"></div>
            </div>
          </div>

          {/* Project Description */}
          <div className='w-full sm:w-1/2'>
            <div className='text-3xl lg:text-6xl font-black mb-3'>{projectsDetails.mainProjects.tlynt.title}</div>
            <div className='flex flex-row gap-2 mb-2'>
              {
                projectsDetails.mainProjects.tlynt.techstack.map((tech) => (
                  <div key={tech} className='whitespace-nowrap rounded-md bg-body text-xs text-primary p-2 border border-gray-500/60 text-gray-500'>{tech}</div>
                ))
              }
            </div>
            <div className='text-md lg:text-lg font-extralight mb-4 text-gray-400'>{projectsDetails.mainProjects.tlynt.description}</div>
            <a href={projectsDetails.mainProjects.tlynt.link} target='_blank' className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none shadow-lg shadow-blue-800/80 font-medium rounded-lg text-xs lg:text-sm px-5 py-2.5 text-center mr-2 mb-2 ">CASE STUDY</a>
          </div>
        </div>
        {/* Second Project */}
        <div className='flex flex-col-reverse gap-8 sm:gap-0 sm:flex-row items-center mb-28'>
          {/* Project Description */}
          <div className='w-full sm:w-1/2 sm:pl-14 md:pl-28'>
            <div className='text-3xl lg:text-6xl font-black mb-3'>{projectsDetails.mainProjects.toyr.title}</div>
            <div className='flex flex-row gap-2 mb-2'>
              {
                projectsDetails.mainProjects.toyr.techstack.map((tech) => (
                  <div key={tech} className='whitespace-nowrap rounded-md bg-body text-xs text-primary p-2 border border-gray-500/60 text-gray-500'>{tech}</div>
                ))
              }
            </div>
            <div className='text-md lg:text-lg font-extralight mb-4 text-gray-400'>{projectsDetails.mainProjects.toyr.description}</div>
            <a href={projectsDetails.mainProjects.toyr.link} target='_blank' className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none shadow-lg shadow-blue-800/80 font-medium rounded-lg text-xs lg:text-sm px-5 py-2.5 text-center mr-2 mb-2 ">CASE STUDY</a>
          </div>
          {/* Image */}
          <div className='w-full sm:w-1/2'>
            <div className="relative mx-auto border-gray-800 bg-gray-800 border-[10px] lg:border-[14px] rounded-[2.5rem] h-[450px] w-[250px] lg:h-[600px] lg:w-[300px] shadow-xl">
              <div className="h-[30px] top-[95px] lg:h-[46px] w-[3px] bg-gray-800 absolute -left-[13px] lg:-left-[17px] lg:top-[124px] rounded-l-lg"></div>
              <div className="h-[30px] lg:h-[46px] w-[3px] bg-gray-800 absolute -left-[13px] lg:-left-[17px] top-[130px] lg:top-[178px] rounded-l-lg"></div>
              <div className="h-[45px] lg:h-[64px] w-[3px] bg-gray-800 absolute -right-[13px] lg:-right-[17px] top-[95px] lg:top-[142px] rounded-r-lg"></div>
              <div className="rounded-[2rem] overflow-hidden h-[430px] w-[230px] lg:w-[272px] lg:h-[572px] bg-white dark:bg-gray-800">
                <img src={projectsDetails.mainProjects.toyr.image} className="h-[430px] w-[230px] lg:w-[272px] lg:h-[572px]" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* Third Project */}
        <div className='flex flex-col gap-8 sm:gap-0 sm:flex-row items-center sm:mb-28'>
          {/* Image */}
          <div className='w-full sm:w-1/2'>
            <div className="relative mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] lg:h-[294px] lg:max-w-[512px]">
              <div className="rounded-lg overflow-hidden h-[156px] lg:h-[278px] bg-white dark:bg-gray-800">
                <Image fill src={projectsDetails.mainProjects.redCarpet.image} className="h-[156px] lg:h-[278px] w-full rounded-lg" alt="" />
              </div>
            </div>
            <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] lg:h-[21px] lg:max-w-[597px]">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] lg:w-[96px] lg:h-[8px] bg-gray-800"></div>
            </div>
          </div>
          {/* Project Description */}
          <div className='w-full sm:w-1/2'>
            <div className='text-3xl lg:text-6xl font-black mb-3'>{projectsDetails.mainProjects.redCarpet.title}</div>
            <div className='flex flex-row gap-2 mb-2'>
              {
                projectsDetails.mainProjects.redCarpet.techstack.map((tech) => (
                  <div key={tech} className='whitespace-nowrap rounded-md bg-body text-xs text-primary p-2 border border-gray-500/60 text-gray-500'>{tech}</div>
                ))
              }
            </div>
            <div className='text-md lg:text-lg font-extralight mb-4 text-gray-400'>{projectsDetails.mainProjects.redCarpet.description}</div>
            <a href={projectsDetails.mainProjects.redCarpet.link} target='_blank' className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none shadow-lg shadow-blue-800/80 font-medium rounded-lg text-xs lg:text-sm px-5 py-2.5 text-center mr-2 mb-2 ">CASE STUDY</a>
          </div>
        </div>
      </div>

      {/* More Projects Section */}
      <div className="font-black mb-3 text-3xl pt-20 sm:pt-0 text-gray-400">More Projects</div>
      <div className='flex flex-row gap-3 w-full py-10 flex-wrap overflow-y-visible'>
        {
          projectsDetails.moreProject.map((project) => (
            <a key={project.title} target='_blank' href={project.link} className="p-5 border-[1px] flex flex-row cursor-pointer gap-3 justify-center items-center border-slate-800 border-solid rounded-xl bg-gray-950 hover:scale-110 duration-300">
              <div className='text-6xl text-transparent font-black bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 '>{"</>"}</div>
              <div className='whitespace-nowrap'>
                <div className='text-lg font-semibold'>{project.title}</div>
                <div className='text-sm text-gray-600 font-light'>{project.techstack}</div>
              </div>
            </a>
          ))
        }
      </div>
    </section>
  </>;
}

export default Experience