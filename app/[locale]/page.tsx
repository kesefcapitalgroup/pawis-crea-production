import React, { FC, use } from "react";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

// Sections
import HomeHero from "@/components/home/HomeHero";
import ServicesShowcase from "@/components/home/ServicesShowcase";
import ClientStoriesExperiences from "@/components/home/ClientStoriesExperiences";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

const HomePage: FC<HomePageProps> = ({ params }) => {
  const { locale } = use(params);
  setRequestLocale(locale);

  return (
    <main className="home-page">
      <HomeHero />
      <ServicesShowcase />
      <ClientStoriesExperiences />
    </main>
  );
};

export default HomePage;
