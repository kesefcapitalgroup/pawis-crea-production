"use client";

import { FC, ComponentType } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

import {
  Camera,
  ShootingStar,
  Handshake,
  ShieldCheck,
  SealCheck,
  Fire,
} from "@phosphor-icons/react";

import "@/styles/about-us/why-choose-pawis-crea.css";

interface Reason {
  reasonTitle: string;
  reasonTagline: string;
  reasonDescription: string;
  icon: ComponentType<{ size?: number }>;
}

const REASON_KEYS = [
  "storyTellingMastery",
  "tailoredForDreamers",
  "collaborativeExperience",
  "peaceOfMindCoverage",
  "commitmentToQuality",
  "passionDrivenExcellence",
] as const;

const REASON_ICONS = [
  Camera,
  ShootingStar,
  Handshake,
  ShieldCheck,
  SealCheck,
  Fire,
];

const WhyChoosePawisCrea: FC = () => {
  const t_Section = useTranslations("AboutUs.WhyChoosePawisCrea");
  const t_Common = useTranslations("Common");

  const sectionTitle = t_Section("sectionTitle");
  const sectionIntro = t_Section("sectionIntro");

  const reasonsForChoosing: Reason[] = REASON_KEYS.map((key, index) => ({
    reasonTitle: t_Section(`reasonsForChoosing.${key}.title`),
    reasonTagline: t_Section(`reasonsForChoosing.${key}.tagline`),
    reasonDescription: t_Section(`reasonsForChoosing.${key}.description`),
    icon: REASON_ICONS[index],
  }));

  return (
    <section
      id="why-choose-pawis-crea"
      className="why-choose-pawis-crea"
      aria-labelledby="why-choose-pawis-crea__title"
    >
      <div className="why-choose-pawis-crea__wrapper">
        <h2
          id="why-choose-pawis-crea__title"
          className="why-choose-pawis-crea__title"
        >
          {sectionTitle}
        </h2>
        <p className="why-choose-pawis-crea__intro">{sectionIntro}</p>
        <div className="why-choose-pawis-crea__reasons">
          {reasonsForChoosing.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div key={index} className="why-choose-pawis-crea__reason">
                <IconComponent
                  size={32}
                  className="why-choose-pawis-crea__reason-icon"
                />
                <h3 className="why-choose-pawis-crea__reason-title">
                  {reason.reasonTitle}
                </h3>
                <p className="why-choose-pawis-crea__reason-tagline">
                  {reason.reasonTagline}
                </p>
                <p className="why-choose-pawis-crea__reason-description">
                  {reason.reasonDescription}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoosePawisCrea;
