import React from "react";
import Link from "next/link";

interface LanguageMenuProps {
    lang: 'PL' | 'EN';
}

const LanguageMenu: React.FC<LanguageMenuProps> = ({lang}) => {
  return (
    <Link href={lang === 'PL' ? '/en/' : '/'}>
        <ul className="group mt-10 w-14 h-10 gap-2 sm:gap-0 sm:w-9 sm:h-6 sm:mt-0 flex items-center rounded-md border border-white sm:overflow-hidden relative cursor-pointer">
            <li className="font-medium text-center">
                <button className="w-14 h-10 sm:w-9 sm:h-6 pt-[2px] absolute bottom-0 left-0 group-hover:-left-14 duration-300">
                    {lang}
                </button>
            </li>
            <li className="font-medium text-center">
                <button className="w-14 h-10 sm:w-9 sm:h-6 pt-[2px] absolute bottom-0 left-14 group-hover:left-0 duration-300">
                    {lang === 'PL' ? 'EN' : 'PL'}
                </button>
            </li>
        </ul>
    </Link>
  );
};

export default LanguageMenu;
