import React, { FC } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// CSS
import "@/styles/about-us/our-story.css";

// Images
import ourStoryImgSrc from "@/public/images/sections-img/our-story.jpg";

// Icons
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

const OurStory: FC = () => {
  const t_OurStory_AboutUs = useTranslations("AboutUs.OurStory");
  const t_Common = useTranslations("Common");

  const { sectionHeading, description, imgAltText } = {
    sectionHeading: t_OurStory_AboutUs("sectionHeading"),
    imgAltText: t_OurStory_AboutUs("imgAltText"),
    description: t_OurStory_AboutUs("description"),
  };

  const { bookASessionBtn, companySlogan } = {
    bookASessionBtn: t_Common("bookASessionBtn"),
    companySlogan: t_Common("companySlogan"),
  };

  return (
    <section className="our-story" aria-labelledby="our-story-heading">
      <div className="our-story-container">
        <h2 id="our-story-heading" className="our-story-heading">
          {sectionHeading}
        </h2>

        <div className="our-story-content">
          <div className="our-story-img-content">
            <Image
              src={ourStoryImgSrc}
              width={1440}
              height={1440}
              alt={imgAltText}
              className="our-story-img"
              sizes="(max-width: 768px) 100vw, 50vw"
              aria-describedby="our-story-description"
              priority
              placeholder="blur"
              layout="responsive"
            />
          </div>

          <div className="our-story-text-content">
            <h3 className="our-story-company-slogan">
              <FaQuoteLeft className="our-story-company-slogan-quote-left" />
              <span className="our-story-company-slogan-text">
                {companySlogan}
              </span>
              <FaQuoteRight className="our-story-company-slogan-quote-right" />
            </h3>

            <p className="our-story-description">{description}</p>

            <Link
              href="/contact-us"
              className="our-story-book-a-session-btn"
              aria-label={bookASessionBtn}
              prefetch
            >
              {bookASessionBtn}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

OurStory.displayName = "OurStory";

export default OurStory;
