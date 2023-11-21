import { FigmaModal, Header, ProjectFooter, SkeletonImage, Text } from "@/app/components/Content";

const Page = () => {
  return (
    <>
    <Header
      lang="en"
      title="Juice."
      githubUrl="https://github.com/KrystianKurlej/juice"
      websiteUrl="https://juice-bay.vercel.app/"
    />
    <SkeletonImage
      src='/img/Juice - Header.jpg'
      alt="Juice - Header"
      width={1050}
      height={725}
    />
    <FigmaModal
      lang="en"
      title="Juice."
      iframeUrl="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FXD5Kt4NUKb9Z4kesWMqQL7%2FJuice%3Ftype%3Ddesign%26node-id%3D203%253A42%26mode%3Ddesign%26t%3DLKJHYDlEKd6mdELL-1"
      bgImgUrl="/img/Juice - Figma.jpg"
    />
    <Text>
      Juice. is a project of an e-commerce platform dedicated to selling healthy juices with various health benefits. In this project, I avoid the conventional emphasis on the naturalness of the products and instead focus on introducing a modern vision of juice trading.
    </Text>
    <SkeletonImage
      src='/img/Juice - Sklep.jpg'
      alt="Juice - Sklep"
      width={1050}
      height={548}
    />
    <Text>
      The approach to the purchasing process had to be somewhat different than in standard e-commerce platform projects. The specificity of the product means that the user should not feel that the process is too long, while still maintaining additional possibilities such as subtracting ingredients from the finished product.
    </Text>
    <SkeletonImage
      src='/img/Juice - Koszyk.jpg'
      alt="Juice - Koszyk"
      width={1050}
      height={2052}
    />
    <ProjectFooter
      lang="en"
      title="Juice."
      githubUrl="https://github.com/KrystianKurlej/juice"
      websiteUrl="https://juice-bay.vercel.app/"
    />
    </>
  );
};

export default Page;