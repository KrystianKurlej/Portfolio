import React from "react";
import Button from "../../components/Button";
import Link from "next/link";

const Page = () => {
  return (
    <>
    <header className="py-5 px-4 mb-8">
      <h1 className="text-4xl">Skills</h1>
    </header>
    <section id="development">
        <span className="px-4 text-neutral-500">Development</span>
        <div className="p-4 rounded-lg border border-neutral-600 mb-2">
            <ul>
                <li className="pb-1 font-light text-neutral-200 text-sm">HTML, CSS, JavaScript</li>
                <li className="pt-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">knowledge of React.js, Next.js</li>
                <li className="py-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">SCSS, Bootstrap, Tailwind CSS</li>
                <li className="py-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">Git version control</li>
                <li className="py-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">WordPress theme development with plugin integration</li>
            </ul>
        </div>
        <div className="px-4"><Button label="Github" link="https://github.com/KrystianKurlej" linkTitle="Github" /></div>
    </section>
    <section id="graphicDesign" className="mt-8">
        <span className="px-4 text-neutral-500">Graphic Design</span>
        <div className="p-4 rounded-lg border border-neutral-600 mb-2">
          <ul>
            <li className="pb-1 font-light text-neutral-200 text-sm">Fluent knowledge of the full Adobe Creative Cloud suite</li>
            <li className="py-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">User Interface (UI/UX) design and prototyping</li>
            <li className="py-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">2D Animation</li>
            <li className="py-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">3D Visualizations and Animations</li>
            <li className="py-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">Video Editing</li>
            <li className="pt-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">Creating graphics suitable for print (DTP)</li>
          </ul>
        </div>
        <div className="px-4"><Button label="Behance" link="https://www.behance.net/krystiankurlej" linkTitle="Behance" /></div>
    </section>
    <section id="inne" className="mt-8">
        <span className="px-4 text-neutral-500">Other</span>
        <div className="p-4 rounded-lg border border-neutral-600 mb-2">
            <ul>
                <li className="pb-1 font-light text-neutral-200 text-sm">Understanding how to work with public and custom CMS systems</li>
                <li className="py-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">Proficiency in project management systems like Trello</li>
                <li className="py-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">Familiarity with website monitoring tools (Google Tag Manager, Google Analytics)</li>
                <li className="py-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">Strong skills in working with Google Suite / Microsoft Office</li>
                <li className="py-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">Ability to optimize work on tight deadline projects</li>
                <li className="pt-1 border-t border-neutral-700 font-light text-neutral-200 text-sm">English language proficiency at B2 level</li>
            </ul>
        </div>
        <div className="px-4"><Button label="Linkedin" link="https://www.linkedin.com/in/krystian-kurlej-0ba001232/" linkTitle="Linkedin" /></div>
    </section>
    <Link href='/en/about-me' title="About me" className="mt-16 text-4xl flex gap-2 items-center">
        More about me
        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.8665 14.2333L8.93319 14.2333C8.55541 14.2333 8.23853 14.3613 7.98253 14.6173C7.72653 14.8733 7.59897 15.1897 7.59986 15.5666C7.59986 15.9444 7.72786 16.2613 7.98386 16.5173C8.23986 16.7733 8.5563 16.9009 8.93319 16.9L19.8665 16.9L15.9999 20.7666C15.7554 21.0111 15.6332 21.3222 15.6332 21.7C15.6332 22.0777 15.7554 22.3889 15.9999 22.6333C16.2443 22.8777 16.5554 23 16.9332 23C17.311 23 17.6221 22.8777 17.8665 22.6333L23.9999 16.5C24.2665 16.2333 24.3999 15.9222 24.3999 15.5666C24.3999 15.2111 24.2665 14.9 23.9999 14.6333L17.8665 8.49997C17.6221 8.25552 17.311 8.1333 16.9332 8.1333C16.5554 8.1333 16.2443 8.25552 15.9999 8.49997C15.7554 8.74441 15.6332 9.05552 15.6332 9.4333C15.6332 9.81108 15.7554 10.1222 15.9999 10.3666L19.8665 14.2333Z" fill="white"/>
        </svg>
    </Link>
    </>
  );
};

export default Page;
