'use client'

import Link from "next/link";
import React, {useState} from "react";
import Image from "next/image";

interface PortfolioCardProps {
    title: string;
    slug: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({title, slug}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  return (
    <Link href={`/projekty/${slug}/`} title={`Projekt ${title}`}>
      <div className={`${imageLoaded ?
      '' : 'skeleton'
      }`}>
        <Image className="rounded-lg" src={`/img/Cover - ${title}.jpg`} alt="AlumiDrop" width={1920} height={800} onLoadingComplete={handleImageLoaded}/>
      </div>
    </Link>
  );
};

export default PortfolioCard;
