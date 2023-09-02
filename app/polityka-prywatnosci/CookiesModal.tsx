'use client';

import Link from "next/link";
import React, { useState } from "react";

const CookiesModal = () => {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const acceptCookies = () => {
    setCookiesAccepted(true)
  }

  if(cookiesAccepted) { return null; }

  return (
    <div 
        className="bg-[#020202] w-full fixed bottom-0 right-0 p-4 shadow-xl border-t border-neutral-500 z-50
        md:w-96 md:rounded-lg md:border md:m-5"
    >
        <h2 className="text-xl">Pliki cookies</h2>
        <p className="text-xs mt-2 text-neutral-200 font-light">Moje portfolio wykorzystuje pliki cookies. Informacje te wykorzystywane są tylko do celów statystycznych w celu usprawnienia strony. Więcej na ten temat dowiesz się w <Link href='/polityka-prywatnosci' className="font-medium text-white underline">Polityce prywatności.</Link></p>
        <button
          onClick={acceptCookies}
          className="mt-4 w-full px-4 h-10 flex items-center justify-center gap-2 bg-8 rounded-lg border border-neutral-500 hover:border-neutral-50 duration-150 text-sm"
        >
            Rozumiem
        </button>
    </div>
  );
};

export default CookiesModal;
