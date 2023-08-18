import Button from "@/app/components/Button";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
    <header className="my-12 sm:flex items-center justify-between">
      <h1 className="text-4xl mb-4 sm:mb-0">SmoothFlow CMS</h1>
      <div className="flex gap-2 w-full sm:w-fit">
        <Button label="Github" link="https://github.com/KrystianKurlej/SmoothFlow-CMS" linkTitle="SmoothFlow CMS - Github" />
        <Button label="Strona www" link="https://smooth-flow-cms.vercel.app/" linkTitle="SmoothFlow CMS - Strona www" />
      </div>
    </header>
    <p className="mb-4 font-light">SmoothFlow CMS to mój osobisty projekt systemu CMS. Popularne systemy CMS takie jak WordPress, nadal sprawiają dużo trudności klientom, dlatego podjąłem wyzwanie zaprojektowania własnego rozwiązania. Bazując na gotowym projekcie witryny, stworzyłem spersonalizowane funkcje w ramach systemu CMS. Planuję kontynuować rozwijanie systemu, opierając się stopniowo o kolejne strony i możliwości, aby uzyskać ostatecznie wszechstronne rozwiązanie.</p>
    <Image src='/img/SmoothFlow CMS - Mockup.jpg' alt="SmoothFlow CMS - Mockup" width={1920} height={1280} className="rounded my-8"/>
    <p className="mb-4 font-light">W trakcie tworzenia projektu w narzędziu Figma oparłem się na klasach Tailwind CSS. Wykorzystałem nazwy klas do definiowania zmiennych i stylów, co znacząco ułatwia programowanie tych elementów na późniejszych etapach.</p>
    <Image src='/img/SmoothFlow CMS - Tailwind.jpg' alt="SmoothFlow CMS - Tailwind" width={1920} height={1282} className="rounded my-8"/>
    <p className="mb-4 font-light">Dążąc do dalszego rozwoju, pracuję nad implementacją systemu przy użyciu frameworka Next.js, co można śledzić na moim profilu GitHub.</p>
    </>
  );
};

export default page;
