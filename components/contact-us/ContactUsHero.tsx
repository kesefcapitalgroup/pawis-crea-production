import React, { FC } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// CSS
import "@/styles/contact-us/contact-us-hero.css";

const ContactUsHero: FC = () => {
  const t_ContactUsHero_ContactUs = useTranslations("ContactUs.ContactUsHero");
  const t_Common = useTranslations("Common");

  const { headline, subheadline, callUsBtn, leaveUsAMsgBtn, videoSRTxt } = {
    headline: t_ContactUsHero_ContactUs("headline"),
    subheadline: t_ContactUsHero_ContactUs("subheadline"),
    callUsBtn: t_ContactUsHero_ContactUs("callUsBtn"),
    leaveUsAMsgBtn: t_ContactUsHero_ContactUs("leaveUsAMsgBtn"),
    videoSRTxt: t_ContactUsHero_ContactUs("videoSRTxt"),
  };

  const { videoFallbackTxt } = {
    videoFallbackTxt: t_Common("videoFallbackTxt"),
  };

  return (
    <section
      className="contact-us-hero"
      id="contact-us-hero"
      aria-labelledby="contact-us-hero-headline"
    >
      <video
        className="contact-us-hero-bg-video"
        aria-hidden="true"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/videos/hero-bg/contact-us-hero-bg/contact-us-hero-bg.png"
      >
        <source
          src="/videos/hero-bg/contact-us-hero-bg/contact-us-hero-bg.webm"
          type="video/webm"
        />
        <source
          src="/videos/hero-bg/contact-us-hero-bg/contact-us-hero-bg.mp4"
          type="video/mp4"
        />
        <p className="sr-only">{videoSRTxt}</p>
        {videoFallbackTxt}
      </video>

      <div className="contact-us-hero-content">
        <div className="contact-us-hero-container">
          <h1
            className="contact-us-hero-headline"
            id="contact-us-hero-headline"
          >
            {headline}
          </h1>
          <h2 className="contact-us-hero-subheadline">{subheadline}</h2>
          <div className="contact-us-hero-cta">
            <Link
              href="tel:+50768560871"
              className="call-us-btn"
              aria-label={callUsBtn}
            >
              {callUsBtn}
            </Link>

            <Link
              href="#contact-us-form"
              className="leave-us-a-msg-btn"
              aria-label={leaveUsAMsgBtn}
            >
              {leaveUsAMsgBtn}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

ContactUsHero.displayName = "ContactUsHero";

export default ContactUsHero;
