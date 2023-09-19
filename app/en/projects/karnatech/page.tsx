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
      <h1 className="text-4xl mb-4 sm:mb-0">Karnatech</h1>
      <div className="flex gap-2 w-full sm:w-fit">
        <Button label="Github" link="https://github.com/KrystianKurlej/Karnatech" linkTitle="SmoothFlow CMS - Github" />
        <Button label="Website" link="https://karnatech.pl/" linkTitle="Karnatech - Website" />
      </div>
    </header>
    <div className={`rounded my-8 ${imageLoaded ? '' : 'skeleton' }`}><Image src='/img/Karnatech - Header.jpg' alt="Karnatech - Header" width={1050} height={980} className="rounded" onLoadingComplete={handleImageLoaded}/></div>
    <div className="w-full my-8 p-8 rounded-lg flex flex-col gap-4 items-center text-2xl border border-neutral-500 relative">
      Figma project<button onClick={handleShowModal} className=" bg-[#020202] px-4 h-10 flex items-center gap-2 bg-8 rounded-lg border border-neutral-500 hover:border-neutral-50 duration-150 text-sm">Open project</button>
      <Image src='/img/Karnatech - Figma.jpg' alt="Karnatech - Figma" width={1000} height={368} className="absolute top-0 w-full h-full object-cover -z-10" />
    </div>
    {showModal &&
      <div onClick={handleShowModal} className="fixed fixed-center bg-neutral-500/[0.2] w-full h-[100svh] z-40">
        <div className={iframeLoaded ? 'lds-ring opacity-0 z-50' : 'lds-ring opacity-100 z-50'}><div></div><div></div><div></div><div></div></div>
        <Modal>
          <iframe onLoad={handleIframeLoaded} className={iframeLoaded ? 'w-full rounded opacity-100' : 'w-full rounded opacity-0'} width="800" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FKIO6hhJI48IktdgHATfla8%2FKarnatech%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DuL8CsW0ukrFLacbn-1"></iframe>
          <button onClick={handleShowModal} className="absolute -bottom-12 left-[50%] translate-x-[-50%] bg-[#020202] sm:w-fit px-4 h-10 flex items-center gap-2 bg-8 rounded-lg border border-neutral-500 hover:border-neutral-50 duration-150 text-sm">Close</button>
        </Modal>
      </div>
    }
    <p className="mb-4 font-light">Karnatech is a website project for a company specializing in various services such as steel construction, CNC machining, and laser cutting. The company decided to invest in a new visual identity, so the outdated website had to be updated.</p>
    <p className="mb-4 font-light">The result of my work is not only an attractive website but also a dedicated WordPress theme that perfectly reflects the company&apos;s new identity. It is still in use, providing a solid foundation for the company&apos;s website and contributing to maintaining a consistent and professional online image.</p>
    <div className="mt-8 flex gap-2 w-full sm:w-fit">
      <Button label="Github" link="https://github.com/KrystianKurlej/Karnatech" linkTitle="SmoothFlow CMS - Github" />
      <Button label="Website" link="https://karnatech.pl/" linkTitle="Karnatech - Website" />
    </div>
    </>
  );
};

export default Page;
