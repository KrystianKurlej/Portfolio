import Button from "@/app/components/Button";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <>
    <header className="my-12 sm:flex items-center justify-between">
      <h1 className="text-4xl mb-4 sm:mb-0">Boost Genius</h1>
    </header>
    <Image src='/img/Boost Genius - Header.jpg' alt="BoostGenius - Header" width={1050} height={521} className="rounded my-8"/>
    <p className="mb-4 font-light">Boost Genius to obszerny projekt serwisu internetowego, który oferuje usługi związane z tzw. „boostingiem” w grze League of Legends. Jest on aktualnie w trakcie realizacji.<br />Serwis charakteryzuje się dość zaawansowanym formularzem zamówień, ze względu na specyfikę usług. Wszystkie cechy zaznaczane są przez użytkownika przed złożeniem zamówienia, a na tej podstawie automatycznie generuje się jego cena.</p>
    <Image src='/img/BoostGenius - Formularz.jpg' alt="BoostGenius - Formularz" width={1050} height={701} className="rounded my-8"/>
    <p className="mb-4 font-light">Dodatkowo, serwis nie tylko służy do składania, ale i prowadzenia zamówienia. Zarówno użytkownicy jak i pracownicy serwisu mają dostęp do swoich paneli, w których mogą obsługiwać aktualne zamówienie.</p>
    <iframe className="w-full my-8 rounded" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F6CBZMSfsUwCXV6GodEUfCo%2FBoost-Genius%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DTM4vxJiYSBGADbMb-1"></iframe>
    <p className="mb-4 font-light">Na stronie zostały użyte również materiały graficzne wykonane za pomocą grafiki 3D. Sprawdziła się ona idealnie prezentując różne poziomy gry dostępne w formularzu.</p>
    <Image src='/img/BoostGenius - 3D.jpg' alt="BoostGenius - 3D" width={1050} height={774} className="rounded my-8"/>
    </>
  );
};

export default Page;
