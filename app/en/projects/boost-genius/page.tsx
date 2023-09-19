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
      Figma project<button onClick={handleShowModal} className=" bg-[#020202] px-4 h-10 flex items-center gap-2 bg-8 rounded-lg border border-neutral-500 hover:border-neutral-50 duration-150 text-sm">Open project</button>
      <Image src='/img/BoostGenius - Figma.jpg' alt="BoostGenius - Figma"width={1000} height={368} className="absolute top-0 w-full h-full object-cover -z-10" />
    </div>
    {showModal &&
      <div onClick={handleShowModal} className="fixed fixed-center bg-neutral-500/[0.2] w-full h-[100svh] z-40">
        <div className={iframeLoaded ? 'lds-ring opacity-0 z-50' : 'lds-ring opacity-100 z-50'}><div></div><div></div><div></div><div></div></div>
        <Modal>
          <iframe onLoad={handleIframeLoaded} className={iframeLoaded ? 'w-full rounded opacity-100' : 'w-full rounded opacity-0'} width="800" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F6CBZMSfsUwCXV6GodEUfCo%2FBoost-Genius%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DTM4vxJiYSBGADbMb-1"></iframe>
          <button onClick={handleShowModal} className="absolute -bottom-12 left-[50%] translate-x-[-50%] bg-[#020202] sm:w-fit px-4 h-10 flex items-center gap-2 bg-8 rounded-lg border border-neutral-500 hover:border-neutral-50 duration-150 text-sm">Close</button>
        </Modal>
      </div>
    }
    <p className="mb-4 font-light">Boost Genius is an extensive web service project that offers services related to the so-called &quot;boosting&quot; in the game League of Legends. It is currently in progress.<br />The service is characterized by a fairly advanced order form, due to the specificity of the services. All features are selected by the user before placing an order, and based on this, the price is automatically generated.</p>    <div className={`rounded my-8 ${imageLoaded ? '' : 'skeleton' }`}><Image src='/img/BoostGenius - Formularz.jpg' alt="BoostGenius - Formularz" width={1050} height={701} className="rounded" onLoadingComplete={handleImageLoaded} /></div>
    <p className="mb-4 font-light">Additionally, the service is not only used for placing orders, but also for managing them. Both users and service employees have access to their panels, where they can handle current orders.</p>
    <p className="mb-4 font-light">The website also features graphic materials created using 3D graphics. It proved to be a perfect fit for presenting the various levels of the game available in the form.</p>
    <div className={`rounded my-8 ${imageLoaded ? '' : 'skeleton' }`}><Image src='/img/BoostGenius - 3D.jpg' alt="BoostGenius - 3D" width={1050} height={774} className="rounded" onLoadingComplete={handleImageLoaded} /></div>
    </>
  );
};

export default Page;
