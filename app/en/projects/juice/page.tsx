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
        <Button label="Website" link="https://juice-bay.vercel.app/" linkTitle="Juice. - Website" />
      </div>
    </header>
    <div className={`rounded my-8 ${imageLoaded ? '' : 'skeleton' }`}><Image src='/img/Juice - Header.jpg' alt="Juice - Header" width={1050} height={725} className="rounded" onLoadingComplete={handleImageLoaded}/></div>
    <div className="w-full my-8 p-8 rounded-lg flex flex-col gap-4 items-center text-2xl border border-neutral-500 relative">
      Figma project<button onClick={handleShowModal} className=" bg-[#020202] px-4 h-10 flex items-center gap-2 bg-8 rounded-lg border border-neutral-500 hover:border-neutral-50 duration-150 text-sm">Open project</button>
      <Image src='/img/Juice - Figma.jpg' alt="Juice - Figma" width={1000} height={368} className="absolute top-0 w-full h-full object-cover -z-10" />
    </div>
    {showModal &&
      <div onClick={handleShowModal} className="fixed fixed-center bg-neutral-500/[0.2] w-full h-[100svh] z-40">
        <div className={iframeLoaded ? 'lds-ring opacity-0 z-50' : 'lds-ring opacity-100 z-50'}><div></div><div></div><div></div><div></div></div>
        <Modal>
          <iframe onLoad={handleIframeLoaded} className={iframeLoaded ? 'w-full rounded opacity-100' : 'w-full rounded opacity-0'} width="800" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FXD5Kt4NUKb9Z4kesWMqQL7%2FJuice%3Ftype%3Ddesign%26node-id%3D203%253A42%26mode%3Ddesign%26t%3DLKJHYDlEKd6mdELL-1" ></iframe>
          <button onClick={handleShowModal} className="absolute -bottom-12 left-[50%] translate-x-[-50%] bg-[#020202] sm:w-fit px-4 h-10 flex items-center gap-2 bg-8 rounded-lg border border-neutral-500 hover:border-neutral-50 duration-150 text-sm">Close</button>
        </Modal>
      </div>
    }
    <p className="mb-4 font-light">Juice. is a project of an e-commerce platform dedicated to selling healthy juices with various health benefits. In this project, I avoid the conventional emphasis on the naturalness of the products and instead focus on introducing a modern vision of juice trading.</p>
    <div className={`rounded my-8 ${imageLoaded ? '' : 'skeleton' }`}><Image src='/img/Juice - Sklep.jpg' alt="Juice - Sklep" width={1050} height={548} className="rounded" onLoadingComplete={handleImageLoaded}/></div>
    <p className="mb-4 font-light">The approach to the purchasing process had to be somewhat different than in standard e-commerce platform projects. The specificity of the product means that the user should not feel that the process is too long, while still maintaining additional possibilities such as subtracting ingredients from the finished product.</p>
    <div className={`rounded my-8 ${imageLoaded ? '' : 'skeleton' }`}><Image src='/img/Juice - Koszyk.jpg' alt="Juice - Koszyk" width={1050} height={2052} className="rounded" onLoadingComplete={handleImageLoaded}/></div>
    <p className="mb-4 font-light">One of the elements is the juice configurator, which is a significant part of the website. This interactive module allows users to independently create their own unique juices, tailored to their individual preferences and needs. It is this functionality that expresses the project&apos;s commitment to creating personalized shopping experiences.</p>
    <div className={`rounded mt-8 mb-2 ${imageLoaded ? '' : 'skeleton' }`}><Image src='/img/Juice - Konfigurator1.jpg' alt="Juice - Konfigurator1" width={1660} height={628} className="rounded" onLoadingComplete={handleImageLoaded}/></div>
    <div className={`rounded my-2 ${imageLoaded ? '' : 'skeleton' }`}><Image src='/img/Juice - Konfigurator2.jpg' alt="Juice - Konfigurator2" width={1660} height={628} className="rounded" onLoadingComplete={handleImageLoaded}/></div>
    <div className={`rounded my-2 ${imageLoaded ? '' : 'skeleton' }`}><Image src='/img/Juice - Konfigurator3.jpg' alt="Juice - Konfigurator3" width={1660} height={628} className="rounded" onLoadingComplete={handleImageLoaded}/></div>
    <div className={`rounded mb-8 mt-2 ${imageLoaded ? '' : 'skeleton' }`}><Image src='/img/Juice - Konfigurator4.jpg' alt="Juice - Konfigurator4" width={1660} height={628} className="rounded" onLoadingComplete={handleImageLoaded}/></div>
    <p className="mb-4 font-light">I additionally implement the project using Next.js, and it serves as the current foundation for developing <Link className="underline font-normal" href='/en/projects/smoothflow-cms/' title="SmoothFlow CMS">my CMS system.</Link>.</p>
    <div className="mt-8 flex gap-2 w-full sm:w-fit">
      <Button label="Github" link="https://github.com/KrystianKurlej/juice" linkTitle="Juice. - Github" />
      <Button label="Website" link="https://juice-bay.vercel.app/" linkTitle="Juice. - Website" />
    </div>
    </>
  );
};

export default Page;
