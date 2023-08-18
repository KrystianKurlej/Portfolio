import Link from "next/link";
import React from "react";

interface ButtonProps {
    label: string;
    link?: string;
    linkTitle?: string;
}

const Button: React.FC<ButtonProps> = ({ label, link, linkTitle }) => {
  if (link) {
    return (
      <Link href={link} title={linkTitle} target="_blank" className="w-full sm:w-fit">
        <button className="w-full sm:w-fit px-4 h-10 flex items-center gap-2 rounded-lg border border-neutral-500 hover:border-neutral-50 duration-150 text-sm">
            {label}
        </button>
      </Link>
    );
  } else {
    return (
      <button className="w-full sm:w-fit px-4 h-10 flex items-center gap-2 rounded-lg border border-neutral-500 hover:border-neutral-50 duration-150 text-sm">
        {label}
      </button>
    );
  }
};

export default Button;
