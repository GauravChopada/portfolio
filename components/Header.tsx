import Image from 'next/image';
import githubSvg from '../utils/svgs/githubSvg.svg'

const Header = () => {
    return <div className="h-15 px-16 py-5 flex flex-row items-center justify-between sticky inset-x-0 top-0 backdrop-blur-lg backdrop-opacity-90 backdrop-brightness-0">
        <div className='flex flex-row gap-x-10'>
            <div>Home</div>
            <div>About</div>
            <div>Skills</div>
            <div>Projects</div>
            <div>Contact</div>
        </div>
        <div className='flex flex-row gap-x-2.5'>
            <div>
                <Image
                    className="h-10 w-10"
                    //  priority
                    src={githubSvg}
                    alt="Visit GitHub"
                />
            </div>
        </div>
    </div>
}

export default Header