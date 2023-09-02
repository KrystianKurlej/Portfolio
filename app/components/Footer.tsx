import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="max-w-[1800px] px-4 mx-auto py-12 text-center text-sm font-light text-neutral-500">
        ©2023 Krystian Kurlej - Portfolio<br />Wszelkie prawa zastrzeżone. | <Link className="underline hover:text-neutral-200 duration-150" href='/polityka-prywatnosci/' title="Polityka prywatności">Polityka prywatności</Link>
    </div>
  );
};

export default Footer;
