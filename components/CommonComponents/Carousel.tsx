"use client";

import React, { FC, CSSProperties } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./CarouselArrowButtons";
import { DotButton, useDotButton } from "./CarouselDotButton";
import Image from "next/image";

// For Client Stories Experiences Section Carousels Only
type ClientStoryType = {
  clientImgSrc: string;
  clientImgWidth: number;
  clientImgHeight: number;
  clientImgPosition: {
    xs: string;
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  clientImgDesc: string;
  clientTestimonial: string;
  clientInfo: string;
};

type CarouselPropsType = {
  slides: number[];
  images?: {
    imgSrc: string;
    imgDesc: string;
    imgWidth: number;
    imgHeight: number;
    imgPosition: {
      xs: string;
      default: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
  }[]; // For Services Showcase Section Carousels Only
  options?: EmblaOptionsType;
  clientStoriesData?: ClientStoryType[];
  ariaLabel?: string;
  section: "client-stories-experiences" | "services-showcase";
};

const Carousel: FC<CarouselPropsType> = (props) => {
  const { slides, images, clientStoriesData, options, ariaLabel, section } =
    props;

  const carouselPlugins = [];

  if (section == "services-showcase") {
    carouselPlugins.push(Fade());
  }

  const [emblaRef, emblaApi] = useEmblaCarousel(options, carouselPlugins);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const slideImages = images ? images : [];

  return (
    <div className={`${section}-carousel`} role="region" aria-label={ariaLabel}>
      <div className={`${section}-carousel__viewport`} ref={emblaRef}>
        <div className={`${section}-carousel__track`}>
          {section === "services-showcase" &&
            slides.map((index) => (
              <div className="service__slide" key={index}>
                <Image
                  className="service__slide-img"
                  src={slideImages[index].imgSrc}
                  alt={slideImages[index].imgDesc}
                  width={slideImages[index].imgWidth}
                  height={slideImages[index].imgHeight}
                  style={
                    slideImages[index].imgPosition
                      ? ({
                          "--object-position-xs":
                            slideImages[index].imgPosition!.xs,
                          "--object-position-default":
                            slideImages[index].imgPosition!.default,
                          "--object-position-sm":
                            slideImages[index].imgPosition!.sm,
                          "--object-position-md":
                            slideImages[index].imgPosition!.md,
                          "--object-position-lg":
                            slideImages[index].imgPosition!.lg,
                          "--object-position-xl":
                            slideImages[index].imgPosition!.xl,
                          "--object-position-xxl":
                            slideImages[index].imgPosition!.xxl,
                        } as CSSProperties)
                      : undefined
                  }
                />
              </div>
            ))}

          {section === "client-stories-experiences" &&
            clientStoriesData &&
            slides.map((index) => {
              const story = clientStoriesData[index];
              return (
                <div className="client-story__slide" key={index}>
                  <div className="client-story__content">
                    <div className="client-story__image">
                      <Image
                        className="client-story__img"
                        src={story.clientImgSrc}
                        alt={story.clientImgDesc}
                        width={story.clientImgWidth}
                        height={story.clientImgHeight}
                        style={
                          story.clientImgPosition
                            ? ({
                                "--object-position-xs":
                                  story.clientImgPosition!.xs,
                                "--object-position-default":
                                  story.clientImgPosition!.default,
                                "--object-position-sm":
                                  story.clientImgPosition!.sm,
                                "--object-position-md":
                                  story.clientImgPosition!.md,
                                "--object-position-lg":
                                  story.clientImgPosition!.lg,
                                "--object-position-xl":
                                  story.clientImgPosition!.xl,
                                "--object-position-xxl":
                                  story.clientImgPosition!.xxl,
                              } as CSSProperties)
                            : undefined
                        }
                      />
                    </div>

                    <div className="client-story__details">
                      <blockquote className="client-story__testimonial">
                        "{story.clientTestimonial}"
                      </blockquote>
                      <cite className="client-story__client-info">
                        {story.clientInfo}
                      </cite>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <div className={`${section}-carousel__controls`}>
        <div className={`${section}-carousel__arrow-btns`}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
        <div className={`${section}-carousel__dot-btns`}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"carousel__dot-btn".concat(
                index === selectedIndex ? " carousel__dot-btn--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
