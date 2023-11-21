import React from "react";
import Button from "../components/Button";
import Link from "next/link";
import { ArrowRight } from "../components/icons";
import { Section, List, ListItem } from "../components/Content";

const Page = () => {
  return (
    <>
    <header className="py-5 px-4 mb-8">
      <h1 className="text-4xl">Umiejętności</h1>
    </header>

    <Section
      id="development"
      label="Development"
      linkLabel="Github"
      link="https://github.com/KrystianKurlej"
    >
      <List>
        <ListItem text="HTML, CSS, JavaScript" className="border-none pt-0"/>
        <ListItem text="Znajomość React.js, Next.js" />
        <ListItem text="SCSS, Bootstrap, Tailwind CSS" />
        <ListItem text="Kontrola wersji za pomocą Git" />
        <ListItem text="Kodowanie motywów WordPress z integracją wtyczek" className="pb-0"/>
      </List>
    </Section>
    
    <Section
      id="graphicDesign"
      label="Graphic Design"
      linkLabel="Behance"
      link="https://www.behance.net/krystiankurlej"
    >
      <List>
        <ListItem text="Biegła znajomość pełnego pakietu Adobe Creative Cloud" className="border-none pt-0"/>
        <ListItem text="Projektowanie interfejsu użytkownika (UI/UX) oraz tworzenie prototypów" />
        <ListItem text="Animacja 2D" />
        <ListItem text="Wizualizacje i animacje 3D" />
        <ListItem text="Montaż wideo" />
        <ListItem text="Tworzenie grafik przystosowanych do druku (DTP)" className="pb-0"/>
      </List>
    </Section>
    
    <Section
      id="inne"
      label="Inne"
      linkLabel="LinkedIn"
      link="https://www.linkedin.com/in/krystian-kurlej-0ba001232/"
    >
      <List>
        <ListItem text="Rozumienie pracy z publicznymi i niestandardowymi systemami CMS" className="border-none pt-0"/>
        <ListItem text="Biegłość w systemach zarządzania projektami, takich jak Trello" />
        <ListItem text="Znajomość narzędzi do monitorowania stron (Google Tag Manager, Google Analytics)" />
        <ListItem text="Silne umiejętności pracy z Google Suite / Microsoft Office" />
        <ListItem text="Umiejętność optymalizacji pracy nad projektami o napiętych terminach" />
        <ListItem text="Język angielski na poziomie B2" className="pb-0"/>
      </List>
    </Section>

    <Link href='/o-mnie' title="O mnie" className="mt-16 text-4xl flex gap-2 items-center">
        Więcej o mnie
        <ArrowRight height={32} width={32} />
    </Link>
    </>
  );
};

export default Page;
