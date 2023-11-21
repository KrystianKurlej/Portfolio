import { FigmaModal, Header, ProjectFooter, ProjectImage, Text } from "@/app/components/ProjectContent";

const Page = () => {
  return (
    <>
    <Header
      lang="pl"
      title="Juice."
      githubUrl="https://github.com/KrystianKurlej/juice"
      websiteUrl="https://juice-bay.vercel.app/"
    />
    <ProjectImage
      src='/img/Juice - Header.jpg'
      alt="Juice - Header"
      width={1050}
      height={725}
    />
    <FigmaModal
      lang="pl"
      title="Juice."
      iframeUrl="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FXD5Kt4NUKb9Z4kesWMqQL7%2FJuice%3Ftype%3Ddesign%26node-id%3D203%253A42%26mode%3Ddesign%26t%3DLKJHYDlEKd6mdELL-1"
      bgImgUrl="/img/Juice - Figma.jpg"
    />
    <Text>
      Juice. to projekt platformy e-commerce, dedykowanej sprzedaży zdrowych soków o różnorodnych korzyściach dla zdrowia. W tym projekcie unikam konwencjonalnego akcentowania naturalności produktów, a skupiam się na wprowadzeniu nowoczesnej wizji handlu sokami.
    </Text>
    <ProjectImage
      src='/img/Juice - Sklep.jpg'
      alt="Juice - Sklep"
      width={1050}
      height={548}
    />
    <Text>
      Podejście do samego procesu zakupu musiało być nieco inne niż w standardowych projektach platform e-commerce. Specyfika produktu sprawia, że użytkownik nie powinien odczuwać, że proces jest zbyt długi, zachowując przy tym dodatkowe możliwości takie jak odejmowanie składników od gotowego produktu.
    </Text>
    <ProjectImage
      src='/img/Juice - Koszyk.jpg'
      alt="Juice - Koszyk"
      width={1050}
      height={2052}
    />
    <ProjectFooter
      lang="pl"
      title="Juice."
      githubUrl="https://github.com/KrystianKurlej/juice"
      websiteUrl="https://juice-bay.vercel.app/"
    />
    </>
  );
};

export default Page;
