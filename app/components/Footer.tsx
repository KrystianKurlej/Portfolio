import Link from "next/link";
import React from "react";

interface FooterProps {
  lang: 'PL' | 'EN';
};

const Footer: React.FC<FooterProps> = ({lang}) => {
  const footer = {
    PL: {
        copyrights: 'Wszelkie prawa zastrzeżone.',
        policyLink: '/polityka-prywatnosci/',
        policy: 'Polityka prywatności'
    },
    EN: {
        copyrights: 'All rights reserved.',
        policyLink: '/en/privacy-policy/',
        policy: 'Privacy policy'
    }
  }

  return (
    <div className="max-w-[1800px] px-4 mx-auto py-12 text-center text-sm font-light text-neutral-500">
        ©2023 Krystian Kurlej - Portfolio
        <br />
        {lang === 'PL' ? footer.PL.copyrights : footer.EN.copyrights}
        &nbsp;|&nbsp;
        <Link
          className="underline hover:text-neutral-200 duration-150"
          href={lang === 'PL' ? footer.PL.policyLink : footer.EN.policyLink}
          title={lang === 'PL' ? footer.PL.policy : footer.EN.policy}
        >
          {lang === 'PL' ? footer.PL.policy : footer.EN.policy}
        </Link>
    </div>
  );
};

export default Footer;
