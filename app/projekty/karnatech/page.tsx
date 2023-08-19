'use client'

import Button from "@/app/components/Button";
import Image from "next/image";
import React, { useState } from "react";

const Page = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  return (
    <>
    <header className="my-12 sm:flex items-center justify-between">
      <h1 className="text-4xl mb-4 sm:mb-0">Karnatech</h1>
      <div className="flex gap-2 w-full sm:w-fit">
        <Button label="Github" link="https://github.com/KrystianKurlej/Karnatech" linkTitle="SmoothFlow CMS - Github" />
        <Button label="Strona www" link="https://karnatech.pl/" linkTitle="Karnatech - Strona www" />
      </div>
    </header>
    <div className={`rounded my-8 ${imageLoaded ? '' : 'skeleton' }`}><Image src='/img/Karnatech - Header.jpg' alt="Karnatech - Header" width={1050} height={980} className="rounded" onLoadingComplete={handleImageLoaded}/></div>
    <p className="mb-4 font-light">Karnatech to projekt strony internetowej dla firmy specjalizującej się w różnorodnych usługach, takich jak tworzenie konstrukcji stalowych, obróbka CNC oraz cięcie laserem. Firma postanowiła zainwestować w nową identyfikację wizualną, dlatego też przestarzała już strona internetowa musiała być zaktualizowana.</p>
    <iframe className="w-full my-8 rounded" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FKIO6hhJI48IktdgHATfla8%2FKarnatech%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DuL8CsW0ukrFLacbn-1"></iframe>
    <p className="mb-4 font-light">Efektem mojej pracy jest nie tylko atrakcyjna strona internetowa, ale także dedykowany motyw WordPress, który idealnie odzwierciedla nową tożsamość firmy. Jest on wciąż w użyciu, stanowiąc solidną podstawę dla strony internetowej firmy oraz przyczyniając się do utrzymania spójnego i profesjonalnego wizerunku online.</p>
    <div className="mt-8 flex gap-2 w-full sm:w-fit">
      <Button label="Github" link="https://github.com/KrystianKurlej/Karnatech" linkTitle="SmoothFlow CMS - Github" />
      <Button label="Strona www" link="https://karnatech.pl/" linkTitle="Karnatech - Strona www" />
    </div>
    </>
  );
};

export default Page;
