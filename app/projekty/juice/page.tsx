'use client'

import Button from "@/app/components/Button";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const Page = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  return (
    <>
    <header className="my-12 sm:flex items-center justify-between">
      <h1 className="text-4xl mb-4 sm:mb-0">Juice.</h1>
      <div className="flex gap-2 w-full sm:w-fit">
        <Button label="Github" link="https://github.com/KrystianKurlej/juice" linkTitle="Juice. - Github" />
        <Button label="Strona www" link="https://juice-bay.vercel.app/" linkTitle="Juice. - Strona www" />
      </div>
    </header>
    <div className={`rounded my-8 ${imageLoaded ? '' : 'skeleton' }`}><Image src='/img/Juice - Header.jpg' alt="Juice - Header" width={1050} height={725} className="rounded" onLoadingComplete={handleImageLoaded}/></div>
    <p className="mb-4 font-light">
      Juice. to projekt platformy e-commerce, dedykowanej sprzedaży zdrowych soków o różnorodnych korzyściach dla zdrowia. W tym projekcie unikam konwencjonalnego akcentowania naturalności produktów, a skupiam się na wprowadzeniu nowoczesnej wizji handlu sokami.
    </p>
    <p className="mb-4 font-light">
      Podejście do samego procesu zakupu musiało być nieco inne niż w standardowych projektach platform e-commerce. Specyfika produktu sprawia, że użytkownik nie powinien odczuwać, że proces jest zbyt długi, zachowując przy tym dodatkowe możliwości takie jak odejmowanie składników od gotowego produktu.
    </p>
    <div className={`rounded my-8 ${imageLoaded ? '' : 'skeleton' }`}><Image src='/img/Juice - Koszyk.jpg' alt="Juice - Koszyk" width={1050} height={2052} className="rounded" onLoadingComplete={handleImageLoaded}/></div>
    <p className="mb-4 font-light">
      Jednym z elementów jest konfigurator soków, stanowiący istotny element witryny. Ten interaktywny moduł umożliwia użytkownikom samodzielne komponowanie swoich unikalnych soków, dostosowanych do indywidualnych upodobań i potrzeb. To właśnie ta funkcjonalność wyraża zaangażowanie projektu w kreowanie personalizowanych doświadczeń zakupowych.
    </p>
    <iframe className="w-full my-8 rounded" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FXD5Kt4NUKb9Z4kesWMqQL7%2FJuice%3Ftype%3Ddesign%26node-id%3D203%253A42%26mode%3Ddesign%26t%3DLKJHYDlEKd6mdELL-1" ></iframe>
    <p className="mb-4 font-light">
      Projekt dodatkowo realizuję używając Next.js i służy mi on jako obecna baza do rozwoju <Link className="underline font-normal" href='/projekty/smoothflow-cms/' title="SmoothFlow CMS">autorskiego systemu CMS</Link>.
    </p>
    <div className="mt-8 flex gap-2 w-full sm:w-fit">
      <Button label="Github" link="https://github.com/KrystianKurlej/juice" linkTitle="Juice. - Github" />
      <Button label="Strona www" link="https://juice-bay.vercel.app/" linkTitle="Juice. - Strona www" />
    </div>
    </>
  );
};

export default Page;
