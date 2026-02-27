"use client";

import React, { FC, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter, usePathname } from "@/i18n/navigation";
import "@/styles/header.css";
import { List, X } from "@phosphor-icons/react";
import CompanyLogo from "@/components/CompanyLogo";

const Header: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

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

  const handleMobileClick = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "unset";
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
                  {t(item.key as Parameters<typeof t>[0])}
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

          <button className="mobile-nav-toggle-btn" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X weight="bold" /> : <List weight="bold" />}
          </button>
        </div>

        <nav className={`mobile-nav ${isMobileMenuOpen ? "is-open" : ""}`}>
          <div className="mobile-nav-content">
            <ul className="mobile-nav-links">
              {navItems.map((item, index) => (
                <li
                  key={item.href}
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                  className="mobile-nav-item"
                >
                  <Link
                    href={item.href}
                    className="mobile-nav-link"
                    onClick={handleMobileClick}
                  >
                    {t(item.key as Parameters<typeof t>[0])}
                  </Link>
                </li>
              ))}
              <li
                className="mobile-nav-item"
                style={{ animationDelay: "0.5s" }}
              >
                <Link
                  href="tel:+50768560871"
                  className="book-a-session-header-mobile-nav-btn"
                  onClick={handleMobileClick}
                >
                  {t("book_a_session")}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
