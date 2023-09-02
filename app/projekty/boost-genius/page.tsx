'use client'

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
      <h1 className="text-4xl mb-4 sm:mb-0">Boost Genius</h1>
    </header>
    <div className={`rounded my-8 ${imageLoaded ? '' : 'skeleton' }`}><Image src='/img/Boost Genius - Header.jpg' alt="BoostGenius - Header" width={1050} height={521} className="rounded" onLoadingComplete={handleImageLoaded} /></div>
    <div className="w-full my-8 p-8 rounded-lg flex flex-col gap-4 items-center text-2xl border border-neutral-500 relative">
      Projekt w figmie <button onClick={handleShowModal} className=" bg-[#020202] px-4 h-10 flex items-center gap-2 bg-8 rounded-lg border border-neutral-500 hover:border-neutral-50 duration-150 text-sm">Otwórz pop-up</button>
      <Image src='/img/BoostGenius - Figma.jpg' alt="BoostGenius - Figma" width={1360} height={500} className="absolute top-0 w-full h-full object-cover -z-10" />
    </div>
    {showModal &&
      <div onClick={handleShowModal} className="fixed fixed-center bg-neutral-500/[0.2] w-full h-full">
        <div className={iframeLoaded ? 'lds-ring opacity-0 z-20' : 'lds-ring opacity-100 z-20'}><div></div><div></div><div></div><div></div></div>
        <Modal>
          <iframe onLoad={handleIframeLoaded} className={iframeLoaded ? 'w-full rounded opacity-100' : 'w-full rounded opacity-0'} width="800" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F6CBZMSfsUwCXV6GodEUfCo%2FBoost-Genius%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DTM4vxJiYSBGADbMb-1"></iframe>
          <button onClick={handleShowModal} className="absolute -bottom-12 left-[50%] translate-x-[-50%] bg-[#020202] sm:w-fit px-4 h-10 flex items-center gap-2 bg-8 rounded-lg border border-neutral-500 hover:border-neutral-50 duration-150 text-sm">Zamknij</button>
        </Modal>
      </div>
    }
    <p className="mb-4 font-light">Boost Genius to obszerny projekt serwisu internetowego, który oferuje usługi związane z tzw. „boostingiem” w grze League of Legends. Jest on aktualnie w trakcie realizacji.<br />Serwis charakteryzuje się dość zaawansowanym formularzem zamówień, ze względu na specyfikę usług. Wszystkie cechy zaznaczane są przez użytkownika przed złożeniem zamówienia, a na tej podstawie automatycznie generuje się jego cena.</p>
    <div className={`rounded my-8 ${imageLoaded ? '' : 'skeleton' }`}><Image src='/img/BoostGenius - Formularz.jpg' alt="BoostGenius - Formularz" width={1050} height={701} className="rounded" onLoadingComplete={handleImageLoaded} /></div>
    <p className="mb-4 font-light">Dodatkowo, serwis nie tylko służy do składania, ale i prowadzenia zamówienia. Zarówno użytkownicy jak i pracownicy serwisu mają dostęp do swoich paneli, w których mogą obsługiwać aktualne zamówienie.</p>
    <p className="mb-4 font-light">Na stronie zostały użyte również materiały graficzne wykonane za pomocą grafiki 3D. Sprawdziła się ona idealnie prezentując różne poziomy gry dostępne w formularzu.</p>
    <div className={`rounded my-8 ${imageLoaded ? '' : 'skeleton' }`}><Image src='/img/BoostGenius - 3D.jpg' alt="BoostGenius - 3D" width={1050} height={774} className="rounded" onLoadingComplete={handleImageLoaded} /></div>
    </>
  );
};

export default Page;
