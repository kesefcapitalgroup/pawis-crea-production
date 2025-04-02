import React, { FC, use } from "react";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

// Sections
import ContactUsHero from "@/components/contact-us/ContactUsHero";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface ContactUsPageProps {
  params: Promise<{ locale: string }>;
}

const ContactUsPage: FC<ContactUsPageProps> = ({ params }) => {
  const { locale } = use(params);
  setRequestLocale(locale);

  return (
    <main className="contact-us-page">
      <ContactUsHero />
    </main>
  );
};

export default ContactUsPage;
