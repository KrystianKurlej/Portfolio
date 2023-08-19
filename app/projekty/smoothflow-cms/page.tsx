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
      <h1 className="text-4xl mb-4 sm:mb-0">SmoothFlow CMS</h1>
      <div className="flex gap-2 w-full sm:w-fit">
        <Button label="Github" link="https://github.com/KrystianKurlej/SmoothFlow-CMS" linkTitle="SmoothFlow CMS - Github" />
        <Button label="Strona www" link="https://smooth-flow-cms.vercel.app/" linkTitle="SmoothFlow CMS - Strona www" />
      </div>
    </header>
    <div className={`rounded my-8 ${imageLoaded ? '' : 'skeleton' }`}><Image src='/img/SmoothFlow CMS - Mockup.jpg' alt="SmoothFlow CMS - Mockup" width={1050} height={701} className="rounded" onLoadingComplete={handleImageLoaded}/></div>
    <p className="mb-4 font-light">SmoothFlow CMS to mój osobisty projekt systemu CMS. Popularne systemy CMS takie jak WordPress, nadal sprawiają dużo trudności klientom, dlatego podjąłem wyzwanie zaprojektowania własnego rozwiązania. Bazując na gotowym projekcie witryny, stworzyłem spersonalizowane funkcje w ramach systemu CMS. Planuję kontynuować rozwijanie systemu, opierając się stopniowo o kolejne strony i możliwości, aby uzyskać ostatecznie wszechstronne rozwiązanie.</p>
    <iframe className="w-full my-8 rounded" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fwh67UnBVuRmaYfExcPje22%2FSmoothFlowCMS%3Ftype%3Ddesign%26node-id%3D505%253A2969%26mode%3Ddesign%26t%3DZRSl0hXWAVWUa7xq-1"></iframe>
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
