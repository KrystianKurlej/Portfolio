'use client'

import Button from "@/app/components/Button";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Modal from "@/app/components/Modal";

const Page = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal)
    setIframeLoaded(false)
  };

  const [iframeLoaded, setIframeLoaded] = useState(false);
  const handleIframeLoaded = () => {
    setIframeLoaded(true);
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
    <div className="w-full my-8 p-8 rounded-lg flex flex-col gap-4 items-center text-2xl border border-neutral-500 relative">
      Projekt w figmie <button onClick={handleShowModal} className=" bg-[#020202] px-4 h-10 flex items-center gap-2 bg-8 rounded-lg border border-neutral-500 hover:border-neutral-50 duration-150 text-sm">Otwórz pop-up</button>
      <Image src='/img/Juice - Figma.jpg' alt="Juice - Figma" width={1360} height={500} className="absolute top-0 w-full h-full object-cover -z-10" />
    </div>
    {showModal &&
      <div onClick={handleShowModal} className="fixed fixed-center bg-neutral-500/[0.2] w-full h-full">
        <div className={iframeLoaded ? 'lds-ring opacity-0 z-20' : 'lds-ring opacity-100 z-20'}><div></div><div></div><div></div><div></div></div>
        <Modal>
          <iframe onLoad={handleIframeLoaded} className={iframeLoaded ? 'w-full rounded opacity-100' : 'w-full rounded opacity-0'} width="800" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FXD5Kt4NUKb9Z4kesWMqQL7%2FJuice%3Ftype%3Ddesign%26node-id%3D203%253A42%26mode%3Ddesign%26t%3DLKJHYDlEKd6mdELL-1" ></iframe>
          <button onClick={handleShowModal} className="absolute -bottom-12 left-[50%] translate-x-[-50%] bg-[#020202] sm:w-fit px-4 h-10 flex items-center gap-2 bg-8 rounded-lg border border-neutral-500 hover:border-neutral-50 duration-150 text-sm">Zamknij</button>
        </Modal>
      </div>
    }
    <p className="mb-4 font-light">Juice. to projekt platformy e-commerce, dedykowanej sprzedaży zdrowych soków o różnorodnych korzyściach dla zdrowia. W tym projekcie unikam konwencjonalnego akcentowania naturalności produktów, a skupiam się na wprowadzeniu nowoczesnej wizji handlu sokami.</p>
    <p className="mb-4 font-light">Podejście do samego procesu zakupu musiało być nieco inne niż w standardowych projektach platform e-commerce. Specyfika produktu sprawia, że użytkownik nie powinien odczuwać, że proces jest zbyt długi, zachowując przy tym dodatkowe możliwości takie jak odejmowanie składników od gotowego produktu.</p>
    <div className={`rounded my-8 ${imageLoaded ? '' : 'skeleton' }`}><Image src='/img/Juice - Koszyk.jpg' alt="Juice - Koszyk" width={1050} height={2052} className="rounded" onLoadingComplete={handleImageLoaded}/></div>
    <p className="mb-4 font-light">Jednym z elementów jest konfigurator soków, stanowiący istotny element witryny. Ten interaktywny moduł umożliwia użytkownikom samodzielne komponowanie swoich unikalnych soków, dostosowanych do indywidualnych upodobań i potrzeb. To właśnie ta funkcjonalność wyraża zaangażowanie projektu w kreowanie personalizowanych doświadczeń zakupowych.</p>
    <p className="mb-4 font-light">Projekt dodatkowo realizuję używając Next.js i służy mi on jako obecna baza do rozwoju <Link className="underline font-normal" href='/projekty/smoothflow-cms/' title="SmoothFlow CMS">autorskiego systemu CMS</Link>.</p>
    <div className="mt-8 flex gap-2 w-full sm:w-fit">
      <Button label="Github" link="https://github.com/KrystianKurlej/juice" linkTitle="Juice. - Github" />
      <Button label="Strona www" link="https://juice-bay.vercel.app/" linkTitle="Juice. - Strona www" />
    </div>
    </>
  );
};

export default Page;
