import React, { FC, use } from "react";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

// Sections
import AboutUsHero from "@/components/about-us/AboutUsHero";
import OurStory from "@/components/about-us/OurStory";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface AboutUsPageProps {
  params: Promise<{ locale: string }>;
}

const AboutUsPage: FC<AboutUsPageProps> = ({ params }) => {
  const { locale } = use(params);
  setRequestLocale(locale);

  return (
    <main className="about-us-page">
      <AboutUsHero />
      <OurStory />
    </main>
  );
};

export default AboutUsPage;
