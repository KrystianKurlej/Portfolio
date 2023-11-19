'use client'

import Link from "next/link";
import React, {useState} from "react";
import Image from "next/image";
import { Tailwind, Typescript, Nextjs, Strapi, Wordpress, Vue, Php } from "./SoftwareIcons";

interface PortfolioCardProps {
    title: string;
    slug: string;
    lang: 'PL' | 'EN';
    commercial: boolean;

    wordpress?: boolean;
    vue?: boolean;
    nextjs?: boolean;
    typescript?: boolean;
    php?: boolean;
    tailwind?: boolean;
    strapi?: boolean;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  slug,
  lang,
  commercial,
  wordpress, vue, nextjs, typescript, php, tailwind, strapi
}) => {
  const card = {
    PL: {
        href: 'projekty',
        title: 'Projekt',
        commercial: 'Projekt komercyjny'
    },
    EN: {
        href: 'en/projects',
        title: 'Project',
        commercial: 'Commercial project'
    }
}

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  return (
    <Link href={`/${lang === 'PL' ? card.PL.href : card.EN.href}/${slug}/`} title={`${lang === 'PL' ? card.PL.title : card.EN.title} ${title}`}>
      <div className={`group overflow-clip ${imageLoaded ?
      'relative' : 'skeleton relative'
      }`}>
        <div className="hidden md:flex gap-2 absolute top-0 left-0 z-10 my-2 mx-0 py-2 px-2.5 rounded-lg bg-black duration-150 opacity-0 group-hover:opacity-100 group-hover:mx-2">
          {wordpress && <Wordpress width={24} height={24} />}
          {nextjs && <Nextjs width={24} height={24} />}
          {vue && <Vue width={24} height={24} />}
          {typescript && <Typescript width={24} height={24} />}
          {php && <Php width={24} height={24} />}
          {tailwind && <Tailwind width={24} height={24} />}
          {strapi && <Strapi width={24} height={24} />}
        </div>
        <Image className="rounded-lg w-full" src={`/img/Cover - ${title}.jpg`} alt={title} width={825} height={344} onLoadingComplete={handleImageLoaded}/>
        {commercial && 
          <span className="absolute right-0 bottom-0 z-10 text-lg uppercase m-2 py-2 px-4 rounded-lg bg-black">
            {lang === 'PL' ? card.PL.commercial : card.EN.commercial}
          </span>
        }
      </div>
    </Link>
  );
};

export default PortfolioCard;