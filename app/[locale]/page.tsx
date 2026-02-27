import React, { FC } from "react";
import { setRequestLocale } from "next-intl/server";

// Components
import HomeHero from "@/components/home/HomeHero";
import ServicesShowcase from "@/components/home/ServicesShowcase";
import ClientStoriesExperiences from "@/components/home/ClientStoriesExperiences";
import HomeCallToAction from "@/components/home/HomeCallToAction";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

const HomePage: FC<HomePageProps> = async ({ params }) => {
  // Next.js 16: params is now async, must await
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <main className="home-page">
      <HomeHero />
      <ServicesShowcase />
      <ClientStoriesExperiences />
      <HomeCallToAction />
    </main>
  );
};

export default HomePage;
