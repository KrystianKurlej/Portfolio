'use client'

import Link from "next/link";
import React, {useState} from "react";
import Image from "next/image";

interface PortfolioCardProps {
    title: string;
    slug: string;
    lang: 'PL' | 'EN';
    commercial: boolean;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({title, slug, lang, commercial}) => {
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
      <div className={`${imageLoaded ?
      'relative' : 'skeleton relative'
      }`}>
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
