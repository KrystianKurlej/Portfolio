import Link from "next/link";
import React from "react";
import Image from "next/image";

interface PortfolioCardProps {
    title: string;
    slug: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({title, slug}) => {
  return (
    <Link href={`/projekty/${slug}/`} title={`Projekt ${title}`}>
      <Image className="rounded-lg" src={`/img/Cover - ${title}.jpg`} alt="AlumiDrop" width={1920} height={800} />
    </Link>
  );
};

export default PortfolioCard;
