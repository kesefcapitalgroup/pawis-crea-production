"use client";

import React, { FC } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter, usePathname } from "@/i18n/navigation";

// CSS
import "@/styles/footer.css";

// Icons
import { RiPhoneFill, RiMailFill, RiMapPinFill } from "react-icons/ri";

// Component
import CompanyLogo from "@/components/CompanyLogo";

const Footer: FC = () => {
  const t = useTranslations("Footer");
  const tLang = useTranslations("Header.lang");
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const navItems = [
    { key: "home", href: "/" },
    { key: "about", href: "/about" },
    { key: "portfolio", href: "/portfolio" },
    { key: "services", href: "/services" },
    { key: "contact", href: "/contact" },
    { key: "book_a_session", href: "/book-session" },
  ];

  const socialLinks = [
    { key: "instagram", href: "https://instagram.com/pawiscrea" },
    { key: "facebook", href: "https://facebook.com/pawiscrea" },
    { key: "vimeo", href: "https://vimeo.com/pawiscrea" },
    { key: "youtube", href: "https://youtube.com/pawiscrea" },
  ];

  const otherLocale = currentLocale === "en" ? "es" : "en";

  const switchLang = (newLocale: string) => {
    router.push(pathname, { locale: newLocale });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-company-seal">
            <CompanyLogo position="footer" />

            <p className="footer-company-slogan">{t("slogan")}</p>
          </div>

          <nav className="footer-nav-links">
            <h3 className="footer-nav-links-heading">{t("quick_links")}</h3>

            <ul className="footer-nav-links-list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="footer-nav-link">
                    {t(`nav.${item.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <address className="footer-contact-details">
            <h3 className="footer-contact-details-heading">{t("contact")}</h3>

            <div className="footer-contact-details-list">
              <p className="footer-contact-email">
                <a
                  className="footer-contact-email-link"
                  href="mailto:info@pawiscrea.com"
                >
                  <RiMailFill className="footer-contact-email-icon" />

                  <span className="footer-contact-email-address">
                    info@pawiscrea.com
                  </span>
                </a>
              </p>

              <p className="footer-contact-phone">
                <a
                  className="footer-contact-phone-link"
                  href="tel:+15551234567"
                >
                  <RiPhoneFill className="footer-contact-phone-icon" />

                  <span className="footer-contact-phone-number">
                    +1 (555) 123-4567
                  </span>
                </a>
              </p>

              <p className="footer-contact-address-ny">
                <a
                  className="footer-contact-address-ny-link"
                  href="https://www.google.com/maps/search/?api=1&query=15th+floor,+800+Third+Ave,+New+York,+NY+10022,+USA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiMapPinFill className="footer-contact-address-icon" />

                  <span className="footer-contact-address-ny-details">
                    15th floor, 800 Third Ave, New York, NY 10022, USA
                  </span>
                </a>
              </p>

              <p className="footer-contact-address-panama">
                <a
                  className="footer-contact-address-panama-link"
                  href="https://www.google.com/maps/search/?api=1&query=Panama"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiMapPinFill className="footer-contact-address-icon" />

                  <span className="footer-contact-address-panama-details">
                    Avenida Ricardo Arango, entre Calle 57 y 58, Obarrio, Panama
                    City, Panama
                  </span>
                </a>
              </p>
            </div>
          </address>

          <div className="footer-social-links">
            <h3 className="footer-social-links-heading">{t("follow_us")}</h3>

            <ul className="footer-social-links-list">
              {socialLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                  >
                    {t(`social.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Pawis Crea. {t("rights_reserved")}
          </p>

          <div className="footer-switch-lang">
            <button
              onClick={() => switchLang(otherLocale)}
              className="footer-switch-lang-btn"
            >
              {tLang(`${otherLocale}_long`)}
            </button>
          </div>

          <div className="footer-legal-links">
            <Link href="/privacy" className="footer-privacy-policy">
              {t("privacy_policy")}
            </Link>
            <Link href="/terms" className="footer-terms-of-service">
              {t("terms_of_service")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
