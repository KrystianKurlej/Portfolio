import { FigmaModal, Header, SkeletonImage, Text, ProjectFooter } from "@/app/components/Content";

const Page = () => {
  return (
    <>
    <Header
      title="Karnatech"
      lang="pl"
      githubUrl="https://github.com/KrystianKurlej/Karnatech"
      websiteUrl="https://karnatech.pl/"
    />
    <SkeletonImage
      src='/img/Karnatech - Header.jpg'
      alt="Karnatech - Header"
      width={1050}
      height={980}
    />
    <FigmaModal
      title="Karnatech"
      lang="pl"
      bgImgUrl="/img/Karnatech - Figma.jpg"
      iframeUrl="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FKIO6hhJI48IktdgHATfla8%2FKarnatech%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DuL8CsW0ukrFLacbn-1"
    />
    <Text>
      Karnatech to projekt strony internetowej dla firmy specjalizującej się w różnorodnych usługach, takich jak tworzenie konstrukcji stalowych, obróbka CNC oraz cięcie laserem. Firma postanowiła zainwestować w nową identyfikację wizualną, dlatego też przestarzała już strona internetowa musiała być zaktualizowana.
    </Text>
    <Text>
      Efektem mojej pracy jest nie tylko atrakcyjna strona internetowa, ale także dedykowany motyw WordPress, który idealnie odzwierciedla nową tożsamość firmy. Jest on wciąż w użyciu, stanowiąc solidną podstawę dla strony internetowej firmy oraz przyczyniając się do utrzymania spójnego i profesjonalnego wizerunku online.
    </Text>
    <ProjectFooter
      title="Karnatech"
      lang="pl"
      githubUrl="https://github.com/KrystianKurlej/Karnatech"
      websiteUrl="https://karnatech.pl/"
    />
    </>
  );
};

export default Page;
