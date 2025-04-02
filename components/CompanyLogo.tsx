import React, { FC, memo } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

// CSS
import "@/styles/company-logo.css";

interface CompanyLogoProps {
  position?: "header" | "footer";
}

const CompanyLogo: FC<CompanyLogoProps> = memo(({ position = "header" }) => {
  const t_CompanyLogo_Common = useTranslations("Common.CompanyLogo");
  const { companyLogoAriaLabel, companyLogoAltText } = {
    companyLogoAriaLabel: t_CompanyLogo_Common("companyLogoAriaLabel"),
    companyLogoAltText: t_CompanyLogo_Common("companyLogoAltText"),
  };

  const companyLogoClassName =
    position === "footer"
      ? "pawis-crea-logo__footer"
      : "pawis-crea-logo__header";

  return (
    <Link
      href="/"
      className="company-logo"
      aria-label={companyLogoAriaLabel}
      prefetch
    >
      <Image
        src="/logo/pawis-crea-logo.svg"
        alt={companyLogoAltText}
        width={300}
        height={90}
        className={companyLogoClassName}
        priority
      />
      {/* <span className="pawis">Pawis</span> <span className="crea">Crea</span> */}
    </Link>
  );
});

CompanyLogo.displayName = "CompanyLogo";

export default CompanyLogo;
