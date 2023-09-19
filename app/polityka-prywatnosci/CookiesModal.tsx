'use client';

import Link from "next/link";
import React, { useState } from "react";
import Cookies from 'js-cookie';

const CookiesModal = () => {
  const [cookiesAccepted, setCookiesAccepted] = useState(Cookies.get('cookiesAccepted'));

  const acceptCookies = () => {
    Cookies.set('cookiesAccepted', 'true', { expires: 365 });
    setCookiesAccepted('true');
  }

  if(cookiesAccepted !== 'true') {
    return (
      <div 
          className="bg-[#020202] w-full fixed bottom-0 right-0 p-4 shadow-xl border-t border-neutral-500 z-30
          md:w-96 md:rounded-lg md:border md:m-5"
      >
          <h2 className="text-xl">
            Pliki cookies
          </h2>
          <p className="text-xs mt-2 text-neutral-200 font-light">
            Przeglądając moje portfolio wyrażasz zgodę na używanie przeze mnie plików cookies. Informacje te wykorzystywane są tylko do celów statystycznych w celu usprawnienia strony. Więcej na ten temat dowiesz się w
            &nbsp;
            <Link href='/polityka-prywatnosci' className="font-medium text-white underline">Polityce prywatności.</Link>
          </p>
          <button
            onClick={acceptCookies}
            className="mt-4 w-full px-4 h-10 flex items-center justify-center gap-2 bg-8 rounded-lg border border-neutral-500 hover:border-neutral-50 duration-150 text-sm"
          >
              Rozumiem
          </button>
      </div>
    );
  }
};


export default CookiesModal;
