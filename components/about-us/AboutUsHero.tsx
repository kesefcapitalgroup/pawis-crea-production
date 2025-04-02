import React, { FC } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// CSS
import "@/styles/about-us/about-us-hero.css";

const AboutUsHero: FC = () => {
  const t_AboutUsHero_AboutUs = useTranslations("AboutUs.AboutUsHero");
  const t_Common = useTranslations("Common");

  const { headline, subheadline, exploreOurStoryBtn, videoSRTxt } = {
    headline: t_AboutUsHero_AboutUs("headline"),
    subheadline: t_AboutUsHero_AboutUs("subheadline"),
    exploreOurStoryBtn: t_AboutUsHero_AboutUs("exploreOurStoryBtn"),
    videoSRTxt: t_AboutUsHero_AboutUs("videoSRTxt"),
  };

  const { bookASessionBtn, videoFallbackTxt } = {
    bookASessionBtn: t_Common("bookASessionBtn"),
    videoFallbackTxt: t_Common("videoFallbackTxt"),
  };

  return (
    <section
      className="about-us-hero"
      id="about-us-hero"
      aria-labelledby="about-us-hero-headline"
    >
      <video
        className="about-us-hero-bg-video"
        aria-hidden="true"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/videos/hero-bg/about-us-hero-bg/about-us-hero-bg.png"
      >
        <source
          src="/videos/hero-bg/about-us-hero-bg/about-us-hero-bg.webm"
          type="video/webm"
        />
        <source
          src="/videos/hero-bg/about-us-hero-bg/about-us-hero-bg.mp4"
          type="video/mp4"
        />
        <p className="sr-only">{videoSRTxt}</p>
        {videoFallbackTxt}
      </video>

      <div className="about-us-hero-content">
        <div className="about-us-hero-container">
          <h1 className="about-us-hero-headline" id="about-us-hero-headline">
            {headline}
          </h1>
          <h2 className="about-us-hero-subheadline">{subheadline}</h2>
          <div className="about-us-hero-cta">
            <Link
              href="/#our-story"
              className="explore-our-story-btn"
              aria-label={exploreOurStoryBtn}
            >
              {exploreOurStoryBtn}
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

AboutUsHero.displayName = "AboutUsHero";

export default AboutUsHero;
