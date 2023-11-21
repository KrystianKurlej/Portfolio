import { FigmaModal, Header, SkeletonImage, Text } from "@/app/components/Content";

const Page = () => {
  return (
    <>
    <Header
      lang="pl"
      title="AlumiDrop"
    />
    <SkeletonImage
      src='/img/AlumiDrop - Mockup.jpg'
      alt="AlumiDrop - Mockup"
      width={1050}
      height={845}
    />
    <FigmaModal
      lang="pl"
      iframeUrl="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F8pinz7GYpjWfDDATur0WBZ%2FAlumiDrop%3Ftype%3Ddesign%26node-id%3D808%253A151%26mode%3Ddesign%26t%3DcuGs5I0qNqUANSTv-1"
      bgImgUrl="/img/AlumiDrop - Figma.jpg"
      title="AlumiDrop"
    />
    <Text>
      Alumi Drop to projekt, który powstał w ramach jednego z zadań podczas moich studiów. Stanowi on kreatywną kampanię reklamową dla wyimaginowanej marki, która specjalizuje się w aluminiowych butelkach.
    </Text>
    </>
  );
};

export default Page;
