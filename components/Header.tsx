"use client";

import React, { FC, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter, usePathname } from "@/i18n/navigation";

// CSS
import "@/styles/header.css";

// Icons
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

// Component
import CompanyLogo from "@/components/CompanyLogo";

const Header: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const t = useTranslations("Header.nav");
  const tLang = useTranslations("Header.lang");
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const navItems = [
    { key: "home", href: "/" },
    { key: "about", href: "/about-us" },
    { key: "portfolio", href: "/portfolio" },
    { key: "contact", href: "/contact-us" },
  ];

  const otherLocale = currentLocale === "en" ? "es" : "en";

  const switchLang = (newLocale: string) => {
    router.push(pathname, { locale: newLocale });
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="company-logo-container">
          <CompanyLogo position="header" />
        </div>

        <nav className="nav">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="nav-link">
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-btns">
          <button
            onClick={() => switchLang(otherLocale)}
            className="switch-lang-btn"
          >
            {tLang(`${otherLocale}_long`)}
          </button>
          <Link href="tel:+50768560871" className="book-a-session-header-btn">
            {t("book_a_session")}
          </Link>

          <button
            onClick={() => switchLang(otherLocale)}
            className="switch-lang-mobile-btn"
          >
            {tLang(`${otherLocale}_short`)}
          </button>
          {isMobileMenuOpen ? (
            <RiCloseFill
              className="mobile-nav-toggle-btn"
              onClick={toggleMobileMenu}
            />
          ) : (
            <RiMenu3Fill
              className="mobile-nav-toggle-btn"
              onClick={toggleMobileMenu}
            />
          )}
        </div>

        {isMobileMenuOpen && (
          <nav className="mobile-nav">
            <hr className="mobile-nav-divider" />
            <ul className="mobile-nav-links">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="mobile-nav-link"
                    onClick={toggleMobileMenu}
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
              <li onClick={toggleMobileMenu}>
                <Link
                  href="tel:+50768560871"
                  className="book-a-session-header-mobile-nav-btn"
                >
                  {t("book_a_session")}
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
