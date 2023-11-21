'use client';

import { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import { ArrowTopRight, Close, Popup } from "./icons";
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
                icon={<ArrowTopRight />}
                iconPlacement="right"
                className="w-full sm:w-fit"
            />
        }
        {websiteUrl &&
            <Button
                label={(lang === 'pl') ? 'Strona www' : 'Website'}
                link={websiteUrl}
                linkTitle={`${title} - ${(lang === 'pl') ? 'Strona www' : 'Website'}`}
                icon={<ArrowTopRight />}
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
                iconPlacement="right"
                icon={<Popup />}
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
                    iconPlacement="right"
                    icon={<Close />}
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
            className="w-full sm:w-fit"
            iconPlacement="right"
            icon={<ArrowTopRight />}
        />
        <Button
            label={(lang === 'pl') ? 'Strona www' : 'Website'}
            link={websiteUrl}
            linkTitle={`${title} - ${(lang === 'pl') ? 'Strona www' : 'Website'}`}
            className="w-full sm:w-fit"
            iconPlacement="right"
            icon={<ArrowTopRight />}
        />
    </div>
  );
};

interface SkeletonImageProps {
    alt: string;
    src: string;
    width: number;
    height: number;
    className?: string;
}

export const SkeletonImage: React.FC<SkeletonImageProps> = ({
    alt,
    src,
    width,
    height,
    className
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
        className={`rounded ${className}`}
        onLoadingComplete={handleImageLoaded}
      />
    </div>
  );
};

interface TextProps {
    children: React.ReactNode
}

export const Text: React.FC<TextProps> = ({
    children
}) => {
  return (
    <p className="mb-4 font-light">
        {children}
    </p>
  );
};

interface SectionProps {
    children: React.ReactNode,
    id: string;
    label?: string;
    link?: string;
    linkLabel?: string;
}

export const Section: React.FC<SectionProps> = ({
    children,
    id,
    label,
    link,
    linkLabel
}) => {
  return (
    <section id={id} className="mt-8">
        {label &&
            <span className="px-4 text-neutral-500">{label}</span>
        }
        {children}
        {(link && linkLabel) &&
            <div className="px-4">
                <Button
                    label={linkLabel}
                    link={link}
                    linkTitle={linkLabel}
                    iconPlacement="right"
                    icon={<ArrowTopRight />}
                />
            </div>
        }
    </section>
  );
};

interface ListProps {
    children: React.ReactNode,
    title?: string;
    subtitle?: string;
    supportText?: string;
    className?: string;
}

export const List: React.FC<ListProps> = ({
    children,
    title,
    subtitle,
    supportText,
    className
}) => {
  return (
    <div className="p-4 rounded-lg border border-neutral-600 mb-2">
        {(subtitle || supportText) &&
            <div className="flex flex-col-reverse min-[375px]:flex-row min-[375px]:justify-between w-full mb-1">
                {subtitle &&
                    <p className="font-light">
                        {subtitle}
                    </p>
                }
                {supportText &&
                    <p className="font-light">
                        {supportText}
                    </p>
                }
            </div>
        }
        {title &&
            <h2 className="text-3xl font-medium">
                {title}
            </h2>
        }
        <ul className={`mt-4 ${className}`}>
            {children}
        </ul>
    </div>
  );
};

interface ListItemProps {
    text: string;
    className?: string;
}

export const ListItem: React.FC<ListItemProps> = ({
    text,
    className
}) => {
  return (
    <li className={`py-1 border-t border-neutral-700 font-light text-neutral-200 text-sm ${className}`}>
        {text}
    </li>
  );
};