'use client'

import Button from "@/app/components/Button";
import Image from "next/image";
import React, { useState } from "react";
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
      <h1 className="text-4xl mb-4 sm:mb-0">SmoothFlow CMS</h1>
      <div className="flex gap-2 w-full sm:w-fit">
        <Button label="Github" link="https://github.com/KrystianKurlej/SmoothFlow-CMS" linkTitle="SmoothFlow CMS - Github" />
        <Button label="Strona www" link="https://smooth-flow-cms.vercel.app/" linkTitle="SmoothFlow CMS - Strona www" />
      </div>
    </header>
    <div className={`rounded my-8 ${imageLoaded ? '' : 'skeleton' }`}><Image src='/img/SmoothFlow CMS - Mockup.jpg' alt="SmoothFlow CMS - Mockup" width={1050} height={701} className="rounded" onLoadingComplete={handleImageLoaded}/></div>
    <div className="w-full my-8 p-8 rounded-lg flex flex-col gap-4 items-center text-2xl border border-neutral-500 relative">
      Projekt w figmie <button onClick={handleShowModal} className=" bg-[#020202] px-4 h-10 flex items-center gap-2 bg-8 rounded-lg border border-neutral-500 hover:border-neutral-50 duration-150 text-sm">Otwórz pop-up</button>
      <Image src='/img/SmoothFlow CMS - Figma.jpg' alt="SmoothFlow CMS - Figma" width={1000} height={368} className="absolute top-0 w-full h-full object-cover -z-10" />
    </div>
    {showModal &&
      <div onClick={handleShowModal} className="fixed fixed-center bg-neutral-500/[0.2] w-full h-full z-40">
        <div className={iframeLoaded ? 'lds-ring opacity-0 z-50' : 'lds-ring opacity-100 z-50'}><div></div><div></div><div></div><div></div></div>
        <Modal>
          <iframe onLoad={handleIframeLoaded} className={iframeLoaded ? 'w-full rounded opacity-100' : 'w-full rounded opacity-0'} width="800" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fwh67UnBVuRmaYfExcPje22%2FSmoothFlowCMS%3Ftype%3Ddesign%26node-id%3D505%253A2969%26mode%3Ddesign%26t%3DZRSl0hXWAVWUa7xq-1"></iframe>
          <button onClick={handleShowModal} className="absolute -bottom-12 left-[50%] translate-x-[-50%] bg-[#020202] sm:w-fit px-4 h-10 flex items-center gap-2 bg-8 rounded-lg border border-neutral-500 hover:border-neutral-50 duration-150 text-sm">Zamknij</button>
        </Modal>
      </div>
    }
    <p className="mb-4 font-light">SmoothFlow CMS to mój osobisty projekt systemu CMS. Popularne systemy CMS takie jak WordPress, nadal sprawiają dużo trudności klientom, dlatego podjąłem wyzwanie zaprojektowania własnego rozwiązania. Bazując na gotowym projekcie witryny, stworzyłem spersonalizowane funkcje w ramach systemu CMS. Planuję kontynuować rozwijanie systemu, opierając się stopniowo o kolejne strony i możliwości, aby uzyskać ostatecznie wszechstronne rozwiązanie.</p>
    <p className="mb-4 font-light">W trakcie tworzenia projektu w narzędziu Figma oparłem się na klasach Tailwind CSS. Wykorzystałem nazwy klas do definiowania zmiennych i stylów, co znacząco ułatwia programowanie tych elementów na późniejszych etapach.</p>
    <div className={`rounded my-8 ${imageLoaded ? '' : 'skeleton'}`}><Image src='/img/SmoothFlow CMS - Tailwind.jpg' alt="SmoothFlow CMS - Tailwind" width={1050} height={701} className="rounded" onLoadingComplete={handleImageLoaded}/></div>
    <p className="mb-4 font-light">Dążąc do dalszego rozwoju, pracuję nad implementacją systemu przy użyciu frameworka Next.js, co można śledzić na moim profilu GitHub.</p>
    <div className="mt-8 flex gap-2 w-full sm:w-fit">
      <Button label="Github" link="https://github.com/KrystianKurlej/SmoothFlow-CMS" linkTitle="SmoothFlow CMS - Github" />
      <Button label="Strona www" link="https://smooth-flow-cms.vercel.app/" linkTitle="SmoothFlow CMS - Strona www" />
    </div>
    </>
  );
};

export default Page;
