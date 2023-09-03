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
      <h1 className="text-4xl mb-4 sm:mb-0">AlumiDrop</h1>
    </header>
    <div className={`rounded my-8 ${imageLoaded ? '' : 'skeleton' }`}><Image className="rounded" src='/img/AlumiDrop - Mockup.jpg' alt="AlumiDrop - Mockup" width={1050} height={845} onLoadingComplete={handleImageLoaded}/></div>
    <div className="w-full my-8 p-8 rounded-lg flex flex-col gap-4 items-center text-2xl border border-neutral-500 relative">
      Projekt w figmie <button onClick={handleShowModal} className=" bg-[#020202] px-4 h-10 flex items-center gap-2 bg-8 rounded-lg border border-neutral-500 hover:border-neutral-50 duration-150 text-sm">Otwórz pop-up</button>
      <Image src='/img/AlumiDrop - Figma.jpg' alt="AlumiDrop - Figma" width={1000} height={368} className="absolute top-0 w-full h-full object-cover -z-10" />
    </div>
    {showModal &&
      <div onClick={handleShowModal} className="fixed fixed-center bg-neutral-500/[0.2] w-full h-[100svh] z-40">
        <div className={iframeLoaded ? 'lds-ring opacity-0 z-50' : 'lds-ring opacity-100 z-50'}><div></div><div></div><div></div><div></div></div>
        <Modal>
          <iframe onLoad={handleIframeLoaded} className={iframeLoaded ? 'w-full rounded opacity-100' : 'w-full rounded opacity-0'} width="800" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F8pinz7GYpjWfDDATur0WBZ%2FAlumiDrop%3Ftype%3Ddesign%26node-id%3D808%253A151%26mode%3Ddesign%26t%3DcuGs5I0qNqUANSTv-1"></iframe>
          <button onClick={handleShowModal} className="absolute -bottom-12 left-[50%] translate-x-[-50%] bg-[#020202] sm:w-fit px-4 h-10 flex items-center gap-2 bg-8 rounded-lg border border-neutral-500 hover:border-neutral-50 duration-150 text-sm">Zamknij</button>
        </Modal>
      </div>
    }
    <p className="mb-4 font-light">Alumi Drop to projekt, który powstał w ramach jednego z zadań podczas moich studiów. Stanowi on kreatywną kampanię reklamową dla wyimaginowanej marki, która specjalizuje się w aluminiowych butelkach.</p>
    </>
  );
};

export default Page;
