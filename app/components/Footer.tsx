interface FooterProps {
  lang: 'PL' | 'EN';
};

const Footer: React.FC<FooterProps> = ({lang}) => {
  const footer = {
    PL: {
        copyrights: 'Wszelkie prawa zastrzeżone.',
    },
    EN: {
        copyrights: 'All rights reserved.',
    }
  }

  return (
    <div className="max-w-[1800px] px-4 mx-auto py-12 text-center text-sm font-light text-neutral-500">
        ©2023 Krystian Kurlej - Portfolio
        <br />
        {lang === 'PL' ? footer.PL.copyrights : footer.EN.copyrights}
    </div>
  );
};

export default Footer;
