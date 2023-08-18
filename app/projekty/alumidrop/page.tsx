import Button from "@/app/components/Button";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <>
    <header className="my-12 sm:flex items-center justify-between">
      <h1 className="text-4xl mb-4 sm:mb-0">AlumiDrop</h1>
    </header>
    <p className="mb-4 font-light">Alumi Drop to projekt, który powstał w ramach jednego z zadań podczas moich studiów. Stanowi on kreatywną kampanię reklamową dla wyimaginowanej marki, która specjalizuje się w aluminiowych butelkach.</p>
    <iframe className="w-full my-8 rounded" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F8pinz7GYpjWfDDATur0WBZ%2FAlumiDrop%3Ftype%3Ddesign%26node-id%3D808%253A151%26mode%3Ddesign%26t%3DcuGs5I0qNqUANSTv-1"></iframe>
    </>
  );
};

export default Page;
