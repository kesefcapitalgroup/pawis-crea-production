import { FC } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// CSS
import "@/styles/portfolio/portfolio-call-to-action.css";

const PortfolioCallToAction: FC = () => {
  const t = useTranslations("Portfolio.CallToAction");

  const { eyebrow, headline, body, primaryBtn, secondaryBtn } = {
    eyebrow: t("eyebrow"),
    headline: t("headline"),
    body: t("body"),
    primaryBtn: t("primaryBtn"),
    secondaryBtn: t("secondaryBtn"),
  };

  return (
    <section
      className="portfolio-call-to-action"
      id="portfolio-call-to-action"
      aria-labelledby="portfolio-call-to-action-headline"
    >
      <div className="portfolio-call-to-action-container">
        <div className="portfolio-call-to-action-content">
          <p className="portfolio-call-to-action-eyebrow">{eyebrow}</p>
          <h2
            className="portfolio-call-to-action-headline"
            id="portfolio-call-to-action-headline"
          >
            {headline}
          </h2>
          <p className="portfolio-call-to-action-body">{body}</p>
          <div className="portfolio-call-to-action-buttons">
            <Link
              href="/contact-us"
              className="portfolio-call-to-action-primary-btn"
              aria-label={primaryBtn}
              prefetch
            >
              {primaryBtn}
            </Link>
            <Link
              href="/portfolio"
              className="portfolio-call-to-action-secondary-btn"
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

PortfolioCallToAction.displayName = "PortfolioCallToAction";
export default PortfolioCallToAction;
