import React, { FC } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// CSS
import "@/styles/home/services-overview.css";

// Components
import EmblaCarousel from "./EmblaCarousel";

const ServicesOverview: FC = () => {
  const t_Section = useTranslations("Home.ServicesOverview");
  const t_Common = useTranslations("Common");

  const sectionHeading = t_Section("sectionHeading");
  const sectionDescription = t_Section("sectionDescription");
  const services = [
    {
      key: "weddingsQuinceañeras",
      heading: t_Section("services.weddingsQuinceañeras.heading"),
      subheading: t_Section("services.weddingsQuinceañeras.subheading"),
      description: t_Section("services.weddingsQuinceañeras.description"),
      images: [
        {
          src: "/images/sections-img/services-overview/weddings-quinceañeras/weddings-quinceañeras-1.jpg",
          alt: t_Section(
            "services.weddingsQuinceañeras.images.img1Description"
          ),
          objectPosition: {
            default: "50% 27.5%",
            xs: "50% 32.5%",
            sm: "50% 38.5%",
            md: "50% 30%",
            lg: "50% 55%",
            xl: "50% 60%",
            xxl: "50% 75%",
          },
        },
        {
          src: "/images/sections-img/services-overview/weddings-quinceañeras/weddings-quinceañeras-2.jpg",
          alt: t_Section(
            "services.weddingsQuinceañeras.images.img2Description"
          ),
          objectPosition: {
            default: "50% 10%",
            xs: "50% 10%",
            sm: "50% 15%",
            md: "50% 12.5%",
            lg: "50% 25%",
            xl: "50% 30%",
            xxl: "50% 35%",
          },
        },
        {
          src: "/images/sections-img/services-overview/weddings-quinceañeras/weddings-quinceañeras-3.jpg",
          alt: t_Section(
            "services.weddingsQuinceañeras.images.img3Description"
          ),
          objectPosition: {
            default: "50% 15%",
            xs: "50% 15%",
            sm: "50% 22.5%",
            md: "50% 20%",
            lg: "50% 35%",
            xl: "50% 37.5%",
            xxl: "50% 40%",
          },
        },
        {
          src: "/images/sections-img/services-overview/weddings-quinceañeras/weddings-quinceañeras-4.jpg",
          alt: t_Section(
            "services.weddingsQuinceañeras.images.img4Description"
          ),
          objectPosition: {
            default: "50% 20%",
            xs: "50% 27.5%",
            sm: "50% 27.5%",
            md: "50% 25%",
            lg: "50% 40%",
            xl: "50% 45%",
            xxl: "50% 50%",
          },
        },
      ],
    },
    {
      key: "musicArtistsBTS",
      heading: t_Section("services.musicArtistsBTS.heading"),
      subheading: t_Section("services.musicArtistsBTS.subheading"),
      description: t_Section("services.musicArtistsBTS.description"),
      images: [
        {
          src: "/images/sections-img/services-overview/music-artists-bts/music-artists-bts-1.png",
          alt: t_Section("services.musicArtistsBTS.images.img1Description"),
          objectPosition: {
            default: "50% 47.5%",
            xs: "50% 50%",
            sm: "50% 50%",
            md: "50% 50%",
            lg: "50% 50%",
            xl: "50% 50%",
            xxl: "50% 50%",
          },
        },

        {
          src: "/images/sections-img/services-overview/music-artists-bts/music-artists-bts-2.jpg",
          alt: t_Section("services.musicArtistsBTS.images.img2Description"),
          objectPosition: {
            default: "50% 20%",
            xs: "50% 25%",
            sm: "50% 30%",
            md: "50% 25%",
            lg: "50% 40%",
            xl: "50% 40%",
            xxl: "50% 45%",
          },
        },
        {
          src: "/images/sections-img/services-overview/music-artists-bts/music-artists-bts-3.png",
          alt: t_Section("services.musicArtistsBTS.images.img3Description"),
          objectPosition: {
            default: "50% 50%",
            xs: "50% 50%",
            sm: "50% 50%",
            md: "50% 50%",
            lg: "50% 50%",
            xl: "50% 50%",
            xxl: "50% 50%",
          },
        },
        {
          src: "/images/sections-img/services-overview/music-artists-bts/music-artists-bts-4.jpg",
          alt: t_Section("services.musicArtistsBTS.images.img4Description"),
          objectPosition: {
            default: "65% 20%",
            xs: "60% 50%",
            sm: "50% 50%",
            md: "50% 50%",
            lg: "55% 50%",
            xl: "60% 50%",
            xxl: "60% 50%",
          },
        },
      ],
    },
    {
      key: "eventsCorporateCoverage",
      heading: t_Section("services.eventsCorporateCoverage.heading"),
      subheading: t_Section("services.eventsCorporateCoverage.subheading"),
      description: t_Section("services.eventsCorporateCoverage.description"),
      images: [
        {
          src: "/images/sections-img/services-overview/events-corporate-coverage/events-corporate-coverage-1.jpg",
          alt: t_Section(
            "services.eventsCorporateCoverage.images.img1Description"
          ),
          objectPosition: {
            default: "50% 7.5%",
            xs: "50% 10%",
            sm: "50% 12.5%",
            md: "50% 10%",
            lg: "50% 12.5%",
            xl: "50% 15%",
            xxl: "50% 20%",
          },
        },
        {
          src: "/images/sections-img/services-overview/events-corporate-coverage/events-corporate-coverage-2.jpg",
          alt: t_Section(
            "services.eventsCorporateCoverage.images.img2Description"
          ),
          objectPosition: {
            default: "50% 10%",
            xs: "50% 12.5%",
            sm: "50% 12.5%",
            md: "50% 12.5%",
            lg: "50% 20%",
            xl: "50% 22.5%",
            xxl: "50% 25%",
          },
        },
        {
          src: "/images/sections-img/services-overview/events-corporate-coverage/events-corporate-coverage-3.jpg",
          alt: t_Section(
            "services.eventsCorporateCoverage.images.img3Description"
          ),
          objectPosition: {
            default: "50% 70%",
            xs: "50% 70%",
            sm: "50% 72.5%",
            md: "50% 75%",
            lg: "50% 50%",
            xl: "50% 50%",
            xxl: "50% 50%",
          },
        },
        {
          src: "/images/sections-img/services-overview/events-corporate-coverage/events-corporate-coverage-4.jpg",
          alt: t_Section(
            "services.eventsCorporateCoverage.images.img4Description"
          ),
          objectPosition: {
            default: "50% 50%",
            xs: "25% 50%",
            sm: "40% 50%",
            md: "50% 50%",
            lg: "50% 50%",
            xl: "50% 50%",
            xxl: "40% 50%",
          },
        },
      ],
    },
    {
      key: "personalFashionPortraits",
      heading: t_Section("services.personalFashionPortraits.heading"),
      subheading: t_Section("services.personalFashionPortraits.subheading"),
      description: t_Section("services.personalFashionPortraits.description"),
      images: [
        {
          src: "/images/sections-img/services-overview/personal-fashion-portraits/personal-fashion-portraits-1.jpg",
          alt: t_Section(
            "services.personalFashionPortraits.images.img1Description"
          ),
          objectPosition: {
            default: "50% 40%",
            xs: "50% 40%",
            sm: "50% 45%",
            md: "50% 37.5%",
            lg: "50% 65%",
            xl: "50% 62.5%",
            xxl: "50% 55%",
          },
        },
        {
          src: "/images/sections-img/services-overview/personal-fashion-portraits/personal-fashion-portraits-2.jpg",
          alt: t_Section(
            "services.personalFashionPortraits.images.img2Description"
          ),
          objectPosition: {
            default: "50% 8.75%",
            xs: "50% 10%",
            sm: "50% 12.5%",
            md: "50% 11.25%",
            lg: "50% 20%",
            xl: "50% 20%",
            xxl: "50% 22.5%",
          },
        },
        {
          src: "/images/sections-img/services-overview/personal-fashion-portraits/personal-fashion-portraits-3.jpg",
          alt: t_Section(
            "services.personalFashionPortraits.images.img3Description"
          ),
          objectPosition: {
            default: "50% 35%",
            xs: "50% 45%",
            sm: "50% 52.5%",
            md: "50% 45%",
            lg: "50% 80%",
            xl: "50% 85%",
            xxl: "50% 90%",
          },
        },
        {
          src: "/images/sections-img/services-overview/personal-fashion-portraits/personal-fashion-portraits-4.jpg",
          alt: t_Section(
            "services.personalFashionPortraits.images.img4Description"
          ),
          objectPosition: {
            default: "50% 2.5%",
            xs: "50% 5%",
            sm: "50% 10%",
            md: "50% 5%",
            lg: "50% 50%",
            xl: "50% 50%",
            xxl: "50% 50%",
          },
        },
      ],
    },
    {
      key: "brandStoryGastronomy",
      heading: t_Section("services.brandStoryGastronomy.heading"),
      subheading: t_Section("services.brandStoryGastronomy.subheading"),
      description: t_Section("services.brandStoryGastronomy.description"),
      images: [
        {
          src: "/images/sections-img/services-overview/brand-story-gastronomy/brand-story-gastronomy-1.jpg",
          alt: t_Section(
            "services.brandStoryGastronomy.images.img1Description"
          ),
          objectPosition: {
            default: "50% 97.5%",
            xs: "50% 95%",
            sm: "50% 95%",
            md: "50% 95%",
            lg: "50% 100%",
            xl: "50% 100%",
            xxl: "50% 100%",
          },
        },
        {
          src: "/images/sections-img/services-overview/brand-story-gastronomy/brand-story-gastronomy-2.jpg",
          alt: t_Section(
            "services.brandStoryGastronomy.images.img2Description"
          ),
          objectPosition: {
            default: "50% 27.5%",
            xs: "50% 27.5%",
            sm: "50% 30%",
            md: "50% 32.5%",
            lg: "50% 45%",
            xl: "50% 50%",
            xxl: "50% 50%",
          },
        },
        {
          src: "/images/sections-img/services-overview/brand-story-gastronomy/brand-story-gastronomy-3.jpg",
          alt: t_Section(
            "services.brandStoryGastronomy.images.img3Description"
          ),
          objectPosition: {
            default: "50% 50%",
            xs: "50% 50%",
            sm: "50% 50%",
            md: "50% 50%",
            lg: "50% 50%",
            xl: "50% 50%",
            xxl: "50% 50%",
          },
        },
        {
          src: "/images/sections-img/services-overview/brand-story-gastronomy/brand-story-gastronomy-4.jpg",
          alt: t_Section(
            "services.brandStoryGastronomy.images.img4Description"
          ),
        },
      ],
    },
    {
      key: "childrenStudioPortraits",
      heading: t_Section("services.childrenStudioPortraits.heading"),
      subheading: t_Section("services.childrenStudioPortraits.subheading"),
      description: t_Section("services.childrenStudioPortraits.description"),
      images: [
        {
          src: "/images/sections-img/services-overview/children-studio-portraits/children-studio-portraits-1.jpg",
          alt: t_Section(
            "services.childrenStudioPortraits.images.img1Description"
          ),
        },
        {
          src: "/images/sections-img/services-overview/children-studio-portraits/children-studio-portraits-2.jpg",
          alt: t_Section(
            "services.childrenStudioPortraits.images.img2Description"
          ),
        },
        {
          src: "/images/sections-img/services-overview/children-studio-portraits/children-studio-portraits-3.jpg",
          alt: t_Section(
            "services.childrenStudioPortraits.images.img3Description"
          ),
        },
        {
          src: "/images/sections-img/services-overview/children-studio-portraits/children-studio-portraits-4.jpg",
          alt: t_Section(
            "services.childrenStudioPortraits.images.img4Description"
          ),
        },
      ],
    },
  ];
  const exploreOurPortfolioBtn = t_Section("exploreOurPortfolioBtn");
  const bookASessionBtn = t_Common("bookASessionBtn");

  return (
    <section
      id="services-overview"
      className="services-overview"
      aria-labelledby="services-overview-heading"
    >
      <div className="services-overview-container">
        <h2
          id="services-overview-heading"
          className="services-overview-heading"
        >
          {sectionHeading}
        </h2>
        <p className="services-overview-description">{sectionDescription}</p>
        <div className="services-overview-services">
          {services.map((service) => (
            <div
              key={service.key}
              className="service-item"
              aria-labelledby={`${service.key}-heading`}
            >
              <EmblaCarousel
                slides={[0, 1, 2, 3]}
                options={{ loop: true, containScroll: false }}
                images={service.images}
              />
              <div className="service-text">
                <h3 id={`${service.key}-heading`} className="service-heading">
                  {service.heading}
                </h3>
                <p className="service-subheading">{service.subheading}</p>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="services-overview-cta">
          <Link
            href="/portfolio"
            className="explore-our-portfolio-btn"
            aria-label={exploreOurPortfolioBtn}
            prefetch
          >
            {exploreOurPortfolioBtn}
          </Link>

          <Link
            href="/contact-us"
            className="book-a-session-btn"
            aria-label={bookASessionBtn}
            prefetch
          >
            {bookASessionBtn}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
