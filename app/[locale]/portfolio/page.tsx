import React, { FC, use } from "react";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

// Sections
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import OurPhotographyCollection from "@/components/portfolio/OurPhotographyCollection";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface PortfolioPageProps {
  params: Promise<{ locale: string }>;
}

const PortfolioPage: FC<PortfolioPageProps> = ({ params }) => {
  const { locale } = use(params);
  setRequestLocale(locale);

  return (
    <main className="portfolio-page">
      <PortfolioHero />
      <OurPhotographyCollection />
    </main>
  );
};

export default PortfolioPage;
