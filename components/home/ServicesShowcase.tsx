import { FC } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// CSS
import "@/styles/home/services-showcase.css";

// Components
import Carousel from "../CommonComponents/Carousel";

const ServicesShowcase: FC = () => {
  const t_Section = useTranslations("Home.ServicesShowcase");
  const t_Common = useTranslations("Common");

  const sectionTitle = t_Section("sectionTitle");
  const sectionIntro = t_Section("sectionIntro");
  const services = [
    {
      serviceName: t_Section("services.weddingsQuinceañeras.name"),
      serviceTagline: t_Section("services.weddingsQuinceañeras.tagline"),
      serviceSummary: t_Section("services.weddingsQuinceañeras.summary"),
      serviceImages: [
        {
          imgSrc:
            "/images/sections-img/services-showcase/weddings-quinceaneras/weddings-quinceaneras-1.webp",
          imgDesc: t_Section(
            "services.weddingsQuinceañeras.images.img1Description",
          ),
          imgPosition: {
            xs: "50% 32.5%",
            default: "50% 27.5%",
            sm: "50% 38.5%",
            md: "50% 30%",
            lg: "50% 55%",
            xl: "50% 60%",
            xxl: "50% 75%",
          },
          imgWidth: 1600,
          imgHeight: 2400,
        },
        {
          imgSrc:
            "/images/sections-img/services-showcase/weddings-quinceaneras/weddings-quinceaneras-2.webp",
          imgDesc: t_Section(
            "services.weddingsQuinceañeras.images.img2Description",
          ),
          imgPosition: {
            xs: "50% 10%",
            default: "50% 10%",
            sm: "50% 15%",
            md: "50% 12.5%",
            lg: "50% 25%",
            xl: "50% 30%",
            xxl: "50% 35%",
          },
          imgWidth: 1600,
          imgHeight: 2400,
        },
        {
          imgSrc:
            "/images/sections-img/services-showcase/weddings-quinceaneras/weddings-quinceaneras-3.webp",
          imgDesc: t_Section(
            "services.weddingsQuinceañeras.images.img3Description",
          ),
          imgPosition: {
            xs: "50% 15%",
            default: "50% 15%",
            sm: "50% 22.5%",
            md: "50% 20%",
            lg: "50% 35%",
            xl: "50% 37.5%",
            xxl: "50% 40%",
          },
          imgWidth: 1600,
          imgHeight: 2400,
        },
        {
          imgSrc:
            "/images/sections-img/services-showcase/weddings-quinceaneras/weddings-quinceaneras-4.webp",
          imgDesc: t_Section(
            "services.weddingsQuinceañeras.images.img4Description",
          ),
          imgPosition: {
            xs: "50% 27.5%",
            default: "50% 20%",
            sm: "50% 27.5%",
            md: "50% 25%",
            lg: "50% 40%",
            xl: "50% 45%",
            xxl: "50% 50%",
          },
          imgWidth: 1600,
          imgHeight: 2400,
        },
      ],
    },
    {
      serviceName: t_Section("services.musicArtistsBTS.name"),
      serviceTagline: t_Section("services.musicArtistsBTS.tagline"),
      serviceSummary: t_Section("services.musicArtistsBTS.summary"),
      serviceImages: [
        {
          imgSrc:
            "/images/sections-img/services-showcase/music-artists-bts/music-artists-bts-1.webp",
          imgDesc: t_Section("services.musicArtistsBTS.images.img1Description"),
          imgPosition: {
            xs: "50% 50%",
            default: "50% 47.5%",
            sm: "50% 50%",
            md: "50% 50%",
            lg: "50% 50%",
            xl: "50% 50%",
            xxl: "50% 50%",
          },
          imgWidth: 1179,
          imgHeight: 2087,
        },

        {
          imgSrc:
            "/images/sections-img/services-showcase/music-artists-bts/music-artists-bts-2.webp",
          imgDesc: t_Section("services.musicArtistsBTS.images.img2Description"),
          imgPosition: {
            xs: "50% 25%",
            default: "50% 20%",
            sm: "50% 30%",
            md: "50% 25%",
            lg: "50% 40%",
            xl: "50% 40%",
            xxl: "50% 45%",
          },
          imgWidth: 1600,
          imgHeight: 2400,
        },
        {
          imgSrc:
            "/images/sections-img/services-showcase/music-artists-bts/music-artists-bts-3.webp",
          imgDesc: t_Section("services.musicArtistsBTS.images.img3Description"),
          imgPosition: {
            xs: "50% 50%",
            default: "50% 50%",
            sm: "50% 50%",
            md: "50% 50%",
            lg: "50% 50%",
            xl: "50% 50%",
            xxl: "50% 50%",
          },
          imgWidth: 1179,
          imgHeight: 2097,
        },
        {
          imgSrc:
            "/images/sections-img/services-showcase/music-artists-bts/music-artists-bts-4.webp",
          imgDesc: t_Section("services.musicArtistsBTS.images.img4Description"),
          imgPosition: {
            xs: "60% 50%",
            default: "65% 20%",
            sm: "50% 50%",
            md: "50% 50%",
            lg: "55% 50%",
            xl: "60% 50%",
            xxl: "60% 50%",
          },
          imgWidth: 1600,
          imgHeight: 2400,
        },
      ],
    },
    {
      serviceName: t_Section("services.eventsCorporateCoverage.name"),
      serviceTagline: t_Section("services.eventsCorporateCoverage.tagline"),
      serviceSummary: t_Section("services.eventsCorporateCoverage.summary"),
      serviceImages: [
        {
          imgSrc:
            "/images/sections-img/services-showcase/events-corporate-coverage/events-corporate-coverage-1.webp",
          imgDesc: t_Section(
            "services.eventsCorporateCoverage.images.img1Description",
          ),
          imgPosition: {
            xs: "50% 10%",
            default: "50% 7.5%",
            sm: "50% 12.5%",
            md: "50% 10%",
            lg: "50% 12.5%",
            xl: "50% 15%",
            xxl: "50% 20%",
          },
          imgWidth: 4000,
          imgHeight: 6000,
        },
        {
          imgSrc:
            "/images/sections-img/services-showcase/events-corporate-coverage/events-corporate-coverage-2.webp",
          imgDesc: t_Section(
            "services.eventsCorporateCoverage.images.img2Description",
          ),
          imgPosition: {
            xs: "50% 12.5%",
            default: "50% 10%",
            sm: "50% 12.5%",
            md: "50% 12.5%",
            lg: "50% 20%",
            xl: "50% 22.5%",
            xxl: "50% 25%",
          },
          imgWidth: 4000,
          imgHeight: 6000,
        },
        {
          imgSrc:
            "/images/sections-img/services-showcase/events-corporate-coverage/events-corporate-coverage-3.webp",
          imgDesc: t_Section(
            "services.eventsCorporateCoverage.images.img3Description",
          ),
          imgPosition: {
            xs: "50% 70%",
            default: "50% 70%",
            sm: "50% 72.5%",
            md: "50% 75%",
            lg: "50% 50%",
            xl: "50% 50%",
            xxl: "50% 50%",
          },
          imgWidth: 3072,
          imgHeight: 4096,
        },
        {
          imgSrc:
            "/images/sections-img/services-showcase/events-corporate-coverage/events-corporate-coverage-4.webp",
          imgDesc: t_Section(
            "services.eventsCorporateCoverage.images.img4Description",
          ),
          imgPosition: {
            xs: "25% 50%",
            default: "50% 50%",
            sm: "40% 50%",
            md: "50% 50%",
            lg: "50% 50%",
            xl: "50% 50%",
            xxl: "40% 50%",
          },
          imgWidth: 6000,
          imgHeight: 4000,
        },
      ],
    },
    {
      serviceName: t_Section("services.personalFashionPortraits.name"),
      serviceTagline: t_Section("services.personalFashionPortraits.tagline"),
      serviceSummary: t_Section("services.personalFashionPortraits.summary"),
      serviceImages: [
        {
          imgSrc:
            "/images/sections-img/services-showcase/personal-fashion-portraits/personal-fashion-portraits-1.webp",
          imgDesc: t_Section(
            "services.personalFashionPortraits.images.img1Description",
          ),
          imgPosition: {
            xs: "50% 40%",
            default: "50% 40%",
            sm: "50% 45%",
            md: "50% 37.5%",
            lg: "50% 65%",
            xl: "50% 62.5%",
            xxl: "50% 55%",
          },
          imgWidth: 1080,
          imgHeight: 1619,
        },
        {
          imgSrc:
            "/images/sections-img/services-showcase/personal-fashion-portraits/personal-fashion-portraits-2.webp",
          imgDesc: t_Section(
            "services.personalFashionPortraits.images.img2Description",
          ),
          imgPosition: {
            xs: "50% 10%",
            default: "50% 8.75%",
            sm: "50% 12.5%",
            md: "50% 11.25%",
            lg: "50% 20%",
            xl: "50% 20%",
            xxl: "50% 22.5%",
          },
          imgWidth: 1365,
          imgHeight: 2048,
        },
        {
          imgSrc:
            "/images/sections-img/services-showcase/personal-fashion-portraits/personal-fashion-portraits-3.webp",
          imgDesc: t_Section(
            "services.personalFashionPortraits.images.img3Description",
          ),
          imgPosition: {
            xs: "50% 45%",
            default: "50% 35%",
            sm: "50% 52.5%",
            md: "50% 45%",
            lg: "50% 80%",
            xl: "50% 85%",
            xxl: "50% 90%",
          },
          imgWidth: 683,
          imgHeight: 1024,
        },
        {
          imgSrc:
            "/images/sections-img/services-showcase/personal-fashion-portraits/personal-fashion-portraits-4.webp",
          imgDesc: t_Section(
            "services.personalFashionPortraits.images.img4Description",
          ),
          imgPosition: {
            xs: "50% 5%",
            default: "50% 2.5%",
            sm: "50% 10%",
            md: "50% 5%",
            lg: "50% 50%",
            xl: "50% 50%",
            xxl: "50% 50%",
          },
          imgWidth: 1600,
          imgHeight: 1685,
        },
      ],
    },
    {
      serviceName: t_Section("services.brandStoryGastronomy.name"),
      serviceTagline: t_Section("services.brandStoryGastronomy.tagline"),
      serviceSummary: t_Section("services.brandStoryGastronomy.summary"),
      serviceImages: [
        {
          imgSrc:
            "/images/sections-img/services-showcase/brand-story-gastronomy/brand-story-gastronomy-1.webp",
          imgDesc: t_Section(
            "services.brandStoryGastronomy.images.img1Description",
          ),
          imgPosition: {
            xs: "50% 95%",
            default: "50% 97.5%",
            sm: "50% 95%",
            md: "50% 95%",
            lg: "50% 100%",
            xl: "50% 100%",
            xxl: "50% 100%",
          },
          imgWidth: 3024,
          imgHeight: 4032,
        },
        {
          imgSrc:
            "/images/sections-img/services-showcase/brand-story-gastronomy/brand-story-gastronomy-2.webp",
          imgDesc: t_Section(
            "services.brandStoryGastronomy.images.img2Description",
          ),
          imgPosition: {
            xs: "50% 27.5%",
            default: "50% 27.5%",
            sm: "50% 30%",
            md: "50% 32.5%",
            lg: "50% 45%",
            xl: "50% 50%",
            xxl: "50% 50%",
          },
          imgWidth: 4000,
          imgHeight: 6000,
        },
        {
          imgSrc:
            "/images/sections-img/services-showcase/brand-story-gastronomy/brand-story-gastronomy-3.webp",
          imgDesc: t_Section(
            "services.brandStoryGastronomy.images.img3Description",
          ),
          imgPosition: {
            xs: "30% 50%",
            default: "50% 50%",
            sm: "40% 50%",
            md: "40% 50%",
            lg: "50% 50%",
            xl: "50% 30%",
            xxl: "50% 50%",
          },
          imgWidth: 2400,
          imgHeight: 1600,
        },
        {
          imgSrc:
            "/images/sections-img/services-showcase/brand-story-gastronomy/brand-story-gastronomy-4.webp",
          imgDesc: t_Section(
            "services.brandStoryGastronomy.images.img4Description",
          ),
          imgPosition: {
            xs: "50% 52.5%",
            default: "50% 37.5%",
            sm: "50% 60%",
            md: "50% 50%",
            lg: "50% 75%",
            xl: "50% 80%",
            xxl: "50% 80%",
          },
          imgWidth: 1600,
          imgHeight: 2208,
        },
      ],
    },
    {
      serviceName: t_Section("services.childrenStudioPortraits.name"),
      serviceTagline: t_Section("services.childrenStudioPortraits.tagline"),
      serviceSummary: t_Section("services.childrenStudioPortraits.summary"),
      serviceImages: [
        {
          imgSrc:
            "/images/sections-img/services-showcase/children-studio-portraits/children-studio-portraits-1.webp",
          imgDesc: t_Section(
            "services.childrenStudioPortraits.images.img1Description",
          ),
          imgPosition: {
            xs: "67.5% 50%",
            default: "50% 50%",
            sm: "72.5% 50%",
            md: "72.5% 50%",
            lg: "80% 50%",
            xl: "80% 50%",
            xxl: "80% 50%",
          },
          imgWidth: 2400,
          imgHeight: 1600,
        },
        {
          imgSrc:
            "/images/sections-img/services-showcase/children-studio-portraits/children-studio-portraits-2.webp",
          imgDesc: t_Section(
            "services.childrenStudioPortraits.images.img2Description",
          ),
          imgPosition: {
            xs: "50% 5%",
            default: "50% 2.5%",
            sm: "50% 5%",
            md: "50% 5%",
            lg: "50% 5%",
            xl: "50% 5%",
            xxl: "50% 5%",
          },
          imgWidth: 1600,
          imgHeight: 2400,
        },
        {
          imgSrc:
            "/images/sections-img/services-showcase/children-studio-portraits/children-studio-portraits-3.webp",
          imgDesc: t_Section(
            "services.childrenStudioPortraits.images.img3Description",
          ),
          imgPosition: {
            xs: "50% 35%",
            default: "50% 35%",
            sm: "50% 40%",
            md: "50% 32.5%",
            lg: "50% 60%",
            xl: "50% 65%",
            xxl: "50% 67.5%",
          },
          imgWidth: 1600,
          imgHeight: 2400,
        },
        {
          imgSrc:
            "/images/sections-img/services-showcase/children-studio-portraits/children-studio-portraits-4.webp",
          imgDesc: t_Section(
            "services.childrenStudioPortraits.images.img4Description",
          ),
          imgPosition: {
            xs: "50% 5%",
            default: "50% 5%",
            sm: "30% 5%",
            md: "50% 5%",
            lg: "50% 5%",
            xl: "50% 5%",
            xxl: "50% 5%",
          },
          imgWidth: 1984,
          imgHeight: 2976,
        },
      ],
    },
  ];

  const exploreOurPortfolioBtn = t_Section("exploreOurPortfolioBtn");
  const bookASessionBtn = t_Common("bookASessionBtn");

  return (
    <section
      id="services-showcase"
      className="services-showcase"
      aria-labelledby="services-showcase__title"
    >
      <div className="services-showcase__wrapper">
        <h2 id="services-showcase__title" className="services-showcase__title">
          {sectionTitle}
        </h2>
        <p className="services-showcase__intro">{sectionIntro}</p>
        <div className="services-showcase__services">
          {services.map((service, index) => (
            <div
              key={index}
              className="services-showcase__service"
              aria-labelledby={`${service.serviceName} Service`}
            >
              <Carousel
                slides={[0, 1, 2, 3]}
                options={{ loop: true, containScroll: false }}
                images={service.serviceImages}
                ariaLabel={`${service.serviceName} Slideshow`}
                section="services-showcase"
              />
              <div className="services-showcase__service-details">
                <h3
                  id={`${service.serviceName}`}
                  className="services-showcase__service-name"
                >
                  {service.serviceName}
                </h3>
                <p className="services-showcase__service-tagline">
                  {service.serviceTagline}
                </p>
                <p className="services-showcase__service-summary">
                  {service.serviceSummary}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="services-showcase__actions">
          <Link
            href="/portfolio"
            className="services-showcase__actions--explore-portfolio-btn"
            aria-label={exploreOurPortfolioBtn}
            prefetch
          >
            {exploreOurPortfolioBtn}
          </Link>

          <Link
            href="/contact-us"
            className="services-showcase__actions--book-session-btn"
            aria-label={bookASessionBtn}
            prefetch
          >
            {bookASessionBtn}
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default ServicesShowcase;
