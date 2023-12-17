import Link from 'next/link';
import styles from '../styles/header.module.css'
import classNames from 'classnames';
import { Link as ScrollLink } from 'react-scroll';
import { globals } from '@/utils/data/strings';

interface HeaderProps {
    activeSection: string;
    isScrolled: boolean
}

const Header = (props: HeaderProps) => {
    const { activeSection, isScrolled } = props;
    return <div className={`h-15 px-10 xl:px-16 py-5 flex-row items-center justify-between sticky inset-x-0 top-0 backdrop-blur bg-black/70 border-slate-800 z-50 min-w-[133vw] xl:min-w-0 hidden lg:flex placeholder: ${isScrolled ? 'border-b-[1px]' : 'border-b-0'}`} >
        <div className='flex flex-row gap-x-5 xl:gap-x-10'>
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
            <Link href={globals.resumeLink} target='_blank'>
                <div className={classNames(styles.hoverEffect, styles.header)}>Resume</div>
            </Link>
        </div>
        <img
            className="h-12 w-12 min-w-12 rounded-full"
            src={globals.photoLink}
            alt="I M GRooT"
        />
    </div>

}

export default Header