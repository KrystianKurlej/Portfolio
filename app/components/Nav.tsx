'use client'

import Link from "next/link";
import React, {useState, useEffect} from "react";
import Image from "next/image";

interface NavProps {
    currentPage?: 'Portfolio' | 'O mnie' | 'Umiejętności';
}

const Nav: React.FC<NavProps> = ({currentPage}) => {
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
    <nav className={`nav sticky top-0 bg-[#020202] max-w-[1800px] px-4 mx-auto flex items-center justify-between ${isScrolled ? "active" : ""}`}>
        <div className="menu-btn sm:hidden z-10" onClick={handleMenuChange}>
            <div className={`hamburger-ico ${isMenuOpen ? 'active': ''}`}></div>
        </div>
        <div className={`
        absolute bg-[#020202] top-0 w-full h-[100svh] py-28 px-10 text-3xl duration-300
        ${isMenuOpen ? 'left-0 opacity-100' : 'left-[-100%] opacity-50'}
        sm:h-full sm:static sm:text-base sm:opacity-100 sm:flex sm:items-center sm:justify-between sm:py-0 sm:px-4
        `}>
            <ul className="sm:flex gap-5 items-center">
                <Link onClick={handleCloseMenu} className={currentPage === 'Portfolio' ? 'opacity-100' : 'opacity-70 hover:opacity-100 duration-150'} href="/">
                    <li className="mb-4 md:mb-0">Portfolio</li>
                </Link>
                <Link onClick={handleCloseMenu} className={currentPage === 'O mnie' ? 'opacity-100' : 'opacity-70 hover:opacity-100 duration-150'} href="/o-mnie/">
                    <li className="mb-4 md:mb-0">O mnie</li>
                </Link>
                <Link onClick={handleCloseMenu} className={currentPage === 'Umiejętności' ? 'opacity-100' : 'opacity-70 hover:opacity-100 duration-150'} href="/umiejetnosci/">
                    <li className="mb-4 md:mb-0">Umiejętności</li>
                </Link>
            </ul>
            <ul className="mt-10 sm:mt-0 flex gap-5 items-center">
                <Link href="https://www.linkedin.com/in/krystian-kurlej-0ba001232/" target="_blank">
                    <Image alt="Linkedin" src="/icons/linkedin.svg" width={32} height={32}
                    className="w-10 h-10 sm:w-6 sm:h-6"/>
                </Link>
                <Link href="https://www.behance.net/krystiankurlej" target="_blank">
                    <Image alt="Behance" src="/icons/behance.svg" width={32} height={32}
                    className="w-10 h-10 sm:w-6 sm:h-6"/>
                </Link>
                <Link href="https://github.com/KrystianKurlej" target="_blank">
                    <Image alt="Github" src="/icons/github.svg" width={32} height={32}
                    className="w-10 h-10 sm:w-6 sm:h-6"/>
                </Link>
            </ul>
        </div>
    </nav>
  );
};

export default Nav;
