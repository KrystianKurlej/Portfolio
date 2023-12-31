import React from "react";
import PortfolioCard from "./components/PortfolioCard";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const Page = () => {
  return (
    <>
    <Nav currentPage="Portfolio" lang="PL"/>
    <main className="max-w-[1800px] px-2.5 mx-auto grid md:grid-cols-2 gap-3">
      <PortfolioCard
        commercial={false}
        lang="PL"
        title="Juice"
        slug="juice"
        nextjs={true}
        typescript={true}
        tailwind={true}
        strapi={true}
      />
      <PortfolioCard
        commercial={true}
        lang="PL"
        title="Karnatech"
        slug="karnatech"
        wordpress={true}
        php={true}
      />
      <PortfolioCard
        commercial={false}
        lang="PL"
        title="AlumiDrop"
        slug="alumidrop"
        vue={true}
      />
    </main>
    <Footer lang="PL" />
    </>
  );
};

export default Page;
