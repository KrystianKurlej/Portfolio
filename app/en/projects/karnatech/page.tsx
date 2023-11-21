import { FigmaModal, Header, ProjectImage, Text, ProjectFooter } from "@/app/components/ProjectContent";

const Page = () => {
  return (
    <>
    <Header
      title="Karnatech"
      lang="en"
      githubUrl="https://github.com/KrystianKurlej/Karnatech"
      websiteUrl="https://karnatech.pl/"
    />
    <ProjectImage
      src='/img/Karnatech - Header.jpg'
      alt="Karnatech - Header"
      width={1050}
      height={980}
    />
    <FigmaModal
      title="Karnatech"
      lang="en"
      bgImgUrl="/img/Karnatech - Figma.jpg"
      iframeUrl="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FKIO6hhJI48IktdgHATfla8%2FKarnatech%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DuL8CsW0ukrFLacbn-1"
    />
    <Text>
      Karnatech is a website project for a company specializing in various services such as steel construction, CNC machining, and laser cutting. The company decided to invest in a new visual identity, so the outdated website had to be updated.
    </Text>
    <Text>
      The result of my work is not only an attractive website but also a dedicated WordPress theme that perfectly reflects the company&apos;s new identity. It is still in use, providing a solid foundation for the company&apos;s website and contributing to maintaining a consistent and professional online image.
    </Text>
    <ProjectFooter
      title="Karnatech"
      lang="en"
      githubUrl="https://github.com/KrystianKurlej/Karnatech"
      websiteUrl="https://karnatech.pl/"
    />
    </>
  );
};

export default Page;