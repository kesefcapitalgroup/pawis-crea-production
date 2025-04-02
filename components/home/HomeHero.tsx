import React, { FC } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// CSS
import "@/styles/home/home-hero.css";

const HomeHero: FC = () => {
  const t_HomeHero_Home = useTranslations("Home.HomeHero");
  const t_Common = useTranslations("Common");

  const { headline, subheadline, exploreOurServicesBtn, videoSRTxt } = {
    headline: t_HomeHero_Home("headline"),
    subheadline: t_HomeHero_Home("subheadline"),
    exploreOurServicesBtn: t_HomeHero_Home("exploreOurServicesBtn"),
    videoSRTxt: t_HomeHero_Home("videoSRTxt"),
  };

  const { bookASessionBtn, videoFallbackTxt } = {
    bookASessionBtn: t_Common("bookASessionBtn"),
    videoFallbackTxt: t_Common("videoFallbackTxt"),
  };

  return (
    <section
      className="home-hero"
      id="home-hero"
      aria-labelledby="home-hero-headline"
    >
      <video
        className="home-hero-bg-video"
        aria-hidden="true"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/videos/hero-bg/home-hero-bg/home-hero-bg.png"
      >
        <source
          src="/videos/hero-bg/home-hero-bg/home-hero-bg.webm"
          type="video/webm"
        />
        <source
          src="/videos/hero-bg/home-hero-bg/home-hero-bg.mp4"
          type="video/mp4"
        />
        <p className="sr-only">{videoSRTxt}</p>
        {videoFallbackTxt}
      </video>

      <div className="home-hero-content">
        <div className="home-hero-container">
          <h1 className="home-hero-headline" id="home-hero-headline">
            {headline}
          </h1>
          <h2 className="home-hero-subheadline">{subheadline}</h2>
          <div className="home-hero-cta">
            <Link
              href="/#services-overview"
              className="explore-our-services-btn"
              aria-label={exploreOurServicesBtn}
            >
              {exploreOurServicesBtn}
            </Link>

            <Link
              href="/contact-us"
              className="book-a-session-btn"
              aria-label={bookASessionBtn}
              prefetch
            >
              {bookASessionBtn}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

HomeHero.displayName = "HomeHero";

export default HomeHero;
