import React, { MouseEventHandler } from "react";
import Link from "next/link";

interface ButtonProps {
    label: string;
    link?: string;
    linkTitle?: string;
    icon?: React.ReactNode;
    iconPlacement?: 'left' | 'right' | 'only';
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button: React.FC<ButtonProps> = ({ label, link, linkTitle, icon, iconPlacement, className, onClick }) => {
  if (link) {
    return (
      <Link href={link} title={linkTitle ? linkTitle : label} target="_blank" className="w-full sm:w-fit">
        <button
          className={`bg-[#020202] px-4 h-10 flex items-center gap-2 rounded-lg border border-neutral-500 hover:border-neutral-50 duration-150 text-sm ${className}`}
          onClick={onClick}
        >
          {(iconPlacement === 'left' || iconPlacement === 'only') && icon}
          {(iconPlacement !== 'only') && label}
          {(iconPlacement === 'right') && icon}
        </button>
      </Link>
    );
  } else {
    return (
      <button
        className={`bg-[#020202] px-4 h-10 flex items-center gap-2 rounded-lg border border-neutral-500 hover:border-neutral-50 duration-150 text-sm ${className}`}
        onClick={onClick}
      >
        {(iconPlacement === 'left' || iconPlacement === 'only') && icon}
        {(iconPlacement !== 'only') && label}
        {(iconPlacement === 'right') && icon}
      </button>
    );
  }
};

export default Button;
