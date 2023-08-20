import Image from "next/image";
import React from "react";
import Button from "../components/Button";
import GraphicDesignIcons from "./GraphicDesignIcons";
import DevelopmentIcons from "./DevelopmentIcons";
import Software from "./Software";

const Page = () => {
  return (
    <>
    <header className="py-5 px-4 mb-8">
      <h1 className="text-4xl">Umiejętności</h1>
    </header>
    <section id="graphicDesign">
        <span className="px-4 text-neutral-500">Graphic Design</span>
        <div className="p-4 rounded-lg border border-neutral-600 mb-2">
          <ul>
              <li className="pb-1 font-light text-neutral-200 text-sm">Biegła znajomość pełnego pakietu Adobe Creative Cloud</li>
              <li className="py-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">Projektowanie interfejsu użytkownika (UI/UX) oraz tworzenie prototypów</li>
              <li className="py-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">Animacja 2D</li>
              <li className="py-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">Wizualizacje i animacje 3D</li>
              <li className="py-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">Montaż wideo</li>
              <li className="pt-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">Tworzenie grafik przystosowanych do druku (DTP)</li>
          </ul>
        </div>
        <div className="px-4 py-2 rounded-lg border border-neutral-600 mb-2">
          <Software />
        </div>
        <div className="px-4"><Button label="Behance" link="https://www.behance.net/krystiankurlej" linkTitle="Behance" /></div>
    </section>
    <section id="development" className="mt-8">
        <span className="px-4 text-neutral-500">Development</span>
        <div className="p-4 rounded-lg border border-neutral-600 mb-2">
            <ul>
              <li className="pb-1 font-light text-neutral-200 text-sm">HTML, CSS, JavaScript</li>
              <li className="py-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">SCSS, Bootstrap, Tailwind CSS</li>
              <li className="py-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">Git</li>
              <li className="py-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">Kodowanie motywów WordPress z integracją wtyczek</li>
              <li className="py-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">Analizowanie i poprawa stron z PageSpeed Insights</li>
              <li className="pt-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">Podstawowa znajomość React.js, Next.js</li>
            </ul>
        </div>
        <div className="px-4"><Button label="Github" link="https://github.com/KrystianKurlej" linkTitle="Github" /></div>
    </section>
    <section id="inne" className="mt-8">
        <span className="px-4 text-neutral-500">Inne</span>
        <div className="p-4 rounded-lg border border-neutral-600 mb-2">
            <ul>
              <li className="pb-1 font-light text-neutral-200 text-sm">Rozumienie pracy z publicznymi i niestandardowymi systemami CMS</li>
              <li className="py-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">Biegłość w systemach zarządzania projektami, takich jak Trello</li>
              <li className="py-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">Znajomość narzędzi do monitorowania stron (Google Tag Manager, Google Analytics)</li>
              <li className="py-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">Silne umiejętności pracy z Google Suite / Microsoft Office</li>
              <li className="py-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">Umiejętność optymalizacji pracy nad projektami o napiętych terminach</li>
              <li className="py-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">Współpraca z programistami front-endowymi i back-endowymi</li>
              <li className="py-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">Możliwość pracy nad wieloma projektami jednocześnie</li>
              <li className="pt-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">Język angielski na poziomie B2</li>
            </ul>
        </div>
        <div className="px-4"><Button label="Linkedin" link="https://www.linkedin.com/in/krystian-kurlej-0ba001232/" linkTitle="Linkedin" /></div>
    </section>
    </>
  );
};

export default Page;
