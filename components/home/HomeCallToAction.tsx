import { FC } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// CSS
import "@/styles/home/home-call-to-action.css";

const HomeCallToAction: FC = () => {
  const t = useTranslations("Home.CallToAction");

  const { eyebrow, headline, body, primaryBtn, secondaryBtn } = {
    eyebrow: t("eyebrow"),
    headline: t("headline"),
    body: t("body"),
    primaryBtn: t("primaryBtn"),
    secondaryBtn: t("secondaryBtn"),
  };

  return (
    <section
      className="home-call-to-action"
      id="home-call-to-action"
      aria-labelledby="home-call-to-action-headline"
    >
      <div className="home-call-to-action-container">
        <div className="home-call-to-action-content">
          <p className="home-call-to-action-eyebrow">{eyebrow}</p>
          <h2
            className="home-call-to-action-headline"
            id="home-call-to-action-headline"
          >
            {headline}
          </h2>
          <p className="home-call-to-action-body">{body}</p>
          <div className="home-call-to-action-buttons">
            <Link
              href="/contact-us"
              className="home-call-to-action-primary-btn"
              aria-label={primaryBtn}
              prefetch
            >
              {primaryBtn}
            </Link>
            <Link
              href="/portfolio"
              className="home-call-to-action-secondary-btn"
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

HomeCallToAction.displayName = "HomeCallToAction";
export default HomeCallToAction;
