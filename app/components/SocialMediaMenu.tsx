import React from "react";
import Link from "next/link";
import Image from "next/image";

const SocialMediaMenu = () => {
  return (
    <ul className="mt-10 sm:mt-0 flex gap-5 items-center">
        <li>
            <Link href="https://www.linkedin.com/in/krystian-kurlej-0ba001232/" target="_blank">
                <Image alt="Linkedin" src="/icons/linkedin.svg" width={32} height={32}
                className="w-10 h-10 sm:w-6 sm:h-6"/>
            </Link>
        </li>
        <li>
            <Link href="https://www.behance.net/krystiankurlej" target="_blank">
                <Image alt="Behance" src="/icons/behance.svg" width={32} height={32}
                className="w-10 h-10 sm:w-6 sm:h-6"/>
            </Link>
        </li>
        <li>
            <Link href="https://github.com/KrystianKurlej" target="_blank">
                <Image alt="Github" src="/icons/github.svg" width={32} height={32}
                className="w-10 h-10 sm:w-6 sm:h-6"/>
            </Link>
        </li>
    </ul>
  );
};

export default SocialMediaMenu;
