import Button from "@/app/components/Button";
import React from "react";

const Page = () => {
  return (
    <>
    <header className="my-12 sm:flex items-center justify-between">
      <h1 className="text-4xl mb-4 sm:mb-0">Juice.</h1>
      <div className="flex gap-2 w-full sm:w-fit">
        <Button label="Github" link="https://github.com/KrystianKurlej/juice" linkTitle="Juice. - Github" />
        <Button label="Strona www" link="https://juice-bay.vercel.app/" linkTitle="Juice. - Strona www" />
      </div>
    </header>
    <p className="mb-4 font-light">Juice. to projekt platformy e-commerce, dedykowanej sprzedaży zdrowych soków o różnorodnych korzyściach dla zdrowia. W tym projekcie unikam konwencjonalnego akcentowania naturalności produktów, a skupiam się na wprowadzeniu nowoczesnej wizji handlu sokami.</p>
    <p className="mb-4 font-light">Podejście do samego procesu zakupu musiało być nieco inne niż w standardowych projektach platform e-commerce. Specyfika produktu sprawia, że użytkownik nie powinien odczuwać, że proces jest zbyt długi, zachowując przy tym dodatkowe możliwości takie jak odejmowanie składników od gotowego produktu.</p>
    <p className="mb-4 font-light">Jednym z elementów jest konfigurator soków, stanowiący istotny element witryny. Ten interaktywny moduł umożliwia użytkownikom samodzielne komponowanie swoich unikalnych soków, dostosowanych do indywidualnych upodobań i potrzeb. To właśnie ta funkcjonalność wyraża zaangażowanie projektu w kreowanie personalizowanych doświadczeń zakupowych.</p>
    <p className="mb-4 font-light">Projekt dodatkowo realizuję używając Next.js i służy mi on jako obecna baza do rozwoju autorskiego systemu CMS.</p>
    <div className="mt-8 flex gap-2 w-full sm:w-fit">
      <Button label="Github" link="https://github.com/KrystianKurlej/juice" linkTitle="Juice. - Github" />
      <Button label="Strona www" link="https://juice-bay.vercel.app/" linkTitle="Juice. - Strona www" />
    </div>
    </>
  );
};

export default Page;
