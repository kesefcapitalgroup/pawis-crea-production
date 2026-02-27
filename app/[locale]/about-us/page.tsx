import { FC } from "react";
import { setRequestLocale } from "next-intl/server";

// Sections
import AboutUsHero from "@/components/about-us/AboutUsHero";
import OurStory from "@/components/about-us/OurStory";
import WhyChoosePawisCrea from "@/components/about-us/WhyChoosePawisCrea";
import AboutUsCallToAction from "@/components/about-us/AboutUsCallToAction";

interface AboutUsPageProps {
  params: Promise<{ locale: string }>;
}

const AboutUsPage: FC<AboutUsPageProps> = async ({ params }) => {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <main className="about-us-page">
      <AboutUsHero />
      <OurStory />
      <WhyChoosePawisCrea />
      <AboutUsCallToAction />
    </main>
  );
};

export default AboutUsPage;
