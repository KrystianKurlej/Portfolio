'use client'

import Image from "next/image";
import React, {useState} from "react";
import Link from "next/link";

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
            <p className="font-light">Jestem doświadczonym grafikiem specjalizującym się w UI i UX. Tworzę interfejsy, animacje i gotowe do druku grafiki. Ponadto dążę do ciągłego rozwoju w obszarze programowania front-endowego.</p>
        </div>
    </header>
    <section id="experience">
        <span className="px-4 text-neutral-500">Doświadczenie</span>
        <div className="p-4 rounded-lg border border-neutral-600 mb-2">
            <div className="flex flex-col-reverse min-[375px]:flex-row min-[375px]:justify-between w-full mb-1">
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
            <div className="flex flex-col-reverse min-[375px]:flex-row min-[375px]:justify-between w-full mb-1">
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
            <div className="flex flex-col-reverse min-[375px]:flex-row min-[375px]:justify-between w-full mb-1">
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
    <Link href='/umiejetnosci' title="Umiejętności" className="mt-16 text-4xl flex gap-2 items-center">
        Moje umiejętności
        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.8665 14.2333L8.93319 14.2333C8.55541 14.2333 8.23853 14.3613 7.98253 14.6173C7.72653 14.8733 7.59897 15.1897 7.59986 15.5666C7.59986 15.9444 7.72786 16.2613 7.98386 16.5173C8.23986 16.7733 8.5563 16.9009 8.93319 16.9L19.8665 16.9L15.9999 20.7666C15.7554 21.0111 15.6332 21.3222 15.6332 21.7C15.6332 22.0777 15.7554 22.3889 15.9999 22.6333C16.2443 22.8777 16.5554 23 16.9332 23C17.311 23 17.6221 22.8777 17.8665 22.6333L23.9999 16.5C24.2665 16.2333 24.3999 15.9222 24.3999 15.5666C24.3999 15.2111 24.2665 14.9 23.9999 14.6333L17.8665 8.49997C17.6221 8.25552 17.311 8.1333 16.9332 8.1333C16.5554 8.1333 16.2443 8.25552 15.9999 8.49997C15.7554 8.74441 15.6332 9.05552 15.6332 9.4333C15.6332 9.81108 15.7554 10.1222 15.9999 10.3666L19.8665 14.2333Z" fill="white"/>
        </svg>
    </Link>
    </>
  );
};

export default Page;
