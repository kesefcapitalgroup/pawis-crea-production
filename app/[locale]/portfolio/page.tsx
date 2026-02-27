import React, { FC } from "react";
import { setRequestLocale } from "next-intl/server";

// Sections
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import OurPhotographyCollection from "@/components/portfolio/OurPhotographyCollection";
import PortfolioCalltoAction from "@/components/portfolio/PortfolioCalltoAction";

interface PortfolioPageProps {
  params: Promise<{ locale: string }>;
}

const PortfolioPage: FC<PortfolioPageProps> = async ({ params }) => {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <main className="portfolio-page">
      <PortfolioHero />
      <OurPhotographyCollection />
      <PortfolioCalltoAction />
    </main>
  );
};

export default PortfolioPage;
