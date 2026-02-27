import { FC } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// CSS
import "@/styles/about-us/about-us-call-to-action.css";

const AboutUsCallToAction: FC = () => {
  const t = useTranslations("AboutUs.CallToAction");

  const { eyebrow, headline, body, primaryBtn, secondaryBtn } = {
    eyebrow: t("eyebrow"),
    headline: t("headline"),
    body: t("body"),
    primaryBtn: t("primaryBtn"),
    secondaryBtn: t("secondaryBtn"),
  };

  return (
    <section
      className="about-us-call-to-action"
      id="about-us-call-to-action"
      aria-labelledby="about-us-call-to-action-headline"
    >
      <div className="about-us-call-to-action-container">
        <div className="about-us-call-to-action-content">
          <p className="about-us-call-to-action-eyebrow">{eyebrow}</p>
          <h2
            className="about-us-call-to-action-headline"
            id="about-us-call-to-action-headline"
          >
            {headline}
          </h2>
          <p className="about-us-call-to-action-body">{body}</p>
          <div className="about-us-call-to-action-buttons">
            <Link
              href="/contact-us"
              className="about-us-call-to-action-primary-btn"
              aria-label={primaryBtn}
              prefetch
            >
              {primaryBtn}
            </Link>
            <Link
              href="/portfolio"
              className="about-us-call-to-action-secondary-btn"
              aria-label={secondaryBtn}
              prefetch
            >
              {secondaryBtn}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutUsCallToAction.displayName = "AboutUsCallToAction";
export default AboutUsCallToAction;
