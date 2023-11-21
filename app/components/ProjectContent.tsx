'use client';

import { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import { ArrowRight } from "./icons";
import Modal from "./Modal";

interface HeaderProps {
    title: string;
    lang: 'pl' | 'en';
    githubUrl?: string;
    websiteUrl?: string;
}

export const Header: React.FC<HeaderProps> = ({
    title,
    lang,
    githubUrl,
    websiteUrl
}) => {
  return (
    <header className="my-12 sm:flex items-center justify-between">
      <h1 className="text-4xl mb-4 sm:mb-0">{title}</h1>
      {(githubUrl || websiteUrl) &&
        <div className="flex gap-2 w-full sm:w-fit">
        {githubUrl &&
            <Button
                label="Github"
                link={githubUrl}
                linkTitle={`${title} - Github`}
                icon={<ArrowRight />}
                iconPlacement="right"
                className="w-full sm:w-fit"
            />
        }
        {websiteUrl &&
            <Button
                label={(lang === 'pl') ? 'Strona www' : 'Website'}
                link={websiteUrl}
                linkTitle={`${title} - ${(lang === 'pl') ? 'Strona www' : 'Website'}`}
                icon={<ArrowRight />}
                iconPlacement="right"
                className="w-full sm:w-fit"
            />
        }
        </div>
      }
    </header>
  );
};

interface FigmaModalProps {
    title: string;
    lang: 'pl' | 'en';
    iframeUrl: string;
    bgImgUrl: string;
}

export const FigmaModal: React.FC<FigmaModalProps> = ({
    title,
    lang,
    iframeUrl,
    bgImgUrl
}) => {
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => {
        setShowModal(!showModal)
        setIframeLoaded(false)
    };

    const [iframeLoaded, setIframeLoaded] = useState(false);
    const handleIframeLoaded = () => {
        setIframeLoaded(true);
    };

    return (
        <>
        <div className="w-full my-8 p-8 rounded-lg flex flex-col gap-4 items-center text-2xl border border-neutral-500 relative">
            {(lang === 'pl') ? 'Projekt w figmie' : 'Figma project'}
            <Button
                label={(lang === 'pl') ? 'Otwórz pop-up' : 'Open project'}
                onClick={handleShowModal}
            />
            <Image
                src={bgImgUrl}
                alt={`${title} - Figma`}
                width={1000}
                height={368}
                className="absolute top-0 w-full h-full object-cover -z-10"
            />
        </div>
        {showModal &&
            <div onClick={handleShowModal} className="fixed fixed-center bg-neutral-500/[0.2] w-full h-[100svh] z-40">
                <div className={iframeLoaded ? 'lds-ring opacity-0 z-50' : 'lds-ring opacity-100 z-50'}><div></div><div></div><div></div><div></div></div>
                <Modal>
                <iframe
                    onLoad={handleIframeLoaded}
                    className={iframeLoaded ? 'w-full rounded opacity-100' : 'w-full rounded opacity-0'}
                    width="800"
                    height="600"
                    src={iframeUrl}
                >
                </iframe>
                <Button
                    label={(lang === 'pl') ? 'Zamknij' : 'Close'}
                    className="absolute -bottom-12 left-[50%] translate-x-[-50%]"
                    onClick={handleShowModal}
                />
                </Modal>
            </div>
        }
        </>
    );
};

interface ProjectFooterProps {
    title: string;
    lang: 'pl' | 'en';
    githubUrl?: string;
    websiteUrl?: string;
}

export const ProjectFooter: React.FC<ProjectFooterProps> = ({
    title,
    lang,
    githubUrl,
    websiteUrl
}) => {
  return (
    <div className="mt-8 flex gap-2 w-full sm:w-fit">
        <Button
            label="Github"
            link={githubUrl}
            linkTitle={`${title} - Github`}
        />
        <Button
            label={(lang === 'pl') ? 'Strona www' : 'Website'}
            link={websiteUrl}
            linkTitle={`${title} - ${(lang === 'pl') ? 'Strona www' : 'Website'}`}
        />
    </div>
  );
};

interface ProjectImageProps {
    alt: string;
    src: string;
    width: number;
    height: number;
}

export const ProjectImage: React.FC<ProjectImageProps> = ({
    alt,
    src,
    width,
    height
}) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const handleImageLoaded = () => {
        setImageLoaded(true);
    };

  return (
    <div className={`rounded my-8 ${imageLoaded ? '' : 'skeleton' }`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded"
        onLoadingComplete={handleImageLoaded}
      />
    </div>
  );
};

export function Text({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <p className="mb-4 font-light">
        {children}
    </p>
  );
};
