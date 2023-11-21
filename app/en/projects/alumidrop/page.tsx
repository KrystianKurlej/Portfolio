import { FigmaModal, Header, SkeletonImage, Text } from "@/app/components/Content";

const Page = () => {
  return (
    <>
    <Header
      lang="en"
      title="AlumiDrop"
    />
    <SkeletonImage
      src='/img/AlumiDrop - Mockup.jpg'
      alt="AlumiDrop - Mockup"
      width={1050}
      height={845}
    />
    <FigmaModal
      lang="en"
      iframeUrl="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F8pinz7GYpjWfDDATur0WBZ%2FAlumiDrop%3Ftype%3Ddesign%26node-id%3D808%253A151%26mode%3Ddesign%26t%3DcuGs5I0qNqUANSTv-1"
      bgImgUrl="/img/AlumiDrop - Figma.jpg"
      title="AlumiDrop"
    />
    <Text>
      Alumi Drop is a project that was created as part of one of the tasks during my studies. It serves as a creative advertising campaign for an imaginary brand specializing in aluminum bottles.
    </Text>
    </>
  );
};

export default Page;