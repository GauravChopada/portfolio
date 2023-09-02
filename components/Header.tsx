import Image from 'next/image';
import githubSvg from '../utils/svgs/githubSvg.svg'
import Link from 'next/link';

const Header = () => {
    return <div className="h-15 px-16 py-5 flex flex-row items-center justify-between sticky inset-x-0 top-0 backdrop-blur-lg backdrop-opacity-90 backdrop-brightness-0">
        <div className='flex flex-row gap-x-10'>
            <Link href="/">
                <div>Home</div>
            </Link>
            <Link href="/#about">
                <div>About</div>
            </Link>
            <Link href="/#skills">
                <div>Skills</div>
            </Link>
            <Link href="/#projects">
                <div>Projects</div>
            </Link>
            <Link href="/#contact">
                <div>Contact</div>
            </Link>
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