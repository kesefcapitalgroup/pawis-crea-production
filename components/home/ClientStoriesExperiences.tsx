import React, { FC } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// CSS
import "@/styles/home/client-stories-experiences.css";

// Components
import Carousel from "../CommonComponents/Carousel";

const ClientStoriesExperiences: FC = () => {
  const t_Section = useTranslations("Home.ClientStoriesExperiences");
  const t_Common = useTranslations("Common");

  const sectionTitle = t_Section("sectionTitle");
  const sectionIntro = t_Section("sectionIntro");

  const clientStoriesData = [
    {
      clientImgSrc:
        "/images/sections-img/client-stories-experiences/marriage-testimonial.webp",
      clientImgWidth: 1600,
      clientImgHeight: 2400,
      clientImgPosition: {
        xs: "50% 45%",
        default: "50% 45%",
        sm: "50% 45%",
        md: "50% 45%",
        lg: "50% 45%",
        xl: "50% 45%",
        xxl: "50% 45%",
      },
      clientImgDesc: t_Section("clientStories.0.imgDesc"),
      clientTestimonial: t_Section("clientStories.0.testimonial"),
      clientInfo: t_Section("clientStories.0.clientInfo"),
    },
    {
      clientImgSrc:
        "/images/sections-img/client-stories-experiences/quinceanera-testimonial.webp",
      clientImgWidth: 6000,
      clientImgHeight: 4000,
      clientImgPosition: {
        xs: "35% 50%",
        default: "35% 50%",
        sm: "35% 50%",
        md: "35% 50%",
        lg: "35% 50%",
        xl: "35% 50%",
        xxl: "35% 50%",
      },
      clientImgDesc: t_Section("clientStories.1.imgDesc"),
      clientTestimonial: t_Section("clientStories.1.testimonial"),
      clientInfo: t_Section("clientStories.1.clientInfo"),
    },
    {
      clientImgSrc:
        "/images/sections-img/client-stories-experiences/event-coverage-testimonial.webp",
      clientImgWidth: 4000,
      clientImgHeight: 6000,
      clientImgPosition: {
        xs: "50% 20%",
        default: "50% 20%",
        sm: "50% 20%",
        md: "50% 20%",
        lg: "50% 20%",
        xl: "50% 20%",
        xxl: "50% 20%",
      },
      clientImgDesc: t_Section("clientStories.2.imgDesc"),
      clientTestimonial: t_Section("clientStories.2.testimonial"),
      clientInfo: t_Section("clientStories.2.clientInfo"),
    },
    {
      clientImgSrc:
        "/images/sections-img/client-stories-experiences/personal-testimonial.webp",
      clientImgWidth: 4000,
      clientImgHeight: 6000,
      clientImgPosition: {
        xs: "50% 50%",
        default: "50% 50%",
        sm: "50% 50%",
        md: "50% 50%",
        lg: "50% 50%",
        xl: "50% 50%",
        xxl: "50% 50%",
      },
      clientImgDesc: t_Section("clientStories.3.imgDesc"),
      clientTestimonial: t_Section("clientStories.3.testimonial"),
      clientInfo: t_Section("clientStories.3.clientInfo"),
    },
  ];

  return (
    <section
      id="client-stories-experiences"
      className="client-stories-experiences"
      aria-labelledby="client-stories-experiences__title"
    >
      <div className="client-stories-experiences__wrapper">
        <h2
          id="client-stories-experiences__title"
          className="client-stories-experiences__title"
        >
          {sectionTitle}
        </h2>
        <p className="client-stories-experiences__intro">{sectionIntro}</p>
        <Carousel
          slides={[0, 1, 2, 3]}
          options={{ loop: true, containScroll: false }}
          clientStoriesData={clientStoriesData}
          ariaLabel="Client Stories Slideshow"
          section="client-stories-experiences"
        />
      </div>
    </section>
  );
};

export default ClientStoriesExperiences;
