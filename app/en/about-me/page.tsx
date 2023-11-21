import Link from "next/link";
import { List, ListItem, Section, SkeletonImage, Text } from "@/app/components/Content";
import { ArrowRight } from "@/app/components/icons";

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
            <h1 className="text-4xl mb-4">About me</h1>
            <Text>I am a student of Applied Computer Science and work as a Graphic Designer in an interactive agency, where I primarily focus on UI/UX design. My passion lies in Web Development, particularly in front-end.</Text>
        </div>
    </header>

    <Section
        id="experience"
        label="Experience"
    >
        <List
            title="Graphic Designer"
            subtitle="Argonium Interactive agency"
            supportText="03.2021 - Now"
        >
            <ListItem text="UX/UI Design" />
            <ListItem text="DTP" />
            <ListItem text="Video Editing" />
            <ListItem text="2D/3D Animation" />
            <ListItem text="3D Graphics Design" />
            <ListItem text="Client and Print Shop Communication" />
            <ListItem text="Supervising Interns" />
            <ListItem text="Assisting with Front-end Programming" />
            <ListItem text="Handling WordPress-based Websites" />
        </List>
        <List
            title="Graphic Designer"
            subtitle="Torus Learning Center"
            supportText="01.2018 - 09.2018"
        >
            <ListItem text="DTP" />
            <ListItem text="Graphics for social media" />
            <ListItem text="Video Editing" />
            <ListItem text="2D Animation" />
        </List>
    </Section>
    
    <Section
        id="education"
        label="Education"
    >
        <List
            title="Krakow Univesity of Economics"
            subtitle="Master&apos;s degree"
            supportText="10.2023 - Now"
        >
            <ListItem text="Applied Computer Science" />
        </List>
        <List
            title="Graphic Designer"
            subtitle="Bachelor degree"
            supportText="10.2020 - 09.2023"
        >
            <ListItem text="Computer Graphics and Multimedia Production" />
            <ListItem text="Specialization: Graphic Design" />
        </List>
    </Section>

    <Link href='/en/skills' title="Skills" className="mt-16 text-4xl flex gap-2 items-center">
        My skills
        <ArrowRight height={32} width={32} />
    </Link>
    </>
  );
};

export default Page;
