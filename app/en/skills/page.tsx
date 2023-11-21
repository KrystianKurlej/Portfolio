import Link from "next/link";
import { ArrowRight } from "@/app/components/icons";
import { List, ListItem, Section } from "@/app/components/Content";

const Page = () => {
  return (
    <>
    <header className="py-5 px-4 mb-8">
      <h1 className="text-4xl">Skills</h1>
    </header>

    <Section
      id="development"
      label="Development"
      linkLabel="Github"
      link="https://github.com/KrystianKurlej"
    >
      <List className="mt-0">
        <ListItem text="HTML, CSS, JavaScript" className="border-none pt-0"/>
        <ListItem text="Knowledge of React.js, Next.js" />
        <ListItem text="SCSS, Bootstrap, Tailwind CSS" />
        <ListItem text="Git version control" />
        <ListItem text="WordPress theme development with plugin integration" className="pb-0"/>
      </List>
    </Section>
    
    <Section
      id="graphicDesign"
      label="Graphic Design"
      linkLabel="Behance"
      link="https://www.behance.net/krystiankurlej"
    >
      <List className="mt-0">
        <ListItem text="Fluent knowledge of the full Adobe Creative Cloud suite" className="border-none pt-0"/>
        <ListItem text="User Interface (UI/UX) design and prototyping" />
        <ListItem text="2D Animation" />
        <ListItem text="3D Visualizations and Animations" />
        <ListItem text="Video Editing" />
        <ListItem text="Creating graphics suitable for print (DTP)" className="pb-0"/>
      </List>
    </Section>
    
    <Section
      id="other"
      label="Other"
      linkLabel="LinkedIn"
      link="https://www.linkedin.com/in/krystian-kurlej-0ba001232/"
    >
      <List className="mt-0">
        <ListItem text="Understanding how to work with public and custom CMS systems" className="border-none pt-0"/>
        <ListItem text="Proficiency in project management systems like Trello" />
        <ListItem text="Familiarity with website monitoring tools (Google Tag Manager, Google Analytics)" />
        <ListItem text="Strong skills in working with Google Suite / Microsoft Office" />
        <ListItem text="Ability to optimize work on tight deadline projects" />
        <ListItem text="English language proficiency at B2 level" className="pb-0"/>
      </List>
    </Section>

    <Link href='/en/about-me' title="About me" className="mt-16 text-4xl flex gap-2 items-center">
        More about me
        <ArrowRight height={32} width={32} />
    </Link>
    </>
  );
};

export default Page;
