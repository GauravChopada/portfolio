import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/header.module.css'
import classNames from 'classnames';
import { Link as ScrollLink } from 'react-scroll';
import AWSBadge from '../utils/images/AWS_SOLUTION_ARCHITECT_BADGE.png'

interface HeaderProps {
    activeSection: string;
    isScrolled: boolean
}
const Header = (props: HeaderProps) => {

    const { activeSection, isScrolled } = props;
    return <div className={`h-15 px-16 py-5 flex flex-row items-center justify-between sticky inset-x-0 top-0 backdrop-blur bg-black/70 border-slate-800 ${isScrolled ? 'border-b-[1px]' : 'border-b-0'}`} >
        <div className='flex flex-row gap-x-10'>
            <ScrollLink to="intro" smooth={true} duration={500} className='cursor-pointer'>
                <div className={classNames(styles.hoverEffect, styles.header, activeSection === 'intro' || activeSection === '' ? styles['header--active'] : '')}>Home</div>
            </ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500} className='cursor-pointer'>
                <div className={classNames(styles.hoverEffect, styles.header, activeSection === 'about' ? styles['header--active'] : '')}>About</div>
            </ScrollLink>
            <ScrollLink to="skills" smooth={true} duration={500} className='cursor-pointer'>
                <div className={classNames(styles.hoverEffect, styles.header, activeSection === 'skills' ? styles['header--active'] : '')}>Skills</div>
            </ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={500} className='cursor-pointer'>
                <div className={classNames(styles.hoverEffect, styles.header, activeSection === 'projects' ? styles['header--active'] : '')}>Projects</div>
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} className='cursor-pointer'>
                <div className={classNames(styles.hoverEffect, styles.header, activeSection === 'contact' ? styles['header--active'] : '')}>Contact</div>
            </ScrollLink>
            <Link href="https://drive.google.com/file/d/1exj7t9keOreYFQg9C7Wp3AfadsIL9z0b/view?usp=sharing">
                <div className={classNames(styles.hoverEffect, styles.header)}>Resume</div>
            </Link>
        </div>
        <div className='flex flex-row gap-x-5 items-center'>
            {/* <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none shadow-lg shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">RESUME</button> */}
            {/* <Link href="/">
                <div>Resume</div>
            </Link> */}
            <Link href="https://www.credly.com/badges/fc599a71-6a20-4f2f-8ca1-9434aadebe9a/linked_in_profile" target='_blank'>
                <Image className="h-14 w-14 rounded-full" src={AWSBadge} alt="I M GRooT" />
            </Link>
            <img
                className="h-12 w-12 rounded-full"
                src='https://grootportfolio.s3.us-west-2.amazonaws.com/assets/Gaurav+Chopda.jpg'
                alt="I M GRooT"
            />
        </div>
    </div>
}

export default Header