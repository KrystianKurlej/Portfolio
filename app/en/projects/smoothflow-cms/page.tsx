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
        <Button label="Website" link="https://smooth-flow-cms.vercel.app/" linkTitle="SmoothFlow CMS - Website" />
      </div>
    </header>
    <div className={`rounded my-8 ${imageLoaded ? '' : 'skeleton' }`}><Image src='/img/SmoothFlow CMS - Mockup.jpg' alt="SmoothFlow CMS - Mockup" width={1050} height={701} className="rounded" onLoadingComplete={handleImageLoaded}/></div>
    <div className="w-full my-8 p-8 rounded-lg flex flex-col gap-4 items-center text-2xl border border-neutral-500 relative">
      Figma project<button onClick={handleShowModal} className=" bg-[#020202] px-4 h-10 flex items-center gap-2 bg-8 rounded-lg border border-neutral-500 hover:border-neutral-50 duration-150 text-sm">Open project</button>
      <Image src='/img/SmoothFlow CMS - Figma.jpg' alt="SmoothFlow CMS - Figma" width={1000} height={368} className="absolute top-0 w-full h-full object-cover -z-10" />
    </div>
    {showModal &&
      <div onClick={handleShowModal} className="fixed fixed-center bg-neutral-500/[0.2] w-full h-[100svh] z-40">
        <div className={iframeLoaded ? 'lds-ring opacity-0 z-50' : 'lds-ring opacity-100 z-50'}><div></div><div></div><div></div><div></div></div>
        <Modal>
          <iframe onLoad={handleIframeLoaded} className={iframeLoaded ? 'w-full rounded opacity-100' : 'w-full rounded opacity-0'} width="800" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fwh67UnBVuRmaYfExcPje22%2FSmoothFlowCMS%3Ftype%3Ddesign%26node-id%3D505%253A2969%26mode%3Ddesign%26t%3DZRSl0hXWAVWUa7xq-1"></iframe>
          <button onClick={handleShowModal} className="absolute -bottom-12 left-[50%] translate-x-[-50%] bg-[#020202] sm:w-fit px-4 h-10 flex items-center gap-2 bg-8 rounded-lg border border-neutral-500 hover:border-neutral-50 duration-150 text-sm">Close</button>
        </Modal>
      </div>
    }
    <p className="mb-4 font-light">SmoothFlow CMS is my personal CMS system project. Popular CMS systems like WordPress still pose a lot of difficulties for clients, which is why I took on the challenge of designing my own solution. Based on an existing website project, I created personalized features within the CMS system. I plan to continue developing the system, gradually building on additional pages and capabilities to ultimately achieve a versatile solution.</p>
    <p className="mb-4 font-light">While creating the project in Figma, I relied on Tailwind CSS classes. I used class names to define variables and styles, which significantly facilitates programming these elements in later stages.</p>
    <div className={`rounded my-8 ${imageLoaded ? '' : 'skeleton'}`}><Image src='/img/SmoothFlow CMS - Tailwind.jpg' alt="SmoothFlow CMS - Tailwind" width={1050} height={701} className="rounded" onLoadingComplete={handleImageLoaded}/></div>
    <p className="mb-4 font-light">Striving for further development, I am working on implementing the system using the Next.js framework, which can be tracked on my GitHub profile.</p>
    <div className="mt-8 flex gap-2 w-full sm:w-fit">
      <Button label="Github" link="https://github.com/KrystianKurlej/SmoothFlow-CMS" linkTitle="SmoothFlow CMS - Github" />
      <Button label="Website" link="https://smooth-flow-cms.vercel.app/" linkTitle="SmoothFlow CMS - Website" />
    </div>
    </>
  );
};

export default Page;
