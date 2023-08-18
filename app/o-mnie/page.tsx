'use client'

import Image from "next/image";
import React, {useState} from "react";

const Page = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoaded = () => {
        setImageLoaded(true);
    };

  return (
    <>
    <header className="py-5 sm:px-4 mb-8 sm:flex sm:gap-5 sm:items-center">
        <div className={`w-[200px] h-[200px] min-w-[200px] max-w-none mx-auto mb-4 sm:mx-0 sm:mb-0 ${imageLoaded ?
        '' : 'skeleton'
        }`}>
        <Image className="w-[200px] h-[200px] max-w-none" src='/img/KrystianKurlej.jpeg' alt="Krystian Kurlej" width={200} height={200} onLoadingComplete={handleImageLoaded}/>
        </div>
        <div>
            <h1 className="text-4xl mb-4">O mnie</h1>
            <p className="font-light">Jestem doświadczonym grafikiem ze specjalizacją w UI i UX. Tworzę interfejsy, animacje i gotowe do druku grafiki. Ponadto dążę do ciągłego rozwoju w obszarze programowania front-endowego.</p>
        </div>
    </header>
    <section id="experience">
        <span className="px-4 text-neutral-500">Doświadczenie</span>
        <div className="p-4 rounded-lg border border-neutral-600 mb-2">
            <div className="flex w-full justify-between items-center mb-1">
                <p className="font-light">Agencja Interaktywna</p>
                <p className="font-light">03.2021 - Teraz</p>
            </div>
            <h2 className="text-3xl font-medium">Argonium</h2>
            <ul className="mt-4">
                <li className="py-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">Projektowanie UX/UI</li>
                <li className="py-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">DTP</li>
                <li className="py-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">Montaż wideo</li>
                <li className="py-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">Animacja 2D/3D</li>
                <li className="py-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">Projektowanie grafiki 3D</li>
                <li className="py-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">Komunikacja z klientem i drukarnią</li>
                <li className="py-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">Nadzór nad stażystami</li>
                <li className="py-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">Pomoc w programowaniu front-endu</li>
                <li className="pt-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">Obsługa stron opartych na WordPress</li>
            </ul>
        </div>
        <div className="p-4 rounded-lg border border-neutral-600 mb-2">
            <div className="flex w-full justify-between items-center mb-1">
                <p className="font-light">Centrum Kształcenia</p>
                <p className="font-light">01.2018 - 09.2018</p>
            </div>
            <h2 className="text-3xl font-medium">Torus</h2>
            <ul className="mt-4">
                <li className="py-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">DTP</li>
                <li className="py-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">Grafiki do mediów społecznościowych</li>
                <li className="py-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">Montaż wideo</li>
                <li className="pt-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">Animacja 2D</li>
            </ul>
        </div>
    </section>
    <section id="education" className="mt-8">
        <span className="px-4 text-neutral-500">Edukacja</span>
        <div className="p-4 rounded-lg border border-neutral-600 mb-2">
            <div className="flex w-full justify-between items-center mb-1">
                <p className="font-light">Licencjat</p>
                <p className="font-light">10.2020 - 09.2023</p>
            </div>
            <h2 className="text-xl font-medium">Wyższa Szkoła Informatyki i Zarządzania z siedzibą w Rzeszowie</h2>
            <ul className="mt-4">
                <li className="py-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">Grafika Komputerowa i Produkcja Multimedialna</li>
                <li className="pt-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">Specjalizacja: Graphic Design</li>
            </ul>
        </div>
    </section>
    </>
  );
};

export default Page;
