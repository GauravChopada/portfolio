import Image from 'next/image';
import laptop from '../utils/images/Dummy.jpg';

const Projects = () => {
    return <>
        <div id='projects' className="h-screen w-screen px-16 py-40 flex flex-col items-start justify-start">
            <div className="text-6xl font-black mb-32">
                <div className="flex place-content-center">Projects</div>
                <div className='py-10'>
                    {/* <div className='w-1/3'>
                        <Image src={laptop} alt="Dummy Laptop" />
                    </div> */}
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                                <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
                                    <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png" className="dark:hidden h-[156px] md:h-[278px] w-full rounded-xl" alt="" />
                                    <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png" className="hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg" alt="" />
                                </div>
                            </div>
                            <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                                <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
                            </div>
                        </div>
                        <div className='mx-8'>
                            <div className='py-5'>Wolfwin</div>
                            <div className='text-lg font-light py-5'>Wolfwin is a successful Open-Source project And Play Skill Based Games With full compliance to the laws and regulations, WolfWin operates legally, backed by expert opinions from top industry-leading lawyers.</div>
                            <button>Gitlink</button>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-4 mt-24'>
                        <div className='mx-8'>
                            <div className='py-5'>Wolfwin</div>
                            <div className='text-lg font-light py-5'>Wolfwin is a successful Open-Source project And Play Skill Based Games With full compliance to the laws and regulations, WolfWin operates legally, backed by expert opinions from top industry-leading lawyers.</div>
                            <button>Gitlink</button>
                        </div>

                        <div>
                            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                                <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                                <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                                <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png" className="dark:hidden w-[272px] h-[572px]" alt="" />
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png" className="hidden dark:block w-[272px] h-[572px]" alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default Projects