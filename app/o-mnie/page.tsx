import Link from "next/link";
import { List, ListItem, Section, SkeletonImage, Text } from "../components/Content";
import { ArrowRight } from "../components/icons";

const Page = () => {
  return (
    <>
    <header className="py-5 sm:px-4 mb-8 sm:flex sm:gap-5 sm:items-center">
        <SkeletonImage
            className="w-[200px] h-[200px] max-w-none mb-4"
            src='/img/KrystianKurlej.jpeg'
            alt="Krystian Kurlej"
            width={200}
            height={200}
        />
        <div>
            <h1 className="text-4xl mb-4">O mnie</h1>
            <Text>Jestem studentem informatyki stosowanej oraz pracuję jako Graphic Designer w agencji interaktywnej, gdzie głównie skupiam się na UI/UX designie. Moją pasją jest Web Development, zwłaszcza front-end.</Text>
        </div>
    </header>

    <Section
        id="experience"
        label="Doświadczenie"
    >
        <List
            title="Graphic Designer"
            subtitle="Agencja Interaktywna Argonium"
            supportText="03.2021 - Teraz"
        >
            <ListItem text="Projektowanie UX/UI" />
            <ListItem text="DTP" />
            <ListItem text="Montaż wideo" />
            <ListItem text="Animacja 2D/3D" />
            <ListItem text="Projektowanie grafiki 3D" />
            <ListItem text="Komunikacja z klientem i drukarnią" />
            <ListItem text="Nadzór nad stażystami" />
            <ListItem text="Pomoc w programowaniu front-endu" />
            <ListItem text="Obsługa stron opartych na WordPress" />
        </List>
        <List
            title="Graphic Designer"
            subtitle="Centrum Kształcenia Torus"
            supportText="01.2018 - 09.2018"
        >
            <ListItem text="DTP" />
            <ListItem text="Grafiki do mediów społecznościowych" />
            <ListItem text="Montaż wideo" />
            <ListItem text="Animacja 2D" />
        </List>
    </Section>
    
    <Section
        id="education"
        label="Edukacja"
    >
        <List
            title="Uniwersytet Ekonomiczny w Krakowie"
            subtitle="Magister"
            supportText="10.2023 - Teraz"
        >
            <ListItem text="Informatyka stosowana" />
        </List>
        <List
            title="Wyższa Szkoła Informatyki i Zarządzania z siedzibą w Rzeszowie"
            subtitle="Licencjat"
            supportText="10.2020 - 09.2023"
        >
            <ListItem text="Grafika Komputerowa i Produkcja Multimedialna" />
            <ListItem text="Specjalizacja: Graphic Design" />
        </List>
    </Section>

    <Link href='/umiejetnosci' title="Umiejętności" className="mt-16 text-4xl flex gap-2 items-center">
        Moje umiejętności
        <ArrowRight height={32} width={32} />
    </Link>
    </>
  );
};

export default Page;
