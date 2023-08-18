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
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11.175 9.225L5.02497 9.225C4.81247 9.225 4.63422 9.153 4.49022 9.009C4.34622 8.865 4.27447 8.687 4.27497 8.475C4.27497 8.2625 4.34697 8.08425 4.49097 7.94025C4.63497 7.79625 4.81297 7.7245 5.02497 7.725L11.175 7.725L8.99997 5.55C8.86247 5.4125 8.79372 5.2375 8.79372 5.025C8.79372 4.8125 8.86247 4.6375 8.99997 4.5C9.13747 4.3625 9.31247 4.29375 9.52497 4.29375C9.73747 4.29375 9.91247 4.3625 10.05 4.5L13.5 7.95C13.65 8.1 13.725 8.275 13.725 8.475C13.725 8.675 13.65 8.85 13.5 9L10.05 12.45C9.91247 12.5875 9.73747 12.6562 9.52497 12.6562C9.31247 12.6562 9.13747 12.5875 8.99997 12.45C8.86247 12.3125 8.79372 12.1375 8.79372 11.925C8.79372 11.7125 8.86247 11.5375 8.99997 11.4L11.175 9.225Z" fill="white"/>
            </svg>
        </button>
      </Link>
    );
  } else {
    return (
      <button className="w-full sm:w-fit px-4 h-10 flex items-center gap-2 rounded-lg border border-neutral-500 hover:border-neutral-50 duration-150 text-sm">
        {label}
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M11.175 9.225L5.02497 9.225C4.81247 9.225 4.63422 9.153 4.49022 9.009C4.34622 8.865 4.27447 8.687 4.27497 8.475C4.27497 8.2625 4.34697 8.08425 4.49097 7.94025C4.63497 7.79625 4.81297 7.7245 5.02497 7.725L11.175 7.725L8.99997 5.55C8.86247 5.4125 8.79372 5.2375 8.79372 5.025C8.79372 4.8125 8.86247 4.6375 8.99997 4.5C9.13747 4.3625 9.31247 4.29375 9.52497 4.29375C9.73747 4.29375 9.91247 4.3625 10.05 4.5L13.5 7.95C13.65 8.1 13.725 8.275 13.725 8.475C13.725 8.675 13.65 8.85 13.5 9L10.05 12.45C9.91247 12.5875 9.73747 12.6562 9.52497 12.6562C9.31247 12.6562 9.13747 12.5875 8.99997 12.45C8.86247 12.3125 8.79372 12.1375 8.79372 11.925C8.79372 11.7125 8.86247 11.5375 8.99997 11.4L11.175 9.225Z" fill="white"/>
        </svg>
      </button>
    );
  }
};

export default Button;
