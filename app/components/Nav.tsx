'use client'

import Link from "next/link";
import React, {useState, useEffect} from "react";
import LanguageMenu from "./LanguageMenu";
import SocialMediaMenu from "./SocialMediaMenu";


interface NavProps {
    currentPage?: 'Portfolio' | 'O mnie' | 'Umiejętności';
    lang: 'PL' | 'EN';
}

const Nav: React.FC<NavProps> = ({currentPage, lang}) => {
    const nav = {
        PL: {
            portfolio: 'Portfolio',
            portfolioLink: '/',
            aboutMe: 'O mnie',
            aboutMeLink: '/o-mnie/',
            skills: 'Umiejętności',
            skillsLink: '/umiejetnosci/'
        },
        EN: {
            portfolio: 'Portfolio',
            portfolioLink: '/en/',
            aboutMe: 'About me',
            aboutMeLink: '/en/about-me/',
            skills: 'Skills',
            skillsLink: '/en/skills/'
        }
    }

    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleMenuChange = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleCloseMenu = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          if (scrollTop > 0) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    }, []);

  return (
    <nav className={`nav z-30 sticky top-0 bg-[#020202] max-w-[1800px] px-4 mx-auto flex items-center justify-between ${isScrolled ? "active" : ""}`}>
        <div className="menu-btn sm:hidden z-40" onClick={handleMenuChange}>
            <div className={`hamburger-ico ${isMenuOpen ? 'active': ''}`}></div>
        </div>
        <div className={`
        absolute bg-[#020202] top-0 w-full h-[100svh] py-28 px-10 text-3xl duration-300
        ${isMenuOpen ? 'left-0 opacity-100' : 'left-[-100%] opacity-50'}
        sm:h-full sm:static sm:text-base sm:opacity-100 sm:flex sm:items-center sm:justify-between sm:py-0 sm:px-4
        `}>
            <ul className="sm:flex gap-5 items-center">
                <li className="mb-4 md:mb-0">
                    <Link
                        onClick={handleCloseMenu}
                        className={currentPage === 'Portfolio' ? 'opacity-100' : 'opacity-70 hover:opacity-100 duration-150'}
                        href={lang === 'PL' ? nav.PL.portfolioLink : nav.EN.portfolioLink}
                    >
                        {lang === 'PL' ? nav.PL.portfolio : nav.EN.portfolio}
                    </Link>
                </li>
                <li className="mb-4 md:mb-0">
                    <Link
                        onClick={handleCloseMenu}
                        className={currentPage === 'O mnie' ? 'opacity-100' : 'opacity-70 hover:opacity-100 duration-150'}
                        href={lang === 'PL' ? nav.PL.aboutMeLink : nav.EN.aboutMeLink}
                    >
                        {lang === 'PL' ? nav.PL.aboutMe : nav.EN.aboutMe}
                    </Link>
                </li>
                <li className="mb-4 md:mb-0">
                    <Link
                        onClick={handleCloseMenu}
                        className={currentPage === 'Umiejętności' ? 'opacity-100' : 'opacity-70 hover:opacity-100 duration-150'}
                        href={lang === 'PL' ? nav.PL.skillsLink : nav.EN.skillsLink}
                    >
                        {lang === 'PL' ? nav.PL.skills : nav.EN.skills}
                    </Link>
                </li>
            </ul>
            <div className="md:flex md:items-center md:gap-5">
                <SocialMediaMenu />
                <span className="w-[1px] h-6 bg-neutral-500 hidden sm:block"></span>
                <LanguageMenu lang={lang} />
            </div>
        </div>
    </nav>
  );
};

export default Nav;
