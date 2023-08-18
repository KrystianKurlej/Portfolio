import React from "react";
import PortfolioCard from "./components/PortfolioCard";
import Nav from "./components/Nav";

const Page = () => {
  return (
    <>
    <Nav currentPage="Portfolio" />
    <main className="max-w-[1800px] px-2.5 mx-auto grid md:grid-cols-2 gap-3">
      <PortfolioCard title="Juice" slug="juice" />
      <PortfolioCard title="SmoothFlow CMS" slug="smoothflow-cms" />
      <PortfolioCard title="Karnatech" slug="karnatech" />
      <PortfolioCard title="Boost Genius" slug="boost-genius" />
      <PortfolioCard title="AlumiDrop" slug="alumidrop" />
    </main>
    </>
  );
};

export default Page;
